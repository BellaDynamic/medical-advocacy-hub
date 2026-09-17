# HTML-Ready Export Notes

The static production bundle is located at `dist/public/` after a successful `pnpm build`.

| Use case | Recommended material |
|---|---|
| Archive or simple public information site | Upload the contents of `dist/public/` to a static host |
| Full recovery inside Manus | Use the official Task Data Backup |
| Full independent redevelopment | Start from the source archive and follow `MIGRATION_HANDOFF.md` |
| Future merger with another site | Use `CONTENT_MERGE_PROTOCOL.md` and preserve `ARCHIVAL_CORRECTION_NOTICE.md` |

The static bundle contains rendered client assets and can preserve the visual structure of the site. It does not by itself recreate the managed server, database, authentication, storage, or future upload/extraction functionality.
