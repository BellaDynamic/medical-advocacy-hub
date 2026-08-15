import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, uploadedDocuments, UploadedDocument, InsertUploadedDocument } from "../drizzle/schema";
import { ENV } from './_core/env';
import { eq, desc } from "drizzle-orm";

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return null;
  const [user] = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return user || null;
}

export async function createUploadedDocument(doc: InsertUploadedDocument): Promise<number> {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const [result] = await db.insert(uploadedDocuments).values(doc);
  return result.insertId;
}

export async function listUploadedDocuments(userId: number): Promise<UploadedDocument[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(uploadedDocuments).where(eq(uploadedDocuments.userId, userId)).orderBy(desc(uploadedDocuments.createdAt));
}

export async function updateDocumentExtractedText(docId: number, userId: number, text: string, status: "extracted" | "verified"): Promise<void> {
  const db = await getDb();
  if (!db) return;
  await db.update(uploadedDocuments)
    .set({ extractedText: text, status })
    .where(eq(uploadedDocuments.id, docId));
}
