# Contract: Content Schemas

These are the authoring/content contracts that `src/content/config.ts`
(Astro Content Collections) must implement with Zod, and that Vitest
content-schema tests validate against. Types are illustrative TypeScript;
the actual collection schemas are Zod schemas of equivalent shape.

## `productSurfaces` collection

```ts
interface ProductSurface {
  id: string;                 // slug, unique
  name: string;                // real product label
  description: string;
  status: "AVAILABLE" | "IN_DEVELOPMENT" | "PLANNED" | "EXPERIMENTAL";
  platform: ("windows" | "macos" | "linux" | "android")[];
  screenshotIds: string[];     // refs into `screenshots` collection; may be empty
  relatedDocSlugs: string[];   // refs into `docs` collection
}
```

**Invariants**:
- `id` MUST be unique across the collection.
- If `status === "PLANNED"`, `screenshotIds` MUST be empty (no screenshots
  for unshipped surfaces — spec FR-005/FR-039).
- Every `screenshotIds` entry MUST resolve to an existing `screenshots` entry.

## `screenshots` collection

```ts
interface ProductScreenshot {
  id: string;                              // slug, unique
  productSurfaceId: string;                 // ref
  platform: "windows" | "macos" | "linux" | "android";
  filePath: string;                         // relative to src/assets/product/
  altText: string;                          // non-empty, descriptive
  caption: string;
  capturedFrom: "real-app" | "concept";
  sanitized: boolean;
}
```

**Invariants**:
- `sanitized` MUST be `true` (build fails otherwise — spec FR-037/038).
- `capturedFrom === "concept"` requires the UI to render a "Concept" badge
  (enforced by a Vitest snapshot/unit test on `ScreenshotGallery`).
- `filePath` MUST resolve to an existing asset at build time.

## `releases` collection

```ts
interface ReleaseArtifact {
  platform: "windows" | "macos" | "linux";
  architecture: string | null;              // e.g. "x64", "arm64"
  format: string;                           // ".exe", ".dmg", ".AppImage", ".deb"
  version: string | null;                   // null = no stable release yet
  downloadUrl: string | null;               // null = no release yet
  checksum: string | null;
}
```

**Invariants**:
- `version === null` implies `downloadUrl === null` (and vice versa is
  recommended but not required — a URL without a version is invalid).
- Android MUST NOT appear in this collection while `PLANNED` (no
  downloadable artifact exists).

## `roadmap` collection

```ts
interface RoadmapItem {
  id: string;
  title: string;
  status: "IN_DEVELOPMENT" | "PLANNED" | "EXPERIMENTAL";
  description: string;
  targetSurfaceIds: string[];               // refs into productSurfaces
}
```

## `docs` collection (Markdown/MDX frontmatter)

```yaml
---
title: string           # required
summary: string         # required, shown in docs index cards
order: number            # required, controls nav ordering
relatedProductSurfaceIds: string[]   # optional refs into productSurfaces
---
```

## `site` config (`src/content/config/site.ts`, plain TypeScript, not a collection)

```ts
interface ExternalLink {
  id: "github-repo" | "github-issues" | "github-releases" | "linkedin" | "patreon";
  label: string;
  url: string;
  visible: boolean;
}

interface SiteConfig {
  name: "OPL Forge";
  tagline: string;
  license: "MIT";                 // MUST match the real repository license
  links: ExternalLink[];
  basePath: string;               // GitHub Pages base path, e.g. "/oplforge"
}
```

**Invariant**: `license` MUST be `"MIT"` — a unit test asserts this literal
value to prevent regressions like the Stitch mockup's incorrect "GPL-3.0"
(research.md Decision 9).
