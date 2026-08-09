# Contract: Public Routes

The static, GitHub Pages–hosted route map this feature must produce. All
paths are relative to the configured base path (e.g.
`https://theguitarvity.github.io/oplforge/`). Every route renders a
physical static HTML page (constitution Article II) — no client-side-only
routes.

| Route | Purpose | Primary content source |
|---|---|---|
| `/` | Homepage: hero, condensed product tour, platform availability, docs/downloads/roadmap/support previews | `productSurfaces`, `screenshots`, `site` |
| `/features/` | Full product tour / expanded screenshot showcase | `productSurfaces`, `screenshots` |
| `/downloads/` | Platform-specific downloads, honest "no release yet" fallback | `releases` |
| `/roadmap/` | Roadmap items with real status vocabulary | `roadmap` |
| `/docs/` | Documentation index | `docs` |
| `/docs/{slug}/` | Individual documentation topic | `docs` |
| `/support/` | Open-source info, GitHub links, optional Patreon, creator info | `site` |

**Invariants**:
- All internal links MUST resolve (verified by the Playwright broken-link
  e2e check).
- No route may 404 when the configured base path changes — all internal
  links are generated through the shared base-path-aware URL utility
  (`src/utils/url.ts`), never hardcoded absolute paths.
- `/downloads/` MUST NOT show a fabricated version/date when
  `releases` entries have `version: null`.
