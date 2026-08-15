# Medical Advocacy Hub — Project TODO (Archived & Preserved)

## COMPLETED TASKS & PRESERVATION SUMMARY
- [x] Quarantined outdated acute rescue and general saline guidance on the rescue protocol page and home banner.
- [x] Created `ARCHIVAL_CORRECTION_NOTICE.md` to document superseded content and guide future clinical updates/mergers.
- [x] Packaged the entire project into `/home/ubuntu/medical-advocacy-hub-archive.tar.gz` for offline download and backup.
- [x] Saved checkpoints and prepared the repository for independent hosting or migration.
- [x] Remove purple-on-blue and red color treatments across the website, replace them with accessible cream/rose-plum/deep-plum-black styling, and verify the rendered result.
- [x] Add or update Vitest coverage for the color-token and archival-warning behavior before delivery.

## Archived Content History
- [x] Preserved prior medical-advocacy-hub archive and migration handoff.
- [x] Quarantined outdated acute rescue/saline protocol content.
- [x] Build the Content Merge & Revision Hub (`client/src/pages/ContentMergeHub.tsx`) to intake external site details and manage the merge workflow.
- [x] Register `/merge-hub` route in `client/src/App.tsx` and link it from navigation.
- [x] Create `CONTENT_MERGE_PROTOCOL.md` specifying rules for combining genomic protocols with external site details.
- [x] Verify build and tests with Vitest coverage for merge routing.
- [x] Add `uploaded_documents` table in `drizzle/schema.ts` and generate migration.
- [x] Add tRPC mutation and query in `server/routers.ts` for file uploads using `storagePut`.
- [x] Update `ContentMergeHub.tsx` with a drag-and-drop / file picker upload UI and uploaded documents list.
- [x] Add Vitest test coverage for upload procedure and UI, verify build, and checkpoint.
- [x] Add `extractedText` column to `uploaded_documents` table in schema and apply via SQL migration.
- [x] Implement text parsing / extraction utility for uploaded text, CSV, markdown, and document buffers in server.
- [x] Add `documents.extractText` tRPC mutation in `server/routers.ts`.
- [x] Update `ContentMergeHub.tsx` to display extracted text in a review modal/accordion with status badges.
- [x] Add Vitest test coverage for text extraction and review endpoints, verify build, and checkpoint.
- [x] Freeze feature development and create a final recovery-focused export package.
- [x] Build a static HTML-ready export and current source/database inventory for independent hosting.
- [x] Upload the recovery package to Google Drive and verify the Drive copy.
- [x] Save a final preservation checkpoint and document the required Manus Task Data Backup steps.
