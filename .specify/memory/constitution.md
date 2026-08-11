<!--
Sync Impact Report
==================
Version change: N/A (template) → 1.0.0
Rationale: Initial ratification of the OPL Forge Official Website constitution.
All placeholder tokens replaced with concrete, project-specific governance content.

Modified principles: N/A (first version — no prior principles existed)

Added sections (Core Principles):
  I.    Static-First Architecture & GitHub Pages Hosting
  II.   Routing, Information Architecture & Static Generation
  III.  Framework Selection & Architectural Simplicity
  IV.   Content Architecture & Documentation as Product
  V.    Forge Dark Design System & Stitch as Reference
  VI.   Responsive Design & Accessibility (Non-Negotiable)
  VII.  Progressive Enhancement, Performance & Core Web Vitals
  VIII. Dependency Discipline & Security by Default
  IX.   External Links, GitHub Integration & Configuration
  X.    Content Accuracy, Version Integrity & Roadmap Honesty
  XI.   Legal Independence & Responsible Product Messaging
  XII.  Component Architecture, Type Safety & Code Quality
  XIII. Testing, CI/CD & Reproducible Builds
  XIV.  SEO, Semantic URLs & Asset Management
  XV.   Analytics, Privacy & Cookie Minimalism

Added sections (Additional):
  - Specification, Planning & Task Discipline
  - Definition of Done
  - Governance

Removed sections: N/A (template placeholders only)

Deferred / TODO placeholders: None. RATIFICATION_DATE set to the date this
constitution was first adopted (today), since no prior ratified version exists.

Templates requiring alignment (checked, no updates required at this time):
  ✅ .specify/templates/plan-template.md — generic, reads constitution at runtime
  ✅ .specify/templates/spec-template.md — generic, reads constitution at runtime
  ✅ .specify/templates/tasks-template.md — generic, reads constitution at runtime
  ✅ .specify/templates/checklist-template.md — generic, reads constitution at runtime
Note: per scope guard, dependent templates are not modified by this command.
-->

# OPL Forge Official Website Constitution

## Preamble

