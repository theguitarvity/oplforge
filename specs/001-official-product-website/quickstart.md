# Quickstart: Validating the OPL Forge Official Website

This guide describes how to set up, run, and validate the website locally.
It references [data-model.md](./data-model.md) and [contracts/](./contracts/)
rather than duplicating schema/route details.

## Prerequisites

- Node.js 22 LTS (matches the real app repository's toolchain)
- pnpm (lockfile-based, reproducible installs — constitution Article XIII)

## Setup

```bash
pnpm install
```

## Local development

```bash
pnpm dev
# Astro dev server, default http://localhost:4321
```

## Build (static output, GitHub Pages base path applied)

```bash
pnpm build
# Outputs to dist/ as pure static HTML/CSS/JS/assets
```

## Preview the production build locally

```bash
pnpm preview
```

## Validation Scenarios

Run these after any content or component change, before opening a PR:

1. **Unit tests** (content schema validation, URL/base-path utilities,
   status-vocabulary correctness):
   ```bash
   pnpm test:unit
   ```
   Expected: all `productSurfaces`/`screenshots`/`releases`/`roadmap`
   entries satisfy the invariants in
   [contracts/content-schemas.md](./contracts/content-schemas.md) (e.g. no
   screenshots on `PLANNED` surfaces, `sanitized: true` everywhere,
   `site.license === "MIT"`).

2. **End-to-end smoke tests** (navigation, broken links, responsive
   rendering, accessibility):
   ```bash
   pnpm test:e2e
   ```
   Expected: every route in
   [contracts/routes.md](./contracts/routes.md) loads at mobile, tablet,
   and desktop viewports with zero broken internal links and zero
   critical `axe-core` accessibility violations.

3. **Manual content-accuracy check** (spec FR-039/FR-040/FR-041/FR-042):
   - Confirm the Downloads page shows the real "no stable release yet"
     state (no fabricated version).
   - Confirm the Android entry appears only in the roadmap as `PLANNED`,
     with no screenshot gallery implying availability.
   - Confirm any `concept`-sourced screenshot renders a visible "Concept"
     badge.
   - Confirm the footer license reads **MIT** (not the Stitch mockup's
     incorrect "GPL-3.0").

4. **Lighthouse / Core Web Vitals spot-check** on the built `dist/`
   output (via `pnpm preview` + browser DevTools Lighthouse), confirming
   "Good" ratings for LCP/CLS/INP on the homepage.

## Deployment

CI (GitHub Actions, defined in the tasks phase) runs: install → lint →
typecheck → `test:unit` → `test:e2e` → `build` → deploy `dist/` to GitHub
Pages, guarding against merging content that fails any validation above.
