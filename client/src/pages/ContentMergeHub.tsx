import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronLeft, Layers, GitMerge, FileCheck, ShieldAlert, ArrowRight, Upload, FileText, CheckCircle2, Eye, FileCode } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";
import { startLogin } from "@/const";
import type { UploadedDocument } from "../../../drizzle/schema";

export default function ContentMergeHub() {
  const { user } = useAuth();
  const utils = trpc.useUtils();
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<UploadedDocument | null>(null);

  const { data: documents, isLoading: docsLoading } = trpc.documents.list.useQuery(undefined, {
    enabled: !!user,
  });

  const uploadMutation = trpc.documents.upload.useMutation({
    onSuccess: (data) => {
      setUploading(false);
      setUploadMessage("Document successfully uploaded and automatically extracted!");
      utils.documents.list.invalidate();
    },
    onError: (err) => {
      setUploading(false);
      setUploadMessage(`Upload failed: ${err.message}`);
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) {
      setUploadMessage("File size exceeds 20MB limit.");
      return;
    }

    setUploading(true);
    setUploadMessage(`Uploading and extracting text from ${file.name}...`);

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const base64Data = result.split(",")[1];
      if (!base64Data) {
        setUploading(false);
        setUploadMessage("Failed to read file contents.");
        return;
      }

      uploadMutation.mutate({
        fileName: file.name,
        fileData: base64Data,
        mimeType: file.type || "application/octet-stream",
      });
    };
    reader.onerror = () => {
      setUploading(false);
      setUploadMessage("Error reading file.");
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-accent hover:text-accent/80 transition">
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Merge & Revision Hub</span>
        </div>
      </nav>

      <main className="container max-w-5xl py-12 space-y-12">
        {/* Header Section */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <GitMerge className="w-8 h-8 text-accent" />
            <h1 className="text-4xl font-bold text-accent">Content Merge & Revision Hub</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Staging environment for uploading medical documents, automatically extracting text streams, and integrating clinical notes into the master advocacy architecture.
          </p>
        </section>

        {/* Status Callout */}
        <section>
          <div className="directive-box">
            <div className="flex gap-4">
              <ShieldAlert className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">AUTOMATED TEXT EXTRACTION & VERIFICATION</h3>
                <p className="text-foreground text-sm mb-2">
                  Uploaded documents are automatically scanned and parsed into text streams for review. Original files remain unaltered in S3 storage while extracted drafts are queued for clinical verification.
                </p>
                <p className="text-foreground text-xs font-semibold">
                  Status: OCR & Parsing Engine active.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Document Upload & List Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-accent border-b border-border pb-2 flex items-center gap-2">
            <Upload className="w-6 h-6" /> Document Upload & Text Review
          </h2>

          {!user ? (
            <Card className="bg-card border-border p-8 text-center space-y-4">
              <p className="text-muted-foreground">Please sign in to securely upload documents and review extracted text.</p>
              <button
                onClick={() => startLogin()}
                className="bg-accent text-accent-foreground px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition"
              >
                Sign In to Upload
              </button>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border p-6 space-y-4">
                <h3 className="text-xl font-bold text-accent">Upload Medical Record</h3>
                <p className="text-sm text-muted-foreground">
                  Upload PDF, DOCX, TXT, CSV, or medical images. Text extraction runs automatically upon upload.
                </p>

                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center space-y-4 hover:border-accent transition">
                  <Upload className="w-10 h-10 text-accent mx-auto" />
                  <div>
                    <label htmlFor="file-upload" className="cursor-pointer bg-accent/10 text-accent hover:bg-accent/20 px-4 py-2 rounded-md font-semibold text-sm transition inline-block">
                      Choose File
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      disabled={uploading}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Supported formats: PDF, DOCX, TXT, CSV, Images (Max 20MB)</p>
                </div>

                {uploadMessage && (
                  <p className={`text-sm font-semibold ${uploadMessage.includes("failed") || uploadMessage.includes("exceeds") ? "text-destructive" : "text-accent"}`}>
                    {uploadMessage}
                  </p>
                )}
              </Card>

              <Card className="bg-card border-border p-6 space-y-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">Uploaded & Extracted Files</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Click "Review Text" to inspect automatically parsed document contents.
                  </p>

                  {docsLoading ? (
                    <p className="text-sm text-muted-foreground">Loading documents...</p>
                  ) : !documents || documents.length === 0 ? (
                    <div className="text-center py-8 border border-border rounded-lg text-muted-foreground text-sm">
                      No documents uploaded yet.
                    </div>
                  ) : (
                    <ul className="space-y-3 max-h-60 overflow-y-auto pr-2">
                      {documents.map((doc) => (
                        <li key={doc.id} className="bg-background/50 border border-border p-3 rounded-md flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2 truncate">
                            <FileText className="w-4 h-4 text-accent flex-shrink-0" />
                            <span className="truncate font-medium">{doc.fileName}</span>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded capitalize">{doc.status}</span>
                            <button
                              onClick={() => setSelectedDoc(doc)}
                              className="text-xs bg-accent text-accent-foreground px-2.5 py-1 rounded font-semibold hover:opacity-90 transition flex items-center gap-1"
                            >
                              <Eye className="w-3.5 h-3.5" /> Review Text
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="text-xs text-muted-foreground pt-4 border-t border-border flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Original files preserved in S3 storage
                </div>
              </Card>
            </div>
          )}
        </section>

        {/* Extracted Text Review Modal / Panel */}
        {selectedDoc && (
          <section className="bg-card border-2 border-accent/40 p-6 rounded-lg space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <FileCode className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-accent">Extracted Text Review: {selectedDoc.fileName}</h3>
              </div>
              <button
                onClick={() => setSelectedDoc(null)}
                className="text-sm text-muted-foreground hover:text-foreground font-semibold"
              >
                Close Panel ✕
              </button>
            </div>
            <div className="bg-background p-4 rounded-md border border-border max-h-96 overflow-y-auto font-mono text-xs whitespace-pre-wrap leading-relaxed text-foreground">
              {selectedDoc.extractedText || "No text extracted for this document."}
            </div>
            <div className="flex justify-between items-center text-xs text-muted-foreground pt-2">
              <span>MIME Type: {selectedDoc.mimeType} | Size: {selectedDoc.fileSize} bytes</span>
              <a
                href={selectedDoc.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline font-semibold"
              >
                Open Original File in New Tab →
              </a>
            </div>
          </section>
        )}

        {/* Action Footer */}
        <section className="bg-card border border-border p-8 rounded-lg text-center space-y-4">
          <h3 className="text-xl font-bold text-accent">Ready to Execute Merger?</h3>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Once external site details are uploaded and reviewed, they will be formatted according to the Nocturnal Luxury clinical aesthetic and packaged into the final deployable revision.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link href="/directive" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm inline-flex items-center gap-2 hover:opacity-90 transition">
              View Clinical Directive <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
