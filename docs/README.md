# Documentation Index

Reorganized from 47 flat files in the repo root into categories below.
Every file was moved with `git mv` — history is intact, nothing was rewritten.
See `../STATUS.md` for the current freeze status and open decisions before
reading further.

| Folder | What's in it |
|---|---|
| `status/` | Freeze notices, handoff/migration guides, the restoration plan, coverage and reconciliation ledgers, `todo.md`. Start with `../STATUS.md`, not this folder directly. |
| `directives/` | The mandate letters, TAR filings, MyChart and PCP directives, master enforcement/institutional documents — the actual advocacy content being sent or filed. |
| `reference/` | Cross-reference reports, protocol matrices, the body-system framework, research notes — working synthesis, not directives themselves. |
| `communications/` | The communications timeline. |
| `content-planning/` | Site content outline, slide content, and raw audit/test-summary dumps kept as evidence. |

Not moved — these stay in the repo root because build tooling or the app
expects them there: `client/`, `server/`, `shared/`, `drizzle/`, `slides/`,
`patches/`, `package.json`, `pnpm-lock.yaml`, `components.json`,
`template.json`, `tsconfig.json`, `vite.config.ts`, `vitest.config.ts`,
`drizzle.config.ts`, `.prettierrc`, `.prettierignore`, `.gitignore`.
