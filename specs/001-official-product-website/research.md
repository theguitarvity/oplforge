# Phase 0 Research: OPL Forge Official Product Website

This document consolidates repository inspection findings (per spec
FR-039/FR-040) and the technical decisions they inform. All "NEEDS
CLARIFICATION" items from the Technical Context have been resolved below.

## Repository Inspection Summary (real product state)

**Source inspected**: `github.com/theguitarvity/src-app-oplforge` (the
`oplforge` name was renamed/redirects to this repository — the real
application lives here; this workspace, `oplforge`, is the dedicated website
repository referenced by the constitution).

**Confirmed real, shipped product**:
- Desktop-only application: **Electron 42 + React 19 + TypeScript 6, Vite,
  React Router**. State via Zustand + TanStack Query. Styling: Tailwind CSS
  4 + Radix UI primitives + `lucide-react`. Forms: `react-hook-form` + Zod.
- Supported release targets (via `electron-builder`): **Windows (x64,
  arm64), macOS (Intel, Apple Silicon), Linux (AppImage, DEB)**. No public
  installer is published yet — the README explicitly tells users to check
  GitHub Releases or run from source.
- License: **MIT** (declared in `package.json`). Single contributor
  (`theguitarvity` / Victor Lopes), 2 GitHub stars, 0 forks — real, small
  numbers consistent with constitution Article X (no fabricated metrics).
- Real information architecture (6 primary nav items, consolidated from
  12+ in an earlier redesign — spec `004-ia-ux-redesign`):
  1. **Home** (`/`) — empty state (Detect/Prepare/Open local library/Explore
     catalog) when no device, or workspace with space/game-count/health
     metrics when a device is connected.
  2. **Devices** (`/devices`) — multi-tab hub: Overview, Games, OPL Files,
     Diagnostics (fragmentation).
  3. **Library** (`/library`) — unified PS2+PS1+Apps library, Grid/List
     views, status badges (`ready`, `needs_attention`, `fragmented`,
     `invalid_name`, `validation_warning`), detail drawer with contextual
     actions (Validate / Fragmentation / Rename / Test in PCSX2).
  4. **Catalog** (`/catalog`) — remote metadata/cover search (e.g. Internet
     Archive), applies art to local games.
  5. **Tools** (`/tools`) — sub-tabs: Device Diagnostics, "OPL Components"
     (renamed from legacy "Essentials" — manages OPL build/runtime
     binaries, PCSX2 compatibility DB, etc.), Utilities/History.
  6. **Settings** (`/settings`) — General, Download Sources, **Network**
     (SMB/FTP share so the PS2 can browse/launch the library over the local
     network without moving the drive — spec `005-ps2-network-transfer`,
     shipped and notable, but **not enumerated in this feature's spec.md**;
     see Decision 5).
- Confirmed real capability inventory (specs 001–005, delivered):
  device preparation (creates `DVD`/`CD`/`PS1`/`APPS`/`ART`/`CFG`/`VMC`
  folders), PS2/PS1 import with Game-ID detection and FAT32/USBExtreme
  planning, physical-fragmentation diagnosis (states: contiguous,
  fragmented, partially fragmented, incomplete, invalid, **unverifiable**)
  with transactional journal/staging/rollback repair, resilient downloads
  (durable queue, staging, per-device single-writer, batched art sync),
  PCSX2-based validation, ART Manager (OPLM asset indexing/sync), local
  catalog scan + remote "Components"/Essentials catalog, and the SMB1/FTP
  network share.
- Legal confirmation is a real, per-item UI step before adding
  Essentials/Components downloads to the queue — directly supports spec
  FR-036/constitution Article XI framing.
- **No Android/mobile or web version exists today.** A dedicated planning
  document (`docs/react-native-android-context.md`, added ~1 hour before
  this research) explicitly states: *"Nenhuma versão mobile/web hoje — este
  documento é o ponto de partida para a primeira."* (No mobile/web version
  today — this document is the starting point for the first one.) It is a
  context package for a **future** React Native/Android planning effort,
  not an implemented feature.
- **No tablet product surface exists or is planned** as an app platform;
  "tablet" only applies to this website's own responsive design
  (constitution Article VI), not to a second OPL Forge product surface.
- 10 real screenshots exist in `docs/screenshots/`: `dashboard.jpg`,
  `devices.jpg`, `prepare.jpg`, `ps2-import.jpg`, `fragmentation.jpg`,
  `essentials-pacman.jpg`, `download-pacman-progress.jpg`, `downloads.jpg`,
  `apps.jpg`, `legal-confirmation.jpg`.

**Stitch reference inspected**: an existing Stitch project ("Forge Dark")
was found via the design MCP. Its design system tokens are an **exact
match** to the constitution's canonical tokens (surface `#141218`, primary
container `#7c4dff`), confirming the constitution's tokens were sourced
directly from this Stitch project. The project also contains:
- Two **"OPL Forge — Official Website" (Desktop/Mobile)** screens — the
  actual visual reference this feature must reconcile against real
  product/content (per FR-040). Visual inspection (see Decision 9) found
  close alignment with this spec's suggested hero headline/subtext, but
  also fictional details that must be corrected.
