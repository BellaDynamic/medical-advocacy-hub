# Preservation Handoff — Frozen Revision

**Project:** `medical-advocacy-hub`  
**Frozen checkpoint:** `af2ba3b9`  
**Purpose:** Preserve the current source, compiled HTML-ready site, database schema, and migration history before any platform interruption or future merger work.

## What This Package Preserves

The recovery archive includes the current React/tRPC source, compiled production assets under `dist/public`, the Drizzle schema and SQL migrations, clinical and merge handoff documents, slide-source files, and the quarantine notice for outdated acute rescue content.

> **Clinical status:** The rescue and general-saline material remains quarantined. Nothing in this package should be treated as current medical direction until reviewed and replaced with verified clinical instructions.

## Current Database Inventory

| Item | Status at freeze |
|---|---|
| `uploaded_documents` rows | 0 |
| Uploaded external files | None stored in the application database inventory |
| Database schema | Included in `drizzle/schema.ts` and `drizzle/*.sql` |
| Original uploaded files | Must be preserved through the Manus Task Data Backup if they are added later |

## How to Use the HTML-Ready Export

The `dist/public` directory is the compiled frontend output. It can be hosted as a static site for archival viewing. The full interactive upload, login, database, and storage functions require the accompanying server, database, OAuth, storage, and environment configuration described in `MIGRATION_HANDOFF.md`.

## Required Independent Backup Step

Create a **Task Data Backup** in the Manus backup portal before the stated deadline. A source archive is not a replacement for that backup because it does not reproduce the managed database, uploaded storage, secrets, or hosted capabilities.

1. Open [Manus Data Backup](https://manus.im/backup).
2. Choose **Export task data → Export more → All tasks → All time → Start export** for the broadest snapshot, or **Custom export → Website tasks → All time** for this website.
3. Keep each complete package unchanged and verify it exists in your chosen destination.
4. Perform a final new export after any additional uploads or edits, because every export is a point-in-time snapshot.

## Freeze Rule

No further feature development should occur in this project until the user explicitly instructs a new revision after the reset. Any future work should begin from the newest preserved archive and current Task Data Backup.
