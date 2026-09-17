# Current Status

**As of this reorganization: development freeze still in effect.**

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
held zero times. If the intent is really to stop, the freeze notices need to
stop being followed by more checkpoints.

## What this reorganization changed

Only file placement. 47 root-level documents moved into `docs/` by category
(see `docs/README.md`). **No application code, clinical content, directive
language, or site behavior was touched** — that's exactly what
`DEVELOPMENT_FREEZE.md` says not to do without an explicit restart, and
nothing here counts as a restart.

## What's still quarantined (unchanged, still correct)

The rescue/general-saline protocol content remains quarantined per
`docs/status/ARCHIVAL_CORRECTION_NOTICE.md` — it was flagged as unsafe for
this metabolic profile and must not be treated as current medical direction.
Nothing in this reorganization reopens that.

## The two open decisions nothing else can move past

1. **Purpose.** Is this site a private record for you and your care team, or
   something meant to go public as advocacy? Every other structural
   decision (what's gated, what's public, what needs a disclaimer) depends
   on this, and it's never been answered in the record.
2. **Visual composition.** `docs/status/RESTORATION_AND_ARCHIVAL_PLAN.md`
   asks which reference site should govern this site's composition —
   A Moonlit Room, Black Plum Concierge, Eternal Autumn, or something else.
   Still pending, dated after both freezes.

Until either is answered, the right move is to leave this frozen rather than
add a fourth freeze notice to the pile.