- App-screen concepts for **Home, Library, Game Detail, Prepare Device,
  Device Diagnostics, Downloads/Transfers, Components Manager, Catalog** —
  each rendered in Desktop, **Mobile, and Tablet** variants. Since the real
  product has no Mobile or Tablet app today, **these Mobile/Tablet app
  screens are purely conceptual Stitch output**, not evidence of a shipped
  feature (constitution Article V / spec FR-005, FR-020–022 apply
  directly).

## Decisions

### Decision 1 — Frontend framework: Astro + Tailwind + minimal React islands

**Rationale**: Astro generates physical static HTML pages by default
(satisfying constitution Article II's preference for static generation over
SPA routing), ships zero JS unless a component is explicitly hydrated
(supporting Article VII's progressive-enhancement/performance goals), has
first-class Markdown/MDX content collections (Article IV's documentation-as-
product requirement), and has an explicit, well-documented `base` config
option for GitHub Pages sub-path deployment (Article I/II). Tailwind is
reused because the real application already uses Tailwind CSS 4 with the
same Forge Dark tokens, giving contributors a familiar mental model and
making token parity between app and website straightforward. A small React
integration is added only for the few genuinely interactive islands
(screenshot lightbox/gallery, feature/platform tab switcher) — matching
Article III's "simplest architecture that fulfills requirements."

**Alternatives considered**:
- Plain Vite + React SPA — rejected: requires solving GitHub Pages SPA
  fallback/deep-link behavior explicitly (Article II makes this an
  explicit burden, not a default), weaker out-of-the-box SEO/docs story.
- Next.js — rejected: heavier framework oriented around server
  rendering/RSC; static export mode works but carries conceptual and
  dependency overhead unjustified for a purely static content site
  (Article III/XVII).
- Eleventy/Hugo (non-JS-framework SSG) — rejected: weaker fit for the
  planned interactive islands (lightbox, tab switcher) and less natural
  reuse of the app team's existing TypeScript/React fluency; Markdown
  support is comparable but content-collection typing is weaker.

### Decision 2 — Android and Tablet are not real product surfaces for v1

**Rationale**: Repository inspection confirms Android is an unstarted,
purely exploratory planning effort with zero shipped screens or real
screenshots, and Tablet is not a product platform at all. Per spec Edge
Cases and FR-039 ("real product state overrides this specification"), the
website's Android showcase (User Story 4, FR-020–021) and platform
comparison (FR-023) MUST present Android as `PLANNED` only — no fabricated
screenshots, no dedicated "real" Android screenshot gallery for v1. The
existing Stitch Mobile/Tablet app-screen concepts MAY be used later, but
only if explicitly labeled `CONCEPT`, never as shipped functionality. This
plan therefore treats "Android showcase" and "Tablet showcase" as
**out of scope for v1's real-screenshot galleries**, replaced by a compact
roadmap entry ("Android — Planned") and a platform-comparison row that is
honest about Desktop-only current support.

**Alternatives considered**: showing the Stitch mobile/tablet concepts as
illustrative "vision" screens — rejected for v1 as it risks visually
implying availability despite disclaimers (Article X/XXXVII favor omission
over risk of misleading impression); may be revisited via ADR once the
Android effort produces real screens.

### Decision 3 — Real screenshot inventory as the initial asset set

**Rationale**: The 10 real screenshots in the app repository's
`docs/screenshots/` map directly to concrete product surfaces (Dashboard/
Home, Devices, Device Preparation, PS2 Import, Fragmentation Diagnostics,
Catalog/Components (Essentials), Download progress, Downloads list, Apps/
Homebrew install, Legal confirmation dialog). These become the initial,
real, sanitization-reviewed screenshot catalog. Everything else required by
spec FR-004 (Settings, ART sync before/after, full background-operations/
activity drawer, Game Details drawer, Network Share UI) is a **documented
capture gap** to track via the product surface inventory (data-model.md),
not fabricated.

**Alternatives considered**: generating illustrative mockups for missing
screens — rejected; conflicts with spec FR-005/FR-006 and constitution
Article X.

### Decision 4 — Product tour navigation mirrors the real 6-item IA

**Rationale**: Rather than inventing a more granular hypothetical menu, the
product tour, feature selector, and product-surface inventory reuse the
real navigation model (Home → Devices → Library → Catalog → Tools
[Diagnostics / Components / Utilities] → Settings), consistent with spec
Article LX ("do not invent navigation names only for the website") and
Article X (technical claims must reflect actual capabilities).

### Decision 5 — Include PS2 Network Share (SMB/FTP) as an additional showcased surface

**Rationale**: This is a real, recently-shipped, differentiating capability
(the PS2 can browse/launch the library over the local network without
moving the drive) that was not enumerated in the original spec brief. Spec
FR-008 explicitly anticipates the screenshot/content catalog growing over
time, and User Story 2's intent ("show the real product as completely as
possible") is best served by including it under the Devices/Settings→
Network area of the product-surface inventory, rather than omitting a real
feature because the initial brief predates its discovery.

### Decision 6 — Fragmentation/library status vocabulary mapping

**Rationale**: Real data states (`contiguous`, `fragmented`, `partially
fragmented`, `incomplete`, `invalid`, `unverifiable`; library badges
`ready`, `needs_attention`, `fragmented`, `invalid_name`,
`validation_warning`) are **UI status badges**, distinct from the
constitution's roadmap vocabulary (`AVAILABLE`/`IN DEVELOPMENT`/`PLANNED`/
`EXPERIMENTAL`), which applies to *feature maturity*, not *per-game data
state*. The website's `StatusBadge` component and design tokens
(`fragmented`, `verifying`, `ready`, `warning`, `error`) already anticipated
this distinction; data-model.md documents both vocabularies explicitly so
they are never conflated.

