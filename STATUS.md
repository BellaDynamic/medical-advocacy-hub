# Current Status

**As of 2026-09-28: development freeze lifted. Purpose answered: public advocacy.**

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

1. **Purpose — answered.** This is meant to go public as advocacy, not stay
   a private record. That raises the bar on everything else in this repo:
   before anything here is shown to anyone outside the immediate care team,
   it needs (a) a pass distinguishing verified-from-records claims from
   reported-but-unverified ones — much of this groundwork already exists in
   `MULTISYSTEM_COVERAGE_LEDGER.md` and the Source Vault, but it isn't
   complete or audited end-to-end — (b) legal review of anything alleging
   specific harm, neglect, or mismanagement by a named provider or
   institution, and (c) a check for any other person's private information
   (names, MRNs, contact details) that shouldn't be published without their
   own consent. None of that has happened yet. Public advocacy is the goal;
   this repo is not yet in a state to be shown publicly.
2. **Visual composition — still open.** `docs/status/RESTORATION_AND_ARCHIVAL_PLAN.md`
   asks which reference site should govern this site's composition —
   A Moonlit Room, Black Plum Concierge, Eternal Autumn, or something else.
   Still pending.
