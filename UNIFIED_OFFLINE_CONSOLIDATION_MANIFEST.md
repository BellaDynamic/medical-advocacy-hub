# Unified Offline Consolidation Manifest

**Freeze date:** August 16, 2026  
**Purpose:** Provide one offline package that combines all material currently accessible from the active website project, the project-shared source directory, and the current task-upload directory.

## Included Source Groups

| Source group | Location at consolidation | Inventory | Treatment in archive |
|---|---|---:|---|
| Active website project | `/home/ubuntu/medical-advocacy-hub` | 210 project files before the current manifest | Copied as source, excluding dependency/cache folders; compiled static assets included separately |
| Project-shared records | `/home/ubuntu/projects/medical-crisis-risk-mediation-an-04fe68c5` | 46 files | Copied intact under `SHARED_PROJECT_RECORDS` |
| Current task uploads | `/home/ubuntu/upload` | Current uploaded records and source attachments | Copied intact under `CURRENT_CHAT_ATTACHMENTS` |
| Static HTML-ready site | Active project `dist/public` | Current build output | Copied under `SITE_STATIC_HTML` |

## Confirmed Filename Correction

`Diagnosticchart2.xlsx` exists in the current upload directory exactly as written. It is included as a source record in this consolidation package. No run-together filename is used in this manifest.

## Coverage Boundary

This archive covers **files currently accessible in the directories above**. It does not automatically include any task/chat artifacts held only in the Manus service outside those directories, managed secrets, managed database contents after the snapshot, or future uploads. The official **Task Data Backup** remains necessary for the complete task-level recovery set.

## Clinical Handling Notice

The archive preserves source records as provided. The clinical rescue/general-saline content previously flagged in `ARCHIVAL_CORRECTION_NOTICE.md` remains quarantined and must not be treated as current medical instruction.

## Package Layout

| Package folder | Contents |
|---|---|
| `SITE_SOURCE` | Current editable web project, documentation, schema, and migrations, excluding dependencies and transient caches |
| `SITE_STATIC_HTML` | Current compiled HTML/CSS/JS production bundle |
| `SHARED_PROJECT_RECORDS` | Project-shared research, medical records, source documents, and original files |
| `CURRENT_CHAT_ATTACHMENTS` | Current task uploads, including the exact attachment filenames provided in this task |
| `HANDOFF` | Preservation, migration, correction, static-export, merge-protocol, and manifest documentation |

## Development Status

`DEVELOPMENT_FREEZE.md` is the repository-level marker that feature development is paused. New clinical, design, or technical work requires an explicit user instruction to start a new revision after the reset.