### Decision 7 — GitHub API integration deferred (static links only for v1)

**Rationale**: Constitution Article IX makes GitHub API integration
optional and explicitly non-blocking. Given the real repository currently
has no published release and a tiny, real star count, dynamically fetching
"stars" or "latest version" adds complexity and a client-side network
dependency without meaningful value at this stage. v1 uses static,
centralized configuration links (GitHub repo/issues/releases, LinkedIn,
Patreon) with the Downloads page defaulting to the "no stable release yet"
state and a GitHub Releases link, matching real project status.

**Alternatives considered**: live GitHub Releases API fetch at build time
(SSG-time, not client-side) — viable future enhancement (candidate ADR),
deferred because there is no published release to fetch yet.

### Decision 8 — Forge Dark tokens: use the ratified constitution/Stitch tokens as-is

**Rationale**: The Stitch "Forge Dark" design system's tokens
(`surface #141218`, `primary-container #7c4dff`, plus the full Material-
inspired palette: `surface-container-*`, `on-surface`, `outline`, semantic
`error`/`tertiary` colors, `Hanken Grotesk`/`Inter`/`JetBrains Mono`
typography, `8px` corner rounding, `4px` base spacing) are already ratified
verbatim in the constitution and are confirmed to be the actual source Stitch
project — not a separate, conflicting palette. The real Electron app's own
CSS tokens (`background ~#0B0B10`, `card ~#15131F`, `primary ~#7C3AED`) are
close in hue/character (dark, violet-accented) but not byte-identical.
Per constitution authority (Article IX/Governance), the ratified Stitch-
sourced tokens remain the website's single source of truth; exact
app-vs-website token reconciliation is a candidate future ADR, not a
blocker for this feature.

### Decision 9 — Reconciling the Stitch website mockup with reality

**Rationale**: Visual inspection of the two "OPL Forge — Official Website"
Stitch screens found: (a) a hero headline/subtext nearly identical to this
spec's suggested copy ("Forge your PS2 library." / "Install, organize,
diagnose and maintain your PlayStation 2 library from one modern
workspace."), a top navigation (Features, Downloads, Documentation, GitHub,
Download CTA), and a feature-card grid ("Library Management", "Smart
Installation", "Storage Diagnostics", "Artwork Sync", "Game Catalog",
"Background Operations") — all directly reusable as visual/structural
reference; and (b) two factual errors that MUST NOT carry into production:
a footer stating **"Open-source under GPL-3.0"** (the real license is
**MIT**, per `package.json`) and a static **"© 2024"** copyright year (stale
relative to the real project timeline). Per constitution Article V/XI,
these are corrected in implementation rather than copied verbatim. The
mobile mockup's invented section names ("Storage Parsing", "SMB Pipeline",
"Live Analytics") are treated as loose inspiration only, to be replaced with
real feature names (Fragmentation Diagnostics, PS2 Network Share, Activity/
History) per Decision 4/5.

### Decision 10 — Testing strategy

**Rationale**: Vitest for unit-level content/schema validation and URL/
base-path utilities (matches the real app's own testing tool, easing
contributor context-switching); Playwright for smoke e2e covering primary
navigation, a broken-link check across all internal routes, responsive
rendering at mobile/tablet/desktop breakpoints, and automated accessibility
assertions via `@axe-core/playwright` — directly satisfying constitution
Article XIII's testing expectations without over-engineering (no full
visual-regression suite for v1).

## Outstanding Follow-ups (non-blocking)

- Screenshot capture gap list (Settings, ART sync before/after, background
  operations/activity drawer, full Game Details drawer, Network Share UI)
  to be tracked in the product surface inventory and addressed
  incrementally per spec FR-041/FR-042/SC-002.
- Real Patreon URL and any additional social links remain to be populated
  in `site.ts` before launch (configuration detail, not a design blocker).
- A future ADR should evaluate reconciling exact app-vs-website token hex
  values if visual drift becomes noticeable (Decision 8).
