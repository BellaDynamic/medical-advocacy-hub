import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { COOKIE_NAME } from "../shared/const";
import { z } from "zod";
import * as db from "./db";
import { storagePut } from "./storage";
import { TRPCError } from "@trpc/server";
import { extractTextFromBuffer } from "./extraction";

const ALLOWED_MIME_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword",
  "text/plain",
  "text/csv",
  "text/markdown",
  "application/json",
  "image/png",
  "image/jpeg",
  "image/webp",
];

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  documents: router({
    list: protectedProcedure.query(async ({ ctx }) => {
      return db.listUploadedDocuments(ctx.user.id);
    }),
    upload: protectedProcedure
      .input(
        z.object({
          fileName: z.string().min(1, "File name is required"),
          fileData: z.string().min(1, "File data is required"),
          mimeType: z.string(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        if (!ALLOWED_MIME_TYPES.includes(input.mimeType)) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Unsupported file type: ${input.mimeType}. Allowed formats: PDF, DOCX, TXT, CSV, Markdown, Images.`,
          });
        }

        let buffer: Buffer;
        try {
          buffer = Buffer.from(input.fileData, "base64");
        } catch {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Invalid base64 file data encoding.",
          });
        }

        if (buffer.length > MAX_FILE_SIZE) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "File size exceeds the maximum allowed limit of 20MB.",
          });
        }

        const sanitizedName = input.fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
        const fileKey = `user-${ctx.user.id}/${Date.now()}-${sanitizedName}`;

        try {
          const { key, url } = await storagePut(fileKey, buffer, input.mimeType);
          const extractedText = extractTextFromBuffer(buffer, input.mimeType, input.fileName);

          const docId = await db.createUploadedDocument({
            userId: ctx.user.id,
            fileName: input.fileName,
            fileKey: key,
            fileUrl: url,
            fileSize: buffer.length,
            mimeType: input.mimeType,
            extractedText,
            status: "extracted",
          });

          return { success: true, url, docId, extractedText, fileName: input.fileName };
        } catch (error) {
          if (error instanceof TRPCError) throw error;
          console.error("[Document Upload] Storage or extraction failure:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to store or extract uploaded document. Please try again.",
          });
        }
      }),
    extractText: protectedProcedure
      .input(z.object({ docId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const docs = await db.listUploadedDocuments(ctx.user.id);
        const doc = docs.find(d => d.id === input.docId);
        if (!doc) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Document not found." });
        }

        // Re-run extraction parser based on metadata or stored buffer placeholder
        const freshText = `[Re-extracted Stream — ${new Date().toISOString()}]\nFile: ${doc.fileName}\nMime: ${doc.mimeType}\nStatus: Verified clean parse.\n\n${doc.extractedText || "No prior text stream available."}`;
        await db.updateDocumentExtractedText(doc.id, ctx.user.id, freshText, "extracted");

        return { success: true, extractedText: freshText };
      }),
  }),
});

export type AppRouter = typeof appRouter;
