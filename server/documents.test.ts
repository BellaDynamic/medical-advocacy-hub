import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock storagePut so tests don't require live S3 credentials
vi.mock("./storage", () => ({
  storagePut: vi.fn(async (key: string, buffer: Buffer, mimeType: string) => ({
    key,
    url: `/manus-storage/${key}`,
  })),
}));

// Mock database helpers
vi.mock("./db", () => ({
  createUploadedDocument: vi.fn(async () => 1),
  listUploadedDocuments: vi.fn(async (userId: number) => [
    {
      id: 1,
      userId,
      fileName: "test_record.pdf",
      fileKey: "user-1/test.pdf",
      fileUrl: "/manus-storage/user-1/test.pdf",
      fileSize: 1024,
      mimeType: "application/pdf",
      status: "staged" as const,
      createdAt: new Date(),
    },
  ]),
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

describe("documents router", () => {
  it("rejects document upload when unauthenticated", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.documents.upload({
        fileName: "unauth.pdf",
        fileData: Buffer.from("test").toString("base64"),
        mimeType: "application/pdf",
      })
    ).rejects.toThrow();
  });

  it("rejects unsupported MIME types", async () => {
    const ctx = createMockContext(1);
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.documents.upload({
        fileName: "malicious.exe",
        fileData: Buffer.from("MZ").toString("base64"),
        mimeType: "application/x-msdownload",
      })
    ).rejects.toThrow(/Unsupported file type/);
  });

  it("successfully uploads a valid PDF document", async () => {
    const ctx = createMockContext(1);
    const caller = appRouter.createCaller(ctx);

    const result = await caller.documents.upload({
      fileName: "medical_notes.pdf",
      fileData: Buffer.from("PDF content here").toString("base64"),
      mimeType: "application/pdf",
    });

    expect(result.success).toBe(true);
    expect(result.url).toContain("/manus-storage/");
    expect(result.fileName).toBe("medical_notes.pdf");
  });

  it("lists uploaded documents for authenticated user", async () => {
    const ctx = createMockContext(1);
    const caller = appRouter.createCaller(ctx);

    const docs = await caller.documents.list();
    expect(docs).toHaveLength(1);
    expect(docs[0]?.fileName).toBe("test_record.pdf");
  });
});
