import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

vi.mock("./storage", () => ({
  storagePut: vi.fn(async (key: string, buffer: Buffer, mimeType: string) => ({
    key,
    url: `/manus-storage/${key}`,
  })),
}));

let mockDocs = [
  {
    id: 1,
    userId: 1,
    fileName: "lab_results.txt",
    fileKey: "user-1/labs.txt",
    fileUrl: "/manus-storage/user-1/labs.txt",
    fileSize: 45,
    mimeType: "text/plain",
    extractedText: "Patient Lab Results: Calcium normal, PTH stable.",
    status: "extracted" as const,
    createdAt: new Date(),
  },
];

vi.mock("./db", () => ({
  createUploadedDocument: vi.fn(async (doc) => {
    const newDoc = {
      id: mockDocs.length + 1,
      ...doc,
      createdAt: new Date(),
    };
    mockDocs.push(newDoc);
    return newDoc.id;
  }),
  listUploadedDocuments: vi.fn(async (userId: number) => mockDocs.filter(d => d.userId === userId)),
  updateDocumentExtractedText: vi.fn(async (docId, userId, text, status) => {
    const doc = mockDocs.find(d => d.id === docId);
    if (doc) {
      doc.extractedText = text;
      doc.status = status;
    }
  }),
}));

function createMockContext(userId?: number): TrpcContext {
  return {
    user: userId
      ? {
          id: userId,
          openId: "test-user-openid",
          email: "test@example.com",
          name: "Test User",
          loginMethod: "manus",
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
          lastSignedIn: new Date(),
        }
      : null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("documents router and extraction", () => {
  it("rejects document upload when unauthenticated", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.documents.upload({
        fileName: "unauth.txt",
        fileData: Buffer.from("test").toString("base64"),
        mimeType: "text/plain",
      })
    ).rejects.toThrow();
  });

  it("extracts text automatically on upload for plain text and CSV", async () => {
    const ctx = createMockContext(1);
    const caller = appRouter.createCaller(ctx);

    const result = await caller.documents.upload({
      fileName: "notes.txt",
      fileData: Buffer.from("Genomic variant STX16 reviewed.").toString("base64"),
      mimeType: "text/plain",
    });

    expect(result.success).toBe(true);
    expect(result.extractedText).toContain("Genomic variant STX16 reviewed.");
  });

  it("triggers re-extraction via extractText mutation", async () => {
    const ctx = createMockContext(1);
    const caller = appRouter.createCaller(ctx);

    const res = await caller.documents.extractText({ docId: 1 });
    expect(res.success).toBe(true);
    expect(res.extractedText).toContain("Re-extracted Stream");
  });

  it("rejects extraction for non-existent document ID", async () => {
    const ctx = createMockContext(1);
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.documents.extractText({ docId: 9999 })
    ).rejects.toThrow(/Document not found/);
  });
});
