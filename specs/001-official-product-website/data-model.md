# Phase 1 Data Model: OPL Forge Official Product Website

Entities below define the website's own content model (not the app's
runtime data model). Fields marked **real** are populated from confirmed
repository inspection (see research.md); fields marked **TBD** are known
content gaps to fill during implementation, never fabricated.

## Product Surface

Represents one distinct area/screen of the real application that the
website can showcase. Drives the Product Screenshot Showcase (spec US2)
and the "Everything your OPL library needs" feature grid.

| Field | Type | Notes |
|---|---|---|
| `id` | string (slug) | e.g. `home`, `devices`, `library`, `catalog`, `tools-diagnostics`, `tools-components`, `settings-network` |
| `name` | string | Real product label, e.g. "Home", "Devices", "Library", "Catalog", "Tools → Device Diagnostics", "Tools → OPL Components", "Settings → Network" |
| `description` | string | Short, accurate capability summary (no marketing embellishment) |
| `status` | enum | `AVAILABLE` \| `IN_DEVELOPMENT` \| `PLANNED` \| `EXPERIMENTAL` (constitution Article X vocabulary) |
| `platform` | Platform[] | Which platform(s) this surface exists on (real data: Desktop only, plus historical `home`/`library`/`game-detail` Stitch mobile/tablet *concepts*, flagged `CONCEPT`) |
| `screenshots` | ProductScreenshot[] | 0..n; empty allowed (creates a documented capture gap, not a placeholder image) |
| `relatedDocs` | DocumentationTopic[] | Cross-links into `/docs/` |

**Real inventory (v1)**:
1. Home (empty state + connected/workspace state) — `AVAILABLE`
2. Devices (Overview/Games/OPL Files/Diagnostics tabs) — `AVAILABLE`
3. Library (unified PS2/PS1/Apps, grid/list, status badges, detail drawer) — `AVAILABLE`
4. Catalog (remote metadata & cover search) — `AVAILABLE`
5. Tools → Device Diagnostics (fragmentation analysis & repair) — `AVAILABLE`
6. Tools → OPL Components (binaries/compatibility DB management) — `AVAILABLE`
7. Tools → Utilities/Activity history — `AVAILABLE`
8. Settings → General / Download Sources — `AVAILABLE`
9. Settings → Network (SMB/FTP share) — `AVAILABLE` *(Decision 5 addition)*
10. Android application — `PLANNED` (no screens, planning doc only)

## Product Screenshot

| Field | Type | Notes |
|---|---|---|
| `id` | string (slug) | e.g. `dashboard`, `devices`, `prepare`, `ps2-import`, `fragmentation`, `essentials-pacman`, `download-pacman-progress`, `downloads`, `apps`, `legal-confirmation` |
| `productSurfaceId` | ref → Product Surface | |
| `platform` | Platform | Real captures are all `desktop` |
| `filePath` | string | `src/assets/product/desktop/<id>.jpg` |
| `altText` | string | Descriptive, non-decorative alt text (accessibility) |
| `caption` | string | Short factual caption |
| `capturedFrom` | enum | `real-app` \| `concept` (Stitch) — `concept` MUST be visually/textually labeled in the UI |
| `sanitized` | boolean | Confirms no personal file paths/usernames/real serials remain (spec FR-037/038) |

**Validation rules**: a screenshot with `capturedFrom: concept` MUST render
a visible "Concept" badge; `sanitized` MUST be `true` before a screenshot is
included in any collection.

## Feature / Module

Logical capability grouping shown in the feature grid (coarser-grained than
Product Surface — one Feature may span multiple surfaces).

| Field | Type | Notes |
|---|---|---|
| `id` | string | e.g. `library-management`, `smart-installation`, `storage-diagnostics`, `artwork-sync`, `game-catalog`, `network-share`, `background-operations` |
| `title` | string | Card headline |
| `summary` | string | 1–2 sentence real capability description |
| `icon` | string | Icon token (lucide-react-equivalent icon name) |
| `productSurfaceIds` | ref[] → Product Surface | |
| `status` | enum | Same status vocabulary as Product Surface |

## Platform

| Field | Type | Notes |
|---|---|---|
| `id` | enum | `windows` \| `macos` \| `linux` \| `android` |
| `label` | string | e.g. "Windows", "macOS", "Linux", "Android" |
| `architectures` | string[] | e.g. `["x64", "arm64"]` for Windows/macOS; `[]` for Android (N/A) |
| `packageFormats` | string[] | e.g. Linux: `["AppImage", "DEB"]` |
| `status` | enum | `AVAILABLE` (Windows/macOS/Linux) \| `PLANNED` (Android) |
| `note` | string \| null | For Android: "Planning stage only — no build available yet" |

Tablet is intentionally **not modeled** as a Platform value — it is not a
product platform (research.md Decision 2); it only affects this website's
own responsive CSS breakpoints (constitution Article VI), which is a
presentation concern, not content.

## Documentation Topic

| Field | Type | Notes |
|---|---|---|
| `slug` | string | Route segment under `/docs/` |
| `title` | string | |
| `summary` | string | Shown in docs index/cards |
| `body` | Markdown/MDX | Content collection entry |
| `relatedProductSurfaceIds` | ref[] → Product Surface | |
| `order` | number | Manual ordering within docs nav |

**Initial topic set** (derived from real app capabilities + spec US5–7):
Getting Started, Preparing a Device, Managing Your Library, Understanding
Fragmentation & Repair, Artwork & Catalog, Downloads & Components, Network
Share (SMB/FTP), Troubleshooting, Contributing.

## Release / Download Artifact

| Field | Type | Notes |
|---|---|---|
| `platform` | Platform | |
| `architecture` | string \| null | |
| `format` | string | e.g. `.exe`, `.dmg`, `.AppImage`, `.deb` |
| `version` | string \| null | `null` when no stable release is published (real current state) |
| `downloadUrl` | string \| null | Links to GitHub Releases; `null` renders a "Build from source" / "No release yet" state instead of a dead link |
| `checksum` | string \| null | Optional, shown if published |

**Validation rule**: if `version` is `null`, the Downloads page MUST render
an honest "no stable release yet" state (per constitution Article X;
matches real repository status) rather than a fabricated version number.

## Roadmap Item

| Field | Type | Notes |
|---|---|---|
| `id` | string | |
| `title` | string | e.g. "Android application" |
| `status` | enum | `IN_DEVELOPMENT` \| `PLANNED` \| `EXPERIMENTAL` |
| `description` | string | Real, factual — e.g. Android entry summarizes the real planning doc's scope, not invented features |
| `targetSurfaceIds` | ref[] → Product Surface | |

## External / Social Link

| Field | Type | Notes |
|---|---|---|
| `id` | string | `github-repo`, `github-issues`, `github-releases`, `linkedin`, `patreon` |
| `label` | string | |
| `url` | string | Centralized in `src/content/config/site.ts` (constitution Article IX) |
| `visible` | boolean | Allows hiding a link (e.g. Patreon) until it's ready without deleting the entry |

## Status Vocabulary (two distinct systems — do not conflate)

1. **Feature/Roadmap maturity** (constitution Article X):
   `AVAILABLE` · `IN_DEVELOPMENT` · `PLANNED` · `EXPERIMENTAL`
2. **Per-item runtime/UI data state** (real app, shown only inside
   screenshots/captions, never as a roadmap status):
   - Library badges: `ready` · `needs_attention` · `fragmented` ·
     `invalid_name` · `validation_warning`
   - Fragmentation diagnostic states: `contiguous` · `fragmented` ·
     `partially_fragmented` · `incomplete` · `invalid` · `unverifiable`