The OPL Forge Official Website is the public web presence of **OPL Forge**, an
open-source PlayStation 2 library and storage management suite created by
**Victor Lucas Lopes Silva** ([LinkedIn](https://www.linkedin.com/in/victorllsilvdev/)).
The canonical source repository is
[github.com/theguitarvity/oplforge](https://github.com/theguitarvity/oplforge).

This constitution is the highest-level engineering authority for this
repository. Every specification, implementation plan, task breakdown, code
contribution, refactor, UI implementation, documentation change, and CI/CD
change MUST comply with it. Conflicts MUST be identified and documented
explicitly; silent violations are prohibited (see Governance).

## Core Principles

### I. Static-First Architecture & GitHub Pages Hosting

The website MUST be deployable as a completely static site, with **GitHub
Pages as the canonical production hosting platform**. The production
artifact MUST consist exclusively of files servable from static hosting
(HTML, CSS, JavaScript, images, fonts, JSON, other static assets).

The application MUST NOT require, at runtime: a Node.js server, backend
APIs controlled by this project, server-side rendering infrastructure,
databases, server sessions, server-side authentication, runtime containers,
or PHP/Java/Python backends, nor MAY it depend on proprietary hosting
services. Build-time tooling MAY use Node.js; runtime execution MUST happen
entirely in the browser.

Every architectural decision MUST consider GitHub Pages compatibility. The
site MUST support deployment under `https://<user>.github.io/<repository>/`
or a custom domain, and MUST NOT assume it is hosted at `/`. Asset paths and
routing MUST work correctly with a repository base path. The selected
frontend framework MUST provide explicit, documented support for a
configurable base URL (e.g. `base`, `basePath`, `publicPath`, `site`).

### II. Routing, Information Architecture & Static Generation

Client-side navigation MUST be compatible with static hosting and MUST NOT
depend on server-side rewrite rules. Direct access and browser refresh MUST
NOT produce unresolved routes whenever avoidable. Preference SHOULD be
given to generating physical static pages (e.g. `/docs/index.html`,
`/downloads/index.html`) over runtime SPA route interception. If an SPA
architecture is selected, the implementation MUST explicitly solve the
GitHub Pages fallback problem. Static Site Generation SHOULD be preferred
when it improves SEO, documentation structure, direct linking,
accessibility, loading performance, or GitHub Pages compatibility.

The project MUST be architected to support at least this logical
information architecture, whether realized as independent pages or as
sections of fewer pages initially:

```
/
├── features/
├── downloads/
├── docs/
│   ├── getting-started/
│   ├── library/
│   ├── storage/
│   ├── artwork/
│   ├── downloads/
│   └── troubleshooting/
├── roadmap/
├── releases/
├── contribute/
└── support/
```

Sections MAY initially appear on the landing page, but implementation MUST
NOT prevent them from becoming independent pages later; navigation
architecture MUST anticipate this evolution.

### III. Framework Selection & Architectural Simplicity

The project SHOULD use the simplest frontend architecture capable of
fulfilling the requirements. Framework complexity MUST be justified by
concrete product needs — never adopted merely for popularity. The stack
SHOULD favor static generation, component reuse, Markdown documentation,
TypeScript, strong build tooling, accessibility, responsive design, and
long-term maintainability. Reasonable candidates MAY include Astro, Vite,
React, TypeScript, MDX, and Markdown, but none is mandated by this
constitution. The implementation plan MUST document the framework decision
and its trade-offs.

Do not introduce patterns common in large backend/enterprise systems
(dependency injection frameworks, repository patterns, service layers,
event buses, global state frameworks, microfrontends,
backend-for-frontend, runtime API gateways) unless concretely justified.
This is a static product and documentation website; complexity MUST be
justified.

### IV. Content Architecture & Documentation as Product

Content MUST be separated from presentation wherever practical, and product
information SHOULD NOT be duplicated across unrelated components.
Structured content MAY be represented as Markdown, MDX, JSON, TypeScript
data modules, or YAML. Centralized content SHOULD exist for product
metadata, platform support, downloads, navigation, features, documentation,
roadmap, social links, external URLs, and legal disclaimers, so that
updates such as a new release or roadmap item are possible without editing
multiple UI components.

Documentation is part of the product, not secondary marketing content. The
project MUST support structured technical documentation covering, at a
minimum: Getting Started, Library, Storage, Artwork, Downloads,
Troubleshooting, and Contributing. Documentation SHOULD be Markdown-based
and pages MUST support stable URLs, logical headings, internal navigation,
code/command snippets, cross-links, external links, images, and tables when
necessary. The architecture MUST allow documentation to expand
significantly without requiring a redesign.

### V. Forge Dark Design System & Stitch as Reference

The website MUST follow the **Forge Dark** visual identity, synced 1:1 from
the desktop/mobile app's own tokens (e.g. Background `#090911`, Surface
`#151320`, Primary `#965af6`), with secondary surface, typography, status,
and interaction tokens derived from the established OPL Forge visual
language. The site MUST feel like an
extension of the application: technical, dark, high contrast, dense but
readable, developer-oriented, tool-like, and precise. Generic SaaS
aesthetics and excessive gradients, glow, glassmorphism, decorative
animation, or rounded-card overload MUST be avoided.

Visual values MUST be centralized through design tokens, covering at
minimum: background, surface, surface-elevated, primary, primary-hover,
text-primary, text-secondary, text-muted, border, success, warning, error,
info, fragmented, verifying, and ready. Spacing, radius, and typography
scales SHOULD also be tokenized. Components MUST NOT introduce ad hoc
colors; new tokens MUST represent reusable semantic concepts.

Stitch MAY be used to produce reference layouts (via MCP or exported
artifacts) that developers and coding agents SHOULD inspect during
implementation. However, **Stitch-generated HTML MUST NOT automatically
become production code**. Stitch output is a visual specification, layout
reference, interaction inspiration, and design-system reference only.
Production implementation MUST still satisfy code quality,
componentization, responsive behavior, accessibility, maintainability,
performance, security, and project conventions. Where implementation
diverges from Stitch due to engineering constraints, the reason SHOULD be
documented.

### VI. Responsive Design & Accessibility (Non-Negotiable)

The website MUST support mobile, tablet, and desktop. Desktop-first
implementation without mobile validation is prohibited. Layouts MUST
gracefully adapt down to common mobile widths, with desktop favoring rich
multi-column layouts and large product previews, tablet using adaptive
columns and simplified navigation, and mobile using touch-first,
single-column, simplified visuals with clear primary actions. No critical
information MAY depend exclusively on hover behavior.

Accessibility MUST be considered during implementation, not retrofitted
later. The site SHOULD target **WCAG 2.2 AA** where practical. At minimum:
semantic HTML MUST be used; headings MUST follow a logical hierarchy;
interactive controls MUST be keyboard accessible; focus states MUST remain
visible; images MUST include meaningful alt text; decorative images MUST
NOT pollute screen-reader output; text/background contrast MUST be
sufficient; navigation MUST be usable without a mouse; and motion MUST
respect reduced-motion preferences. Color MUST NOT be the sole indicator of
state (e.g. fragmentation status MUST pair color with a text label such as
`FRAGMENTED`, not color alone).

### VII. Progressive Enhancement, Performance & Core Web Vitals

The website MUST remain understandable if JavaScript is unavailable or
partially fails, wherever feasible. JavaScript SHOULD enhance navigation,
filtering, interactive demonstrations, visual transitions, and
documentation UX, but SHOULD NOT be required merely to render essential
marketing copy; important content SHOULD exist in generated HTML whenever
the chosen architecture supports it.

Performance is a product requirement. The site MUST avoid unnecessary
JavaScript. The initial page SHOULD prioritize text, the primary product
visual, navigation, and the primary CTA. Large images MUST be optimized
using modern formats where appropriate, SHOULD define dimensions to
minimize layout shift, and SHOULD be lazy-loaded below the fold. Production
builds MUST remove development-only assets and debugging information.
Avoid shipping large libraries for trivial interactions.

Implementation SHOULD aim for strong Core Web Vitals (LCP, CLS, and INP
rated "Good"). No decorative animation may justify poor user-perceived
performance, and performance regressions SHOULD be treated as defects.

### VIII. Dependency Discipline & Security by Default

Every new runtime dependency MUST solve a concrete problem and MUST NOT be
added only to avoid writing trivial code. Before adding a dependency,
evaluate bundle cost, maintenance activity, security history, ecosystem
maturity, necessity, and static-build compatibility. Large UI libraries
SHOULD NOT be introduced unless their value is clear; prefer native
platform capabilities for simple behaviors.

Even as a static site, security constraints apply. The implementation MUST
protect against unsafe HTML injection, XSS introduced through dynamic
content, unsafe URL interpolation, malicious Markdown rendering, and
dependency supply-chain risk. Any content rendered as HTML from Markdown or
external sources MUST be handled safely; raw HTML in documentation SHOULD
be minimized; external links SHOULD use safe attributes where appropriate
(e.g. `rel="noopener noreferrer"`).

Secrets (tokens, API secrets, Patreon private credentials, GitHub private
tokens, deployment secrets, personal access tokens) MUST NEVER be embedded
in frontend code. GitHub Actions secrets MUST only exist in GitHub's secret
management, and only when actually required.

### IX. External Links, GitHub Integration & Configuration

External URLs (GitHub repository, releases, issues, discussions, LinkedIn,
Patreon, documentation source) MUST NOT be scattered throughout the
component tree; they MUST be centralized in a single configuration surface
(e.g. `siteConfig.social.github`, `siteConfig.support.patreon`) so links are
easy to update.

**GitHub Releases are the canonical binary distribution mechanism.** The
website MUST NOT host desktop installers or APK binaries directly in the
GitHub Pages build unless explicitly justified. Download actions SHOULD
route users to release artifacts (e.g. Windows `.exe`, Linux `AppImage`/
`.deb`, Android `.apk`), and the site SHOULD clearly distinguish Stable,
Pre-release, and Experimental artifacts when relevant. The architecture
SHOULD allow supported download formats to evolve.

GitHub API integration MAY be added progressively (e.g. latest version,
star count, release metadata) but project usability MUST NOT depend on it:
if such a request fails, the page MUST still display useful static content
and a GitHub link. Authentication tokens MUST NOT be exposed to retrieve
public repository information.

Static public configuration MAY be exposed through build-time environment
variables (e.g. `PUBLIC_GITHUB_URL`, `PUBLIC_SITE_URL`); only values
explicitly safe for client exposure may use public-prefixed variables, and
no secret MUST ever use one. Critical permanent links MAY instead live in
typed source configuration when that is simpler.

### X. Content Accuracy, Version Integrity & Roadmap Honesty

Technical claims MUST reflect actual OPL Forge capabilities (supported
platforms, formats, fragmentation validation, FAT32 handling, USBExtreme
behavior, PCSX2 integration, download capabilities, metadata support, etc.).
Future functionality MUST be clearly identified as **Planned**, **In
Development**, or **Experimental**, and the site MUST NOT present roadmap
features as production-ready. Roadmap status MUST use a defined vocabulary
(`AVAILABLE`, `IN DEVELOPMENT`, `PLANNED`, `EXPERIMENTAL`) and SHOULD be
stored as structured content. Dates MUST NOT be invented unless a release
date has actually been committed.

Version and popularity data MUST NOT be fabricated. Do not hardcode
fictional release numbers, dates, or metrics (e.g. star counts, download
counts, contributor counts) unless backed by real project data; when a
version is unknown, use a visibly-labeled development placeholder only in
source data, never in a way that implies a release exists when it does not.
Product screenshots and mockups SHOULD represent actual or intentionally
conceptual OPL Forge interfaces; a mockup MUST NOT imply nonexistent
functionality without appropriate "future capability" context.

### XI. Legal Independence & Responsible Product Messaging

The site MUST clearly communicate, in an appropriate footer or legal area,
that OPL Forge is an independent open-source project. At minimum it MUST
include a disclaimer equivalent to: *"OPL Forge is an independent
open-source project and is not affiliated with or endorsed by Sony
Interactive Entertainment."* References to PlayStation, PlayStation 2, and
related marks MUST NOT imply official affiliation, and unauthorized
reproduction of proprietary branding that could create confusion MUST be
avoided.

The website MUST NOT market the product primarily as a piracy or
unauthorized distribution tool. Messaging SHOULD emphasize management of
user-owned games, backups, storage management, preservation, library
organization, and technical tooling; it MUST NOT imply that copyrighted
commercial games are freely distributed by OPL Forge.

Financial support (e.g. Patreon) MUST be presented as optional; the site
MUST NOT imply core capabilities are locked behind payment, and MUST NOT
create misleading scarcity or monetization pressure. Messaging MUST
reinforce that OPL Forge remains open source.

### XII. Component Architecture, Type Safety & Code Quality

UI implementation MUST favor reusable, semantically named components (e.g.
`Navigation`, `Footer`, `Hero`, `FeatureCard`, `PlatformBadge`,
`DownloadCard`, `StatusBadge`, `DocumentationCard`, `RoadmapItem`). Do not
abstract prematurely — create shared components when repetition or semantic
consistency justifies them, and decompose large pages into meaningful
sections. Source structure SHOULD communicate product intent and follow the
chosen framework's idiomatic layout in preference to imposing artificial
Clean Architecture layers on a static website.

If TypeScript is supported by the toolchain, it SHOULD be the default
language for application logic. Avoid uncontrolled `any`; structured
content (e.g. `Release`, `Platform`, `DownloadArtifact`, `Feature`,
`RoadmapItem`, `SocialLink`) SHOULD have explicit types that prevent invalid
configuration states.

Code MUST prioritize readability, explicit intent, maintainability, and
predictable behavior over clever abstractions. Names SHOULD represent
product concepts (`DownloadCard`, `RoadmapStatus`) rather than vague
technical accidents (`Box1`, `Thing`, `Handler2`). Comments SHOULD explain
architectural intent or non-obvious constraints, not trivial syntax.

### XIII. Testing, CI/CD & Reproducible Builds

The project MUST have automated validation. At minimum, tests SHOULD cover
critical logic where applicable: URL generation, base-path behavior,
navigation configuration, release/download mapping, content parsing,
filtering logic, and configuration validation. Component tests SHOULD cover
meaningful interactive behavior; avoid tests that only assert
implementation details.

Every production build MUST validate successfully before deployment. CI
SHOULD verify install, lint, typecheck, test, and build steps when those
commands exist in the selected stack, and a deployment MUST NOT happen when
mandatory validation fails.

**GitHub Actions is the canonical CI/CD mechanism.** The repository MUST
contain a workflow dedicated to GitHub Pages deployment following the
conceptual pipeline: checkout → setup runtime → install dependencies → lint
→ type check → tests → static build → upload Pages artifact → deploy.
Deployment SHOULD happen from a protected canonical branch (e.g. `main`);
pull requests SHOULD run validation without production deployment. The
production site MUST be deployable through GitHub Actions without manual
file copying, and deployment configuration MUST be version-controlled;
manual deployment SHOULD NOT be the canonical process.

Dependency versions MUST be locked and the lockfile MUST be committed. CI
MUST use deterministic installation where supported (e.g. `npm ci`,
`pnpm install --frozen-lockfile`). Local and CI builds SHOULD produce
equivalent static output. Generated directories (`node_modules/`, `dist/`,
`.cache/`, `coverage/`) MUST NOT be committed unless required by the
deployment architecture; GitHub Pages deployment SHOULD use generated CI
artifacts rather than committing compiled output to the source branch.

The production site MUST define an explicit base URL supporting both
`https://theguitarvity.github.io/oplforge/` and a future custom domain;
changing the site domain SHOULD require configuration changes only. If a
custom domain is adopted, GitHub Pages `CNAME` configuration MAY be
introduced; no application code SHOULD assume the `.github.io` hostname,
and canonical links/social metadata SHOULD derive from central site
configuration.

A contributor MUST be able to understand how to run the website locally
from the README, which MUST document install, develop, lint, test, build,
and preview commands where applicable. Local development SHOULD require
minimal setup beyond the documented runtime and package manager.

### XIV. SEO, Semantic URLs & Asset Management

Public pages MUST provide a page title, meta description, canonical URL,
and Open Graph/social preview metadata. The home page SHOULD clearly
identify OPL Forge, PlayStation 2, OPL, game library management, storage
management, and open source. Structured metadata SHOULD be added where
appropriate, and each documentation page SHOULD have its own title and
description.

URLs SHOULD be readable, stable, lowercase, and descriptive (e.g.
`/docs/storage/fragmentation/`) rather than opaque query parameters (e.g.
`/page?id=14`). Documentation URLs SHOULD remain stable once published
whenever practical.

Assets MUST be organized intentionally (e.g. `assets/brand/`,
`assets/product/`, `assets/screenshots/`, `assets/games/`,
`assets/diagrams/`, `assets/icons/`). Large binary assets SHOULD NOT be
duplicated; use web-optimized versions, keeping source design assets
separate from optimized website assets where practical.

### XV. Analytics, Privacy & Cookie Minimalism

Analytics is optional. If introduced, privacy-friendly solutions SHOULD be
preferred, avoiding cross-site profiling, fingerprinting, unnecessary
cookies, and advertising trackers. Any analytics dependency MUST be
explicitly documented, and the website MUST remain functional when
tracking is blocked. The initial architecture SHOULD require no cookies;
do not introduce a cookie-consent flow unless functionality actually
requiring consent is introduced.

## Specification, Planning & Task Discipline

Every Spec Kit feature specification MUST describe behavior and outcomes
before implementation details, defining the user problem, expected
experience, acceptance criteria, edge cases, constraints, accessibility
implications, responsive implications, and GitHub Pages implications. Specs
MUST NOT prematurely dictate internal code structure unless structure is
itself a requirement.

Every implementation plan MUST explicitly evaluate static hosting
compatibility, base-path behavior, routing, bundle impact, accessibility,
responsive design, security, testing, documentation, and CI/CD. Any
constitution exception MUST be identified and justified before
implementation.

Generated tasks MUST be independently understandable, identifying target
files/modules, expected result, and validation mechanism. Vague tasks
("Improve website", "Fix styles", "Finish docs", "Make responsive") are
prohibited; tasks MUST be concrete and scoped (e.g. "Implement responsive
`DownloadCard` grid with desktop, tablet and mobile breakpoints").

Changes introducing user-facing functionality SHOULD evaluate whether
documentation also requires changes; a feature MUST NOT be considered
complete when users cannot reasonably discover how to use it. Significant
architectural decisions SHOULD produce lightweight Architecture Decision
Records documenting Context, Decision, Alternatives, and Consequences (e.g.
framework choice, GitHub Pages routing strategy, documentation
architecture, release metadata strategy, analytics adoption, image
optimization strategy).

## Definition of Done

A website feature is complete only when all of the following hold:

1. Acceptance criteria pass.
2. Production build succeeds.
3. GitHub Pages base-path behavior is valid.
4. Desktop, tablet, and mobile layouts are validated.
5. Keyboard navigation remains usable.
6. Accessibility requirements are satisfied.
7. Relevant automated tests pass.
8. Documentation is updated when required.
9. External links are valid.
10. No secrets or private data are exposed.
11. The feature does not contradict the public state of the OPL Forge
    product (see Article X).

Before merge, changes SHOULD pass lint, type checking, automated tests,
production build, link validation, and static analysis where available.
UI-impacting changes SHOULD be manually reviewed at mobile, tablet, and
desktop breakpoints. Broken external links SHOULD be treated as defects
when detected. Accessibility, performance, and security are
definition-of-done criteria, not optional polish — a feature is not
complete merely because it visually matches a Stitch reference.

## Guiding Principle

> **Build a fast, static, accessible and maintainable open-source product
> website that feels as intentional and technical as OPL Forge itself.**

When choosing between two approaches, prefer the one that improves
simplicity, static deployability, maintainability, accessibility,
performance, content longevity, and contributor experience — without
compromising the Forge Dark product identity.

## Governance

This constitution supersedes all other engineering practices for the OPL
Forge website repository. Future artifacts — `spec.md`, `plan.md`,
`tasks.md`, ADRs, implementation code, CI workflows, and documentation —
MUST comply with it.

**Amendment procedure**: Amendments are proposed via pull request against
this file, MUST include a Sync Impact Report (prepended as an HTML comment)
summarizing the version change, modified/added/removed sections, and any
deferred follow-ups, and MUST be reviewed against the versioning policy
below before merge.

**Versioning policy** (semantic versioning applied to governance content):
- **MAJOR**: Backward-incompatible governance changes — removing or
  redefining a principle in a way that reverses its prior guarantee.
- **MINOR**: Adding a new principle/article or materially expanding
  guidance within an existing one.
- **PATCH**: Clarifications, wording fixes, typo corrections, and other
  non-semantic refinements.

**Compliance review**: All specs, plans, and pull requests MUST verify
compliance with this constitution. Any complexity or deviation MUST be
justified in the relevant plan's complexity-tracking section. If an
implementation decision conflicts with the constitution: (1) the conflict
MUST be identified, (2) the reason MUST be documented, (3) the constitution
MUST be amended intentionally if the new direction is valid, and (4) silent
violations are prohibited.

**Version**: 1.0.0 | **Ratified**: 2026-08-08 | **Last Amended**: 2026-08-08
