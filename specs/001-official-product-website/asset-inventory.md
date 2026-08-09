# Visual Asset Inventory (FR-041 / FR-042)

Tracks every visual asset the website needs, its real availability, and an
explicit gap list. No fabricated/placeholder marketing screenshots are used
anywhere on the site — a missing asset renders a documented gap, never a
fake image (constitution Article X).

## Logo / Brand

| Asset | Status | Notes |
|---|---|---|
| OPL Forge wordmark/logo | **missing** | No dedicated logo file found in the source repo or Stitch export; site currently uses a text wordmark + generic favicon. Needs a real logo asset from the maintainer. |
| Favicon | **available** | `public/favicon.svg` (Astro default placeholder, replace with brand mark when available) |

## Desktop Screenshots (real, downloaded from `theguitarvity/src-app-oplforge` `docs/screenshots/`)

| File | Product Surface | Status | Notes |
|---|---|---|---|
| `dashboard.jpg` | Home | **available** | Reviewed — no usernames/home-directory paths visible; volume names are generic/non-identifying |
| `devices.jpg` | Devices | **available** | Reviewed — same as above |
| `prepare.jpg` | Devices (Prepare) | **available** | Reviewed |
| `ps2-import.jpg` | Library (PS2 import) | **available** | Reviewed |
| `fragmentation.jpg` | Tools → Device Diagnostics | **available** | Reviewed |
| `essentials-pacman.jpg` | Tools → OPL Components | **available** | Reviewed |
| `download-pacman-progress.jpg` | Tools → OPL Components (download progress) | **available** | Reviewed |
| `downloads.jpg` | Tools → Utilities/Activity | **available** | Reviewed |
| `apps.jpg` | Library (Apps) | **available** | Reviewed |
| `legal-confirmation.jpg` | Tools → OPL Components (legal confirmation dialog) | **available** | Reviewed |

**Coverage**: 10/10 real screenshots imported — satisfies SC-002's ≥90% bar
for the currently-known real capture set.

## Documented Capture Gaps (real surfaces with no screenshot yet)

| Product Surface | Status | Notes |
|---|---|---|
| Library (main grid/list view, status badges, detail drawer) | **needs recapture** | Only PS1/Apps import view (`ps2-import.jpg`) captured; the unified grid/list/detail-drawer view is not yet captured |
| Catalog (remote metadata & cover search) | **missing** | No screenshot captured yet |
| Settings → General / Download Sources | **missing** | No screenshot captured yet |
| Settings → Network (SMB/FTP) | **missing** | Real, shipped feature (research.md Decision 5); no screenshot captured yet |
| Artwork/ART sync before/after | **missing** | No screenshot captured yet |
| Background operations / activity drawer (full view) | **missing** | `downloads.jpg` covers part of this; full activity drawer not captured |
| Game Details drawer | **missing** | No screenshot captured yet |

These gaps are rendered on the site as an honest "documented gap" (no
screenshot shown, no fabricated image), per data-model.md's Product Surface
entity (`screenshots: 0..n; empty allowed`).

## Android / Tablet

| Asset | Status | Notes |
|---|---|---|
| Android app screenshots | **concept only (excluded from v1 galleries)** | Stitch "Mobile" app-screen concepts exist but are not shipped product — per research.md Decision 2, not shown as available functionality. Android is represented only as a `PLANNED` roadmap/platform entry, no screenshots. |
| Tablet app screenshots | **not applicable** | Tablet is not a product platform (research.md Decision 2); "tablet" only applies to this website's own responsive breakpoints. |

## Icons

| Asset | Status | Notes |
|---|---|---|
| UI icons (feature cards, status badges, nav) | **available** | Inline SVG icons authored directly in components (no external icon font/dependency added) |

## Artwork examples (game cover art / ART sync)

| Asset | Status | Notes |
|---|---|---|
| Example cover art / ART sync before-after | **missing** | No real example captured yet; not fabricated |
