# Current Status

**As of 2026-10-02: development freeze lifted. Purpose: private record, shared only with people Brandy authorizes. Not for publication.**

This consolidates `docs/status/DEVELOPMENT_FREEZE.md` (Aug 16, 2026),
`docs/status/ARCHIVAL_CORRECTION_NOTICE.md` (Aug 13, 2026), and
`docs/status/PRESERVATION_HANDOFF.md` — it supersedes none of their content,
it just puts the current state in one place instead of three.

## What actually happened

Two freezes were declared (Aug 13, then Aug 16), each meant to stop feature
work until an explicit restart instruction. Development continued past both
anyway — `/source-vault`, the Coordination Record page, and the color-system
regression pass all landed after Aug 16. That's not a criticism, it's just
the honest state of the record: the freeze was declared three times and
held zero times.

On 2026-09-28 the user gave an explicit restart instruction and answered the
purpose question below, so the freeze is formally lifted as of this commit.

## What this update changed

Three branches that had diverged from `main` since Aug 19 — each built by a
separate session, none merged into the others — were reconciled into one
line of history:

- **Doc reorg** (Sep 17): moved 47 root-level documents into `docs/` by
  category and wrote the original version of this file.
- **Master timeline** (Sep 26): added `records/MASTER_TIMELINE_2011-2026.md`,
  a single chronological record 2011–present compiled from Drive records and
  this repo's own communications timeline, with an accuracy pass that marks
  undelivered drafts as unsent rather than implying delivery.
- **Case organization / Gemini curation** (Sep 28): added `/case-organization`,
  which indexes the site's existing medical/legal/administrative material
  into case tracks and keeps everything sourced from Google AI/Gemini chats
  in its own clearly-labeled section, separate from verified evidence.

All three merged without conflicts. A stray `package-lock.json` from an
`npm install` run during the Gemini-curation session was removed — this
project is pinned to pnpm (`packageManager` in `package.json`); `npm` and
`pnpm` lockfiles coexisting risks silent dependency drift between what a
contributor installs and what's actually pinned. `pnpm check`, `pnpm test`
(14/14), and `pnpm build` all pass on the merged result.

## What's still quarantined (unchanged, still correct)

The rescue/general-saline protocol content remains quarantined per
`docs/status/ARCHIVAL_CORRECTION_NOTICE.md` — it was flagged as unsafe for
this metabolic profile and must not be treated as current medical direction.
Nothing in this update reopens that.

## The two open decisions

1. **Purpose — answered (corrected 2026-10-02).** This is a **private**
   record, accessible only to people Brandy authorizes: her care team, her
   attorney, and named advocates. It is **not** to be published. (An earlier
   version of this file said "public advocacy"; that misrecorded her answer
   and is withdrawn.) Access is granted person by person — GitHub
   collaborators on a private repo, and Restricted sharing by email in Google
   Drive — never by making anything public. Before material is sent to any
   outside recipient (a board, agency, or hearing officer), it still needs
   (a) a pass separating verified-from-records claims from reported ones,
   (b) attorney review of anything alleging harm by a named provider or
   institution, and (c) removal of other people's private information.
2. **Visual composition — still open.** `docs/status/RESTORATION_AND_ARCHIVAL_PLAN.md`
   asks which reference site should govern this site's composition —
   A Moonlit Room, Black Plum Concierge, Eternal Autumn, or something else.
   Still pending.
