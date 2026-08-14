# Migration & Handoff Guide: Medical Advocacy Hub

**Project:** `medical-advocacy-hub`  
**Archive Location:** `/home/ubuntu/medical-advocacy-hub-archive.tar.gz` (107 MB)  
**Date:** August 13, 2026  

## Overview
This document provides complete instructions for downloading, decompressing, and independently hosting or migrating the `medical-advocacy-hub` project. In accordance with user directives, this archive preserves all work to date while flagging outdated rescue-protocol content for future clinical revision and site merger.

---

## 1. Contents of the Archive
The compressed archive (`medical-advocacy-hub-archive.tar.gz`) contains the complete project directory structure:
- **`client/`**: React 19 frontend application built with Tailwind CSS and shadcn/ui components, containing all pages (Genomic Protocol, VUS, Safety Firewall, Care Coordination, Provider Escalation, Surveillance Calendar, Risk Management, and quarantined Rescue Protocol).
- **`server/`**: Express backend, tRPC routers, and integration handlers.
- **`drizzle/`**: Database schema and migrations.
- **`ARCHIVAL_CORRECTION_NOTICE.md`**: Formal record of quarantined rescue/saline guidance.
- **`todo.md`**: Historical and current task tracking.

---

## 2. Environment & Dependencies
- **Runtime:** Node.js v22.13.0, pnpm
- **Environment Variables:** Production deployments require setting proper environment variables (such as `DATABASE_URL` and `JWT_SECRET`). Note that built-in Manus Forge API keys and OAuth endpoints will need to be reconfigured or substituted if moving away from the Manus platform.

---

## 3. Local Restoration & Rebuilding Steps
To restore and run the project locally or on an independent server:

1. Extract the archive:
   ```bash
   tar -xzf medical-advocacy-hub-archive.tar.gz -C /path/to/destination
   ```
2. Navigate into the project directory and install dependencies:
   ```bash
   pnpm install
   ```
3. Set up your environment variables (`.env`).
4. Start the development server:
   ```bash
   pnpm dev
   ```

---

## 4. Clinical & Content Notice
As noted in `ARCHIVAL_CORRECTION_NOTICE.md`, certain acute rescue protocols (specifically regarding saline administration) were identified as outdated and potentially hazardous. Before merging this site into another platform or deploying it for active clinical review, all rescue and emergency sections must be fully revised by qualified attending specialists.
