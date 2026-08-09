# Implementation Plan: OPL Forge Official Product Website

**Branch**: `001-official-product-website` | **Date**: 2026-08-08 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-official-product-website/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command; its definition describes the execution workflow.

## Summary

Build a static, GitHub Pages–hosted product website that shows the real OPL
Forge desktop application (Windows/macOS/Linux, Electron + React) as
completely as possible through real captured screenshots, organized around a
homepage product tour plus dedicated Features, Downloads, Docs, Roadmap, and
Support routes. Repository inspection (of `theguitarvity/src-app-oplforge`)
and the existing Stitch "Forge Dark" project confirm: only Desktop is
shipped today; Android exists solely as an unstarted planning document
(React Native, no screens/screenshots); Tablet is not a product platform at
all. The technical approach is **Astro** (static-first, island architecture,
content collections for Markdown docs, first-class base-path support) with
**Tailwind CSS** driven by the ratified Forge Dark tokens and minimal React
islands for the few interactive elements (screenshot lightbox/gallery,
feature tab switcher), keeping JavaScript minimal and content centralized in
typed Markdown/JSON/TS data modules.

## Technical Context

**Language/Version**: TypeScript 5.x (Node.js 22 LTS at build time only, matching the app repo's toolchain convention)

**Primary Dependencies**: Astro (static site generator + island architecture), Tailwind CSS 4 (utility styling driven by Forge Dark design tokens), a minimal React integration for interactive islands only (screenshot lightbox, feature/platform tab switcher), Astro Content Collections (Markdown/MDX for docs, JSON/TS for structured data: screenshots, roadmap, releases, site config)

**Storage**: N/A — no database or server storage; structured content lives in versioned Markdown/MDX/JSON/TypeScript data modules under `src/content/`

**Testing**: Vitest (unit tests for content-schema validation, base-path/URL-building utilities, roadmap/release status logic) + Playwright (smoke e2e: primary navigation, broken-link check, responsive rendering at mobile/tablet/desktop viewports, basic automated accessibility checks via `@axe-core/playwright`)

**Target Platform**: Static web output served via GitHub Pages (`https://theguitarvity.github.io/oplforge/`, with future custom-domain readiness); evergreen browsers; responsive across mobile, tablet, and desktop viewports

**Project Type**: Single static frontend project (no backend) — "web" content site

**Performance Goals**: Core Web Vitals rated "Good" (LCP, CLS, INP); minimal shipped JavaScript via Astro's zero-JS-by-default islands; large product screenshots optimized and lazy-loaded below the fold

**Constraints**: Must build and run entirely under a configurable GitHub Pages base path (no assumption of hosting at `/`); zero runtime backend/secrets in client code; must remain informative with JavaScript disabled or partially failing; no fabricated product data (versions, screenshots, metrics)

**Scale/Scope**: ~10–15 routes at launch (home, `/features/`, `/downloads/`, `/docs/*` ~10 topics, `/roadmap/`, an open-source/support area), a real, currently-small screenshot catalog (10 known real captures) with room to grow, single active maintainer/content owner

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Constitution Article | Gate | Status |
|---|---|---|
| I. Static-First Architecture & GitHub Pages Hosting | Output must be pure static assets, no runtime backend | **PASS** — Astro `output: 'static'`, no server adapter, no backend planned |
| II. Routing, IA & Static Generation | Static hosting–compatible routing, configurable base path, physical pages preferred | **PASS** — Astro file-based routing generates physical HTML pages per route; `astro.config` `base` set for `/oplforge/` |
| III. Framework Selection & Simplicity | Complexity justified by need, no framework-for-fashion | **PASS** — see research.md Decision 1; Astro chosen for static-first + content-collection fit, not popularity |
| IV. Content Architecture & Docs-as-Product | Centralized content, Markdown-based docs, no duplication | **PASS** — `src/content/` collections for docs, screenshots, roadmap, releases, site config |
| V. Forge Dark Design System & Stitch Reference | Must follow Forge Dark tokens; Stitch is reference only | **PASS** — tokens sourced 1:1 from the ratified constitution/Stitch design system (research.md Decision 8); Stitch website mockup inspected and reconciled (Decision 9) |
| VI. Responsive Design & Accessibility | Mobile/tablet/desktop; WCAG 2.2 AA where practical | **PASS** — Tailwind responsive breakpoints + Playwright viewport tests + axe-core checks planned |
| VII. Progressive Enhancement & Performance | Usable without JS; performance budget | **PASS** — Astro renders full HTML by default; React islands are opt-in/hydrated only where interactive |
| VIII. Dependency Discipline & Security | Dependencies justified; no unsafe HTML/secrets | **PASS** — dependency list is minimal and justified in research.md; Markdown rendering sanitized by Astro's content pipeline |
| IX. External Links, GitHub Integration & Config | Centralized links; GitHub Releases canonical; no required API | **PASS** — `src/content/config/site.ts` centralizes links; GitHub API star/version display is optional, deferred (Decision 7) |
| X. Content Accuracy & Roadmap Honesty | No fabricated data; correct status vocabulary | **PASS** — real product-state findings (Decision 2) directly drive which sections/platforms appear and how they're labeled |
| XI. Legal Independence & Messaging | Disclaimer present; no piracy framing | **PASS** — Footer/legal content includes the disclaimer; real MIT license corrects the Stitch mockup's incorrect "GPL-3.0" (Decision 9) |
| XII. Component Architecture, Types & Quality | Reusable, typed, well-named components | **PASS** — component list defined in data-model.md |
| XIII. Testing, CI/CD & Reproducible Builds | Automated validation; GitHub Actions deploy; locked deps | **PASS** — pnpm lockfile committed; GitHub Actions workflow (lint → typecheck → test → build → deploy) planned in tasks phase |
| XIV. SEO, Semantic URLs & Assets | Metadata present; readable URLs; organized assets | **PASS** — per-page SEO frontmatter; `/docs/storage/fragmentation/`-style URLs; `src/assets/` organized by category |
| XV. Analytics, Privacy & Cookies | Optional, privacy-respecting, no mandatory cookies | **PASS** — no analytics planned for v1; revisit via ADR if added later |

No violations requiring justification were identified. Complexity Tracking is intentionally empty.

## Project Structure

### Documentation (this feature)

```text
specs/001-official-product-website/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── content/
│   ├── docs/                 # Markdown docs: getting-started, library, storage,
│   │                          # fragmentation, artwork, downloads, troubleshooting, contributing
│   ├── roadmap/               # Roadmap items (structured Markdown/JSON, status vocabulary)
│   └── config/                # site.ts (external links), screenshots.ts (screenshot catalog),
│                                # platforms.ts, releases.ts, productSurfaces.ts
│
├── components/
│   ├── layout/                # Navigation, Footer, MobileNav
│   ├── marketing/              # Hero, ProductTour, PlatformComparison, SupportSection, CreatorSection
│   ├── product/                # ScreenshotGallery, ScreenshotLightbox, FeatureCard, StatusBadge,
│   │                            # PlatformBadge, DownloadCard, RoadmapItem, DocumentationCard
│   └── ui/                     # small shared primitives (Button, Badge, Container)
│
├── layouts/                    # BaseLayout, DocsLayout
├── pages/
│   ├── index.astro             # Homepage (hero + product tour + docs/downloads/roadmap/support previews)
│   ├── features/index.astro    # Expanded product tour
│   ├── downloads/index.astro
│   ├── roadmap/index.astro
│   ├── docs/[...slug].astro    # Content-collection-driven docs pages
│   └── support/index.astro     # Support/Patreon + open-source + creator
│
├── styles/                     # Forge Dark design tokens (CSS custom properties + Tailwind theme)
├── assets/
│   ├── brand/                  # OPL Forge logo, favicon
│   ├── product/                # Real screenshots: desktop/{dashboard,devices,library,catalog,
│   │                            # fragmentation,downloads,prepare,apps,legal-confirmation}
│   └── icons/
└── utils/                      # base-path-aware URL builder, release/download mapping helpers

tests/
├── unit/                       # content-schema validation, URL/base-path utils, status-vocabulary rules
└── e2e/                        # Playwright: nav smoke, broken-link check, responsive + a11y checks

public/                          # static files copied as-is (favicon, robots.txt, CNAME if adopted)
astro.config.mjs                 # base path, integrations (React, sitemap)
```

**Structure Decision**: Single Astro project (no `backend/`/`frontend/` split —
there is no backend). Content lives under `src/content/` as typed collections
per constitution Article IV; screenshots are organized by platform/feature
under `src/assets/product/` mirroring the real product's information
architecture (Home/Dashboard, Devices, Library, Catalog, Tools→Diagnostics,
Downloads) discovered during repository inspection, rather than the more
granular hypothetical folder names in the original brief. This structure
directly maps to constitution Article XXVII's suggested layout while
following Astro's idiomatic `src/pages` + `src/content` conventions.

## Complexity Tracking

No Constitution Check violations were identified; this section is
intentionally left without entries.
