# Medical Advocacy Hub

Private, evidence-led site for care coordination, source verification, and
advocacy documentation. React/tRPC frontend (`client/`), Express/tRPC backend
(`server/`), Drizzle schema (`drizzle/`).

**Read `STATUS.md` first.** Development is currently frozen and two decisions
are open before any further work should happen — that file has both.

Documentation lives in `docs/` — see `docs/README.md` for the folder map.

## Local development

```bash
pnpm install
pnpm dev
```

Requires `DATABASE_URL` and `JWT_SECRET` in `.env`. See
`docs/status/MIGRATION_HANDOFF.md` for full environment and Manus-platform
dependency notes.
