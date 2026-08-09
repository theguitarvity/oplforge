---

description: "Task list for OPL Forge Official Product Website"
---

# Tasks: OPL Forge Official Product Website

**Input**: Design documents from `/specs/001-official-product-website/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [contracts/](./contracts/), [quickstart.md](./quickstart.md)

**Tests**: Included. The constitution (Article XIII) and plan.md's Constitution
Check commit to automated Vitest unit tests + Playwright e2e tests as
mandatory validation, so unit/e2e test tasks are part of the required work,
not optional extras.

**Organization**: Tasks are grouped by user story (per spec.md's 9 user
stories, in priority order) to enable independent implementation and testing
of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Paths are relative to the repository root, per plan.md's Project Structure

## Path Conventions

Single Astro static-site project (no backend), per plan.md:
`src/content/`, `src/components/`, `src/layouts/`, `src/pages/`,
`src/styles/`, `src/assets/`, `src/utils/`, `tests/unit/`, `tests/e2e/`.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and tooling

- [X] T001 Initialize Astro project (TypeScript, Tailwind CSS 4, React integration) with `package.json`, `astro.config.mjs`, `tsconfig.json` per plan.md's Project Structure
- [X] T002 [P] Configure ESLint + Prettier + `typecheck` script
- [X] T003 [P] Configure pnpm scripts (`dev`, `build`, `preview`, `test:unit`, `test:e2e`) in `package.json` per quickstart.md
- [X] T004 [P] Configure Vitest in `vitest.config.ts` for `tests/unit/`
- [X] T005 [P] Configure Playwright + `@axe-core/playwright` in `playwright.config.ts` for `tests/e2e/`
- [X] T006 [P] Configure GitHub Actions CI/CD workflow (lint → typecheck → test:unit → test:e2e → build → deploy to GitHub Pages) in `.github/workflows/deploy.yml`
- [X] T007 Produce the visual asset inventory (FR-041) marking logo, desktop screenshots, Android/tablet assets, artwork examples, and icons each as `available`/`missing`/`needs recapture`/`concept only` in `specs/001-official-product-website/asset-inventory.md`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure, design tokens, and content model that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T008 Implement Forge Dark design tokens (CSS custom properties) in `src/styles/tokens.css`
- [X] T009 Wire Tailwind theme config to the Forge Dark tokens in `tailwind.config.mjs` (depends on T008)
- [X] T010 [P] Define content collection schemas (`productSurfaces`, `screenshots`, `releases`, `roadmap`, `docs`) per [contracts/content-schemas.md](./contracts/content-schemas.md) in `src/content.config.ts`
- [X] T011 [P] Create site config (`name`, `tagline`, `license: "MIT"`, `links`, `basePath`) per [contracts/content-schemas.md](./contracts/content-schemas.md) in `src/content/config/site.ts`
- [X] T012 Populate `productSurfaces` content data (the 10 real surfaces from [data-model.md](./data-model.md)) in `src/content/config/productSurfaces.ts` (depends on T010)
- [X] T013 Sanitize and import the 10 real screenshots into `src/assets/product/desktop/` and register them in `src/content/config/screenshots.ts` (`capturedFrom: "real-app"`, `sanitized: true`) (depends on T010, T012)
- [X] T014 [P] Populate `releases` content data (Windows/macOS/Linux entries, `version: null`, `downloadUrl: null` reflecting real current state) in `src/content/config/releases.ts` (depends on T010)
- [X] T015 [P] Populate `roadmap` content data (Android — Planned entry plus others) in `src/content/config/roadmap.ts` (depends on T010)
- [X] T016 Implement base-path-aware URL utility in `src/utils/url.ts`
- [X] T017 Implement `BaseLayout` (SEO/meta frontmatter support) in `src/layouts/BaseLayout.astro` (depends on T008, T016)
- [X] T018 Implement `Navigation` component in `src/components/layout/Navigation.astro` (depends on T016)
- [X] T019 Implement `Footer` component (GitHub link, legal disclaimer, MIT license reference) in `src/components/layout/Footer.astro` (depends on T011, T016)
- [X] T020 [P] Implement shared UI primitives (`Button`, `Badge`, `Container`) in `src/components/ui/`
- [X] T021 [P] Implement `StatusBadge` component (`AVAILABLE`/`IN_DEVELOPMENT`/`PLANNED`/`EXPERIMENTAL` vocabulary) in `src/components/product/StatusBadge.astro`
- [X] T022 [P] Unit test: content schema invariants (unique ids, `sanitized === true`, `PLANNED` surfaces have zero screenshots, `site.license === "MIT"`) in `tests/unit/content-schemas.test.ts` (depends on T010, T011, T012, T013, T014, T015)
- [X] T023 [P] Unit test: base-path-aware URL utility in `tests/unit/url.test.ts` (depends on T016)

**Checkpoint**: Foundation ready — user story implementation can now begin

---

## Phase 3: User Story 1 - Discover OPL Forge at a Glance (Priority: P1) 🎯 MVP

**Goal**: A first-time visitor understands what OPL Forge is, what it looks like, and how to get it from the homepage hero alone, without scrolling.

**Independent Test**: Load the homepage alone and verify the hero shows real product imagery, a value proposition, supported platforms, and Download/GitHub/Docs CTAs, understandable on mobile without horizontal scrolling.

- [X] T024 [P] [US1] Implement `Hero` component (headline, value proposition, platform badges, Download/GitHub/Docs CTAs, large real product screenshot) in `src/components/marketing/Hero.astro`
- [X] T025 [P] [US1] Implement `PlatformBadge` component in `src/components/product/PlatformBadge.astro`
- [X] T026 [US1] Assemble the homepage hero section in `src/pages/index.astro` (depends on T024, T025, T017, T018, T019)
- [X] T027 [US1] Implement responsive hero styling so all hero information remains understandable on mobile without horizontal scrolling in `src/components/marketing/Hero.astro` (depends on T024)
- [X] T028 [P] [US1] E2E test: homepage hero conveys product imagery, platforms, and CTAs without scrolling at mobile and desktop viewports in `tests/e2e/us1-homepage-hero.spec.ts` (depends on T026, T027)

**Checkpoint**: At this point, User Story 1 (homepage hero / MVP) should be fully functional and independently testable

---

## Phase 4: User Story 2 - Explore the Product Through Real Screenshots (Priority: P1)

**Goal**: Visitors get a substantial, real-screenshot-backed product tour of dashboard, library, game details, installation, device management, fragmentation diagnostics, artwork sync, downloads/background operations, and activity logs.

**Independent Test**: Browse the homepage's product tour section (or the Features page) and confirm each major implemented product area has a real screenshot and caption, with unshipped capabilities clearly labeled.

- [X] T029 [P] [US2] Implement `ScreenshotGallery` component (grid, captions, alt text, "Concept" badge for `capturedFrom: "concept"` items) in `src/components/product/ScreenshotGallery.astro`
- [X] T030 [P] [US2] Implement `ScreenshotLightbox` React island (click-to-enlarge) in `src/components/product/ScreenshotLightbox.tsx`
- [X] T031 [P] [US2] Implement `FeatureCard` component in `src/components/product/FeatureCard.astro`
- [X] T032 [US2] Implement `ProductTour` section assembling `productSurfaces` + `screenshots` with captions and status labels in `src/components/marketing/ProductTour.astro` (depends on T029, T030, T031, T021)
- [X] T033 [US2] Create the Features page (full product tour) in `src/pages/features/index.astro` (depends on T032, T017, T018, T019)
- [X] T034 [US2] Add a condensed product tour preview with a "See full tour" link to the homepage in `src/pages/index.astro` (depends on T032, T026)
- [X] T035 [P] [US2] Unit test: screenshots with `capturedFrom: "concept"` render the Concept badge, and product surfaces with no screenshots render a documented gap (never a fabricated image), in `tests/unit/screenshot-gallery.test.ts` (depends on T029)
- [X] T036 [P] [US2] E2E test: product tour shows real screenshots with captions and correct status labels in `tests/e2e/us2-product-tour.spec.ts` (depends on T033, T034)

**Checkpoint**: User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Download the Right Build (Priority: P1)

**Goal**: A visitor identifies their platform and reaches the correct real release artifact or GitHub Releases, with no fabricated versions or hidden platforms.

**Independent Test**: Visit the downloads route in isolation and verify every listed platform links to a real artifact or GitHub Releases, with unavailable platforms clearly marked.

- [X] T037 [P] [US3] Implement `DownloadCard` component (platform, architecture, format, version-or-honest-fallback state) in `src/components/product/DownloadCard.astro`
- [X] T038 [US3] Create the Downloads page assembling `DownloadCard`s per platform plus a "no stable release yet" fallback and GitHub Releases link in `src/pages/downloads/index.astro` (depends on T037, T017, T018, T019)
- [X] T039 [US3] Wire the homepage Download CTA to `/downloads/` in `src/pages/index.astro` (depends on T038, T026)
- [X] T040 [P] [US3] Unit test: releases with `version: null` render the honest fallback state and never a fabricated version, in `tests/unit/download-card.test.ts` (depends on T037)
- [X] T041 [P] [US3] E2E test: visitor reaches a working download or GitHub Releases link within 3 interactions from the homepage in `tests/e2e/us3-downloads.spec.ts` (depends on T038, T039)

**Checkpoint**: User Stories 1, 2, AND 3 (the full P1 MVP set) should now work independently

---

## Phase 6: User Story 4 - Evaluate the Android Experience (Priority: P2)

**Goal**: An Android-curious visitor gets an honest picture of Android support. Per research.md Decision 2, real repository inspection confirms Android has zero shipped screens (planning-doc only) — so this story is implemented as an honest "Planned" platform entry, not a fabricated screenshot showcase.

**Independent Test**: Visit the platform comparison / roadmap and confirm Android is clearly labeled `PLANNED` with no screenshots presented as available, and Tablet is not presented as a shipped app platform.

- [X] T042 [P] [US4] Implement `PlatformComparison` component (Desktop `AVAILABLE` vs. Android `PLANNED`; Tablet excluded as a non-existent product platform) in `src/components/marketing/PlatformComparison.astro`
- [X] T043 [US4] Add the Android "Planned" roadmap entry (no fabricated screenshots) to `src/pages/roadmap/index.astro` (depends on T015, T017, T018, T019)
- [X] T044 [US4] Add the `PlatformComparison` section to the Features page in `src/pages/features/index.astro` (depends on T042, T033)
- [X] T045 [P] [US4] Unit test: Android platform entry has status `PLANNED` and zero screenshots (contract invariant) in `tests/unit/platform-comparison.test.ts` (depends on T042)
- [X] T046 [P] [US4] E2E test: Android section clearly states `PLANNED` status without implying current availability in `tests/e2e/us4-android-status.spec.ts` (depends on T043, T044)

**Checkpoint**: User Stories 1–4 should now work independently

---

## Phase 7: User Story 5 - Understand Device & Diagnostic Tools (Priority: P2)

**Goal**: Visitors understand real device/diagnostic capability, including honest platform-specific verifiability differences.

**Independent Test**: Visit the device/diagnostics showcase alone and confirm a real connected-device screenshot, a real fragmentation-result screenshot, and accurate platform-capability copy.

- [X] T047 [P] [US5] Implement `DeviceShowcase` section (real connected-device screenshot + filesystem/capacity/status explanation) in `src/components/marketing/DeviceShowcase.astro`
- [X] T048 [P] [US5] Implement `FragmentationShowcase` section (real diagnostic states + platform-specific verifiability caveats) in `src/components/marketing/FragmentationShowcase.astro`
- [X] T049 [US5] Add the Device & Diagnostics showcases to the Features page in `src/pages/features/index.astro` (depends on T047, T048, T033)
- [X] T050 [P] [US5] E2E test: diagnostics showcase explains platform-specific verifiability without implying equal capability across platforms in `tests/e2e/us5-diagnostics.spec.ts` (depends on T049)

**Checkpoint**: User Stories 1–5 should now work independently

---

## Phase 8: User Story 6 - Learn the Installation Workflow (Priority: P2)

**Goal**: Visitors see the real Add Game/installation flow as a screenshot-backed sequence with accurately labeled sources.

**Independent Test**: Visit the installation showcase and confirm a screenshot-backed sequence of real stages, with only currently-supported sources labeled available.

- [X] T051 [US6] Implement `InstallationShowcase` section (staged real screenshot sequence: source selection, metadata review, destination, progress, verification, completion; source-availability labels) in `src/components/marketing/InstallationShowcase.astro`
- [X] T052 [US6] Add the installation workflow showcase to the Features page in `src/pages/features/index.astro` (depends on T051, T033)
- [X] T053 [P] [US6] E2E test: installation showcase shows staged real screenshots with correctly labeled sources in `tests/e2e/us6-installation.spec.ts` (depends on T052)

**Checkpoint**: User Stories 1–6 should now work independently

---

## Phase 9: User Story 7 - Access Documentation From the Product Showcase (Priority: P2)

**Goal**: Documentation is a first-class, navigable, stably-URLed part of the site, cross-linked from relevant showcases.

**Independent Test**: Navigate from primary site navigation to the documentation entry point and confirm all major topics are reachable with stable URLs.

- [X] T054 [P] [US7] Implement `DocsLayout` in `src/layouts/DocsLayout.astro` (depends on T017)
- [X] T055 [P] [US7] Author initial docs content (Getting Started, Installation, Library, Games, Storage, Fragmentation, Artwork, Downloads, Troubleshooting, Contributing) in `src/content/docs/*.md`
- [X] T056 [US7] Implement the docs index page in `src/pages/docs/index.astro` (depends on T055, T018, T019)
- [X] T057 [US7] Implement the per-topic docs route in `src/pages/docs/[...slug].astro` (depends on T054, T055)
- [X] T058 [US7] Add "Documentation" as a first-class primary navigation item in `src/components/layout/Navigation.astro` (depends on T056, T018)
- [X] T059 [US7] Cross-link `ProductTour`, `FragmentationShowcase`, and `InstallationShowcase` to related docs topics via `relatedDocSlugs` (depends on T032, T048, T051, T055)
- [X] T060 [P] [US7] E2E test: documentation is reachable in one interaction from any page and topic URLs remain stable in `tests/e2e/us7-docs.spec.ts` (depends on T057, T058)

**Checkpoint**: User Stories 1–7 should now work independently

---

## Phase 10: User Story 8 - Inspect the Source and Contribute (Priority: P3)

**Goal**: The GitHub repository is easy to find from multiple entry points, with clear, honest contribution guidance.

**Independent Test**: Locate a GitHub link from navigation, the open-source section, and the footer, and read the accepted-contribution-types description.

- [X] T061 [P] [US8] Implement `OpenSourceSection` component (accepted contribution types; no fabricated star/fork/contributor/download counts) in `src/components/marketing/OpenSourceSection.astro`
- [X] T062 [US8] Add `OpenSourceSection` to the homepage in `src/pages/index.astro` (depends on T061, T026)
- [X] T063 [P] [US8] E2E test: GitHub link is reachable from navigation, the open-source section, and the footer without redundant duplicate buttons in `tests/e2e/us8-open-source.spec.ts` (depends on T062, T018, T019)

**Checkpoint**: User Stories 1–8 should now work independently

---

## Phase 11: User Story 9 - Support Development Optionally (Priority: P3)

**Goal**: Visitors find an optional, non-gating way to financially support the project, plus a compact creator section.

**Independent Test**: Visit the support section alone and confirm messaging frames support as optional and non-gating.

- [X] T064 [P] [US9] Implement `SupportSection` component (optional funding framing: development, testing hardware, infrastructure; explicit non-gating statement) in `src/components/marketing/SupportSection.astro`
- [X] T065 [P] [US9] Implement `CreatorSection` component (Victor Lucas Lopes Silva + GitHub/LinkedIn links, visually secondary) in `src/components/marketing/CreatorSection.astro`
- [X] T066 [US9] Create the Support page assembling `SupportSection` + `CreatorSection` + `OpenSourceSection` in `src/pages/support/index.astro` (depends on T064, T065, T061, T017, T018, T019)
- [X] T067 [P] [US9] E2E test: support section frames funding as optional and non-gating, with no capability shown as payment-gated, in `tests/e2e/us9-support.spec.ts` (depends on T066)

**Checkpoint**: All 9 user stories should now be independently functional

---

## Phase 12: Polish & Cross-Cutting Concerns

**Purpose**: Site-wide validation spanning all user stories

- [X] T068 [P] E2E accessibility audit (`@axe-core/playwright`) across all routes in `tests/e2e/a11y.spec.ts`
- [X] T069 [P] E2E broken-internal-link check across all routes per [contracts/routes.md](./contracts/routes.md) in `tests/e2e/broken-links.spec.ts`
- [X] T070 Produce/confirm the final product surface inventory and published gap list (FR-042, SC-002: ≥90% coverage with an explicit gap list for the rest) in `specs/001-official-product-website/asset-inventory.md`
- [X] T071 [P] Lighthouse/Core Web Vitals spot-check on the homepage per [quickstart.md](./quickstart.md)
- [X] T072 Run the full quickstart.md validation (`pnpm test:unit && pnpm test:e2e && pnpm build && pnpm preview`)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Stories (Phase 3–11)**: All depend on Foundational phase completion
  - US1, US2, US3 (P1) form the MVP and have no dependencies on each other, but US2/US3 reuse `StatusBadge`/layout components from Foundational and US1's homepage assembly
  - US4–US7 (P2) build on the Features page scaffolded in US2 (T033) for their page placement, but are each independently testable in isolation
  - US8–US9 (P3) are independent of US4–US7 and only depend on Foundational + homepage (US1)
- **Polish (Phase 12)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Foundational only
- **User Story 2 (P1)**: Foundational only (reuses `StatusBadge`); homepage assembly step depends on US1's `index.astro`
- **User Story 3 (P1)**: Foundational only; homepage CTA wiring depends on US1's `index.astro`
- **User Story 4 (P2)**: Foundational + Features page from US2 (T033) for placement
- **User Story 5 (P2)**: Foundational + Features page from US2 (T033) for placement
- **User Story 6 (P2)**: Foundational + Features page from US2 (T033) for placement
- **User Story 7 (P2)**: Foundational; cross-linking step depends on US2/US5/US6 sections existing
- **User Story 8 (P3)**: Foundational + homepage from US1
- **User Story 9 (P3)**: Foundational + `OpenSourceSection` from US8

### Within Each User Story

- Components before section assembly
- Section assembly before page wiring
- Unit tests can run alongside/after their component (marked `[P]` where the test file is independent)
- E2E tests run after the story's pages are wired
- Story complete before moving to the next priority (or run in parallel across contributors once Foundational is done)

### Parallel Opportunities

- All Setup tasks marked `[P]` (T002–T006) can run in parallel
- Within Foundational, T010/T011/T014/T015/T020/T021/T022/T023 marked `[P]` can run in parallel once their own dependencies are met
- Once Foundational completes, US1, US2, US3 can start in parallel (different component files); US2/US3's homepage-wiring tasks (T034, T039) should land after US1's T026
- US4, US5, US6 can be built in parallel once US2's Features page (T033) exists
- US8 and US9 can be built in parallel with US4–US7 once US1 (homepage) is done
- Different user stories can be worked on in parallel by different contributors after Foundational is complete

---

## Parallel Example: User Story 2

```bash
# Launch all component tasks for User Story 2 together:
Task: "Implement ScreenshotGallery component in src/components/product/ScreenshotGallery.astro"
Task: "Implement ScreenshotLightbox React island in src/components/product/ScreenshotLightbox.tsx"
Task: "Implement FeatureCard component in src/components/product/FeatureCard.astro"

# Then, after ProductTour (T032) and pages are wired, launch tests together:
Task: "Unit test: Concept badge + gap handling in tests/unit/screenshot-gallery.test.ts"
Task: "E2E test: product tour real screenshots + status labels in tests/e2e/us2-product-tour.spec.ts"
```

---

## Implementation Strategy

### MVP First (User Stories 1–3 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: User Story 1 (homepage hero)
4. Complete Phase 4: User Story 2 (product tour)
5. Complete Phase 5: User Story 3 (downloads)
6. **STOP and VALIDATE**: Run quickstart.md validation against the MVP (hero + tour + downloads)
7. Deploy/demo if ready — this is the smallest complete, independently valuable release

### Incremental Delivery

1. Setup + Foundational → Foundation ready
2. US1 → Test independently → Deploy/Demo (first visible milestone)
3. US2 → Test independently → Deploy/Demo (MVP complete with US1+US3)
4. US3 → Test independently → Deploy/Demo (full P1 MVP)
5. US4 → US5 → US6 → US7 (P2, in priority order or in parallel) → Test independently each time
6. US8 → US9 (P3) → Test independently each time
7. Phase 12 Polish → final validation → launch

### Parallel Team Strategy

With multiple contributors:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Contributor A: User Story 1, then User Story 8/9
   - Contributor B: User Story 2, then User Story 4/5
   - Contributor C: User Story 3, then User Story 6/7
3. Stories complete and integrate independently via the shared Features page (US2) and homepage (US1)

---

## Notes

- `[P]` tasks = different files, no dependencies
- `[Story]` label maps task to specific user story for traceability
- Per research.md Decision 2: Android is implemented as `PLANNED` only (US4) — no fabricated screenshots; Tablet is not modeled as a product platform at all
- Per research.md Decision 9: the site's footer license MUST read "MIT" (T019, T022) — never the Stitch mockup's incorrect "GPL-3.0"
- Verify unit/e2e tests fail before implementing the corresponding feature where practical
- Commit after each task or logical group
