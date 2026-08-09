# Feature Specification: OPL Forge Official Product Website

**Feature Branch**: `001-official-product-website`

**Created**: 2026-08-08

**Status**: Draft

**Input**: User description: "Create the feature specification for the OPL Forge Official Website. The website must show the real OPL Forge application as completely as possible — real screenshots, real interface states, desktop/Android/tablet views, workflow sequences, dialogs, dashboards, library screens, game details, device diagnostics, installation flows, download flows, background operations, logs, artwork management, settings and technical status information, so that the product itself is the protagonist rather than generic marketing copy. The constitution already governs architecture, hosting, design tokens and quality gates and MUST NOT be redefined here."

**Governing constitution**: [.specify/memory/constitution.md](../../.specify/memory/constitution.md) — this specification assumes and does not redefine the static-first/GitHub Pages architecture, Forge Dark design system, accessibility, performance, security, and quality-gate principles already ratified there.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover OPL Forge at a Glance (Priority: P1)

A PS2 enthusiast lands on the homepage for the first time. Within the hero
area, before scrolling, they see real OPL Forge application imagery, a clear
value proposition, the platforms it supports, and the primary ways to act
(download it, view the source, or read the docs).

**Why this priority**: This is the first impression and the minimum required
for the website to fulfill its purpose. If a visitor cannot understand what
OPL Forge is and what it looks like immediately, every other section is moot.

**Independent Test**: Can be fully tested by loading the homepage alone (no
other route) and verifying a first-time visitor can answer "What is OPL
Forge?", "What does it look like?", and "How do I get it or learn more?"
without scrolling past the hero.

**Acceptance Scenarios**:

1. **Given** a first-time visitor on the homepage, **When** the page loads,
   **Then** the hero displays real OPL Forge product imagery (not an
   abstract illustration), a headline and supporting value proposition, the
   supported platforms, and visible Download, GitHub, and Documentation
   calls to action.
2. **Given** the hero product imagery, **When** the visitor looks at it,
   **Then** the screenshot is large enough that real application structure
   (e.g. navigation, library content, status indicators) is legible rather
   than acting as small decoration.
3. **Given** a visitor on a mobile device, **When** the hero renders,
   **Then** the same information (value proposition, platforms, CTAs,
   product imagery) remains understandable without horizontal scrolling.

---

### User Story 2 - Explore the Product Through Real Screenshots (Priority: P1)

A visitor scrolls past the hero into a substantial product tour that walks
through the application's major areas — dashboard, library, game details,
installation, device management, fragmentation diagnostics, artwork
synchronization, downloads/background operations, and activity logs — using
real captured screenshots accompanied by short explanations of what is being
shown and why it matters.

**Why this priority**: Showing the real product as completely as possible is
the primary objective of this feature. Without a credible, evidence-based
product tour, the site is indistinguishable from a generic marketing page.

**Independent Test**: Can be fully tested by browsing the homepage's product
tour section (or the dedicated Features page) and confirming that each major
product area covered by the current application has a corresponding real
screenshot and caption, with capabilities that don't yet exist clearly
labeled as such.

**Acceptance Scenarios**:

1. **Given** the product tour section, **When** the visitor scrolls through
   it, **Then** each major implemented product area (dashboard, library,
   game details, installation, device management, fragmentation
   diagnostics, artwork, downloads, activity/logs) is represented by a real
   screenshot rather than a generic icon or illustration, wherever that
   screenshot currently exists.
2. **Given** a product capability that has not shipped yet, **When** it is
   referenced anywhere in the tour, **Then** it is visually or textually
   labeled as `PLANNED`, `IN DEVELOPMENT`, or `EXPERIMENTAL` and is never
   presented as available today.
3. **Given** any screenshot in the tour, **When** the visitor reads the
   accompanying caption, **Then** the caption explains what is shown and why
   it is useful, rather than leaving the image unexplained.
4. **Given** a product screenshot that is not yet available at
   implementation time, **When** the section is built, **Then** the gap is
   documented rather than filled with a fabricated interface.

---

### User Story 3 - Download the Right Build (Priority: P1)

A visitor decides to try OPL Forge. They navigate to a dedicated downloads
experience, identify their platform, and are guided to the correct real
release artifact (or, if automation isn't wired up yet, to the project's
GitHub Releases), without being shown invented version numbers or
unavailable platforms presented as ready.

**Why this priority**: Converting an interested visitor into an installed
user is a core commercial/adoption goal of the site and depends on accurate,
trustworthy release information.

**Independent Test**: Can be fully tested by visiting the downloads route in
isolation and verifying that every listed platform links to a real,
currently existing release artifact or to GitHub Releases, with unavailable
platforms clearly marked rather than omitted or faked.

**Acceptance Scenarios**:

1. **Given** the downloads page, **When** a visitor identifies their
   platform (Windows, Linux, Android, etc.), **Then** they are guided to the
   matching real artifact or to GitHub Releases when direct hosting isn't
   available.
2. **Given** no stable release exists yet for a platform, **When** the
   visitor views that platform's entry, **Then** the page communicates that
   state gracefully (e.g. "No stable release yet" or "Pre-release
   available") instead of hiding the platform or fabricating a version.
3. **Given** any version, date, or download-count figure displayed anywhere
   on the site, **When** it is inspected, **Then** it traces back to real
   project data — never an invented number.

---

### User Story 4 - Evaluate the Android Experience (Priority: P2)

An Android user wants to know whether OPL Forge offers a real mobile
experience or just a shrunk-down desktop UI. They find a dedicated Android
showcase with multiple real mobile screenshots covering home, library, game
details, device status, and downloads, demonstrating touch-first navigation.

**Why this priority**: Android is an explicit supported product surface and
deserves proportional visual representation, but it is secondary to the
overall first impression and core download/tour journeys.

**Independent Test**: Can be fully tested by visiting the Android showcase
section/page alone and confirming multiple distinct real mobile screens are
shown (not a single phone mockup next to the desktop hero).

**Acceptance Scenarios**:

1. **Given** the Android section, **When** a visitor views it, **Then** at
   least several distinct real Android screens are shown (e.g. home,
   library, game details, device status, downloads) wherever those
   screenshots exist.
2. **Given** the Android screenshots, **When** the visitor compares them to
   desktop, **Then** touch-first navigation patterns (e.g. bottom
   navigation, condensed status views) are visually evident rather than an
   identical desktop layout scaled down.
3. **Given** a mobile capability that does not yet exist, **When** it would
   otherwise appear, **Then** it is omitted or explicitly labeled as not yet
   available.

---

### User Story 5 - Understand Device & Diagnostic Tools (Priority: P2)

A user who manages physical PS2 storage wants to understand how OPL Forge
helps diagnose device health and fragmentation before trusting it with their
library. They find a dedicated device-management and fragmentation
showcase that accurately explains what is verifiable on each host operating
system.

**Why this priority**: Fragmentation diagnostics is called out as a key
technical differentiator, but it is one showcase among several rather than
the first thing every visitor needs.

**Independent Test**: Can be fully tested by visiting the device/diagnostics
showcase alone and confirming it shows a real device screen, a real
fragmentation result screen, and an explanation of platform-specific
diagnostic capability differences.

**Acceptance Scenarios**:

1. **Given** the device management showcase, **When** a visitor views it,
   **Then** a real screenshot of a connected device's state (filesystem,
   capacity, status) is shown.
2. **Given** the fragmentation diagnostics showcase, **When** a visitor views
   it, **Then** real fragmentation states (healthy, fragmented, unknown/
   unverifiable, scanning, error) are represented wherever available.
3. **Given** platform-specific diagnostic capability, **When** the copy
   explains it, **Then** it accurately distinguishes what is verifiable per
   host OS (e.g. Linux extent inspection vs. a platform where fragmentation
   status may be unverifiable) without implying equivalent capability across
   all platforms.

---

### User Story 6 - Learn the Installation Workflow (Priority: P2)

A user considering adding games to their library wants to understand, before
trying it themselves, what the Add Game / installation flow actually looks
like — source selection, validation, destination, progress, and completion —
through a visual sequence rather than a generic "install games easily"
statement.

**Why this priority**: Demonstrating a real, technical workflow builds
trust with the target technical audience, but is one specific journey within
the broader product tour.

**Independent Test**: Can be fully tested by visiting the installation
showcase and confirming it presents a screenshot-backed sequence of real
stages rather than an unsupported marketing claim.

**Acceptance Scenarios**:

1. **Given** the installation showcase, **When** a visitor views it,
   **Then** the major real stages of the flow (source selection, metadata
   review, destination selection, progress, verification, completion) are
   each represented by a real screenshot wherever that stage exists in the
   shipped product.
2. **Given** a game input source (e.g. local storage, network, catalog),
   **When** it is presented, **Then** only currently supported sources are
   labeled available; unsupported sources are labeled as roadmap/in
   development.
3. **Given** large-file/FAT32 handling is part of the real installation
   behavior, **When** it is depicted, **Then** the explanation matches the
   product's actual behavior rather than a generic simplification.

---

### User Story 7 - Access Documentation From the Product Showcase (Priority: P2)

A visitor who has seen a capability in the product tour wants to learn how
to use it. They find a first-class, clearly navigable documentation entry
point, and — where applicable — the showcased feature links directly to the
related documentation topic.

**Why this priority**: Documentation is treated as part of the product, not
an afterthought, but discovering it is a secondary action after the initial
product impression.

**Independent Test**: Can be fully tested by navigating from primary site
navigation to the documentation entry point and confirming major topics
(Getting Started, Installation, Library, Games, Storage, Fragmentation,
Artwork, Downloads, Troubleshooting, Contributing) are reachable with stable
URLs.

**Acceptance Scenarios**:

1. **Given** the primary site navigation, **When** a visitor looks for
   documentation, **Then** it is present as first-class navigation, not
   buried only in the footer.
2. **Given** a showcased product capability with a corresponding
   documentation topic, **When** the visitor is viewing that showcase,
   **Then** a link to the related documentation is available where such
   documentation exists.
3. **Given** a documentation page has been published, **When** it is later
   revisited, **Then** its URL remains stable.

---

### User Story 8 - Inspect the Source and Contribute (Priority: P3)

A developer or curious open-source user wants to inspect the code, report an
issue, or contribute. They can reach the GitHub repository easily from
multiple natural entry points without being bombarded by redundant identical
buttons, and can learn what kinds of contributions are welcome.

**Why this priority**: Important for open-source sustainability, but
secondary to the core discovery/download/tour journeys for a first-time
visitor.

**Independent Test**: Can be fully tested by locating a GitHub link from
navigation, the open-source section, and the footer, and by reading the
open-source section's description of accepted contribution types.

**Acceptance Scenarios**:

1. **Given** a visitor anywhere on the site, **When** they look for the
   source repository, **Then** they can find it via primary navigation or a
   visible CTA, the open-source section, and the footer — without excessive
   duplicate buttons crowding a single section.
2. **Given** the open-source section, **When** a visitor reads it, **Then**
   it explains accepted contribution types (bug reports, feature proposals,
   testing, documentation, code, platform feedback) without displaying
   fabricated star/fork/contributor/download counts.

---

### User Story 9 - Support Development Optionally (Priority: P3)

A visitor who values the project wants an optional way to financially
support it. They find a clearly optional support section referencing
Patreon, understand what the funding is used for, and are reassured that no
functionality is gated behind payment.

**Why this priority**: Supports long-term project sustainability but is not
required for a visitor to understand or use the product.

**Independent Test**: Can be fully tested by visiting the support section
alone and confirming the messaging frames support as optional and
non-gating.

**Acceptance Scenarios**:

1. **Given** the support section, **When** a visitor reads it, **Then** it
   presents support as optional (e.g. funding development, testing
   hardware, infrastructure) and explicitly reinforces that OPL Forge
   remains open source.
2. **Given** the support section, **When** compared against the rest of the
   site, **Then** no application capability is described as requiring
   payment or being unlocked by it.

---

### Edge Cases

- What happens when a required product screenshot does not yet exist? The
  section MUST NOT be filled with a fabricated interface; the gap is
  recorded and the section is either omitted, deferred, or clearly labeled
  conceptual per Article VI/X of the constitution.
- How does the site behave when no stable release exists for a given
  platform? It MUST state that gracefully and still route the visitor to
  GitHub Releases rather than presenting a broken or empty download link.
- What happens when a visitor's browser has JavaScript disabled or partially
  failing? Essential product information (hero value proposition, primary
  CTAs, static screenshots and captions) MUST remain understandable.
- How does the site represent a platform where a capability is technically
  unverifiable (e.g. fragmentation status on a host OS without a reliable
  API)? Copy MUST state the limitation rather than imply equivalent
  capability to other platforms.
- What happens when a visitor requests a documentation topic that has not
  been written yet? The link MUST NOT be presented as available until the
  content exists.
- How are potentially sensitive details in a captured screenshot (usernames,
  home directory paths, private hostnames, tokens, internal test
  infrastructure) handled? They MUST be sanitized before publication; a
  screenshot with unsanitized sensitive data MUST NOT be published.
- What happens when the actual product's navigation/feature set differs
  from what this specification describes? The discrepancy MUST be
  identified during planning (via repository inspection) and the website
  MUST reflect the real, current product rather than this brief.
- How does the site handle a feature shown in the Stitch visual reference
  that does not correspond to a real, shipped screen? It MUST be replaced
  with a real screenshot, explicitly labeled conceptual, or omitted.
- What happens when GitHub API-derived data (e.g. star count, latest
  version) is temporarily unavailable? The page MUST still show useful
  static content and a working GitHub link.
- How does the site handle an Android or Tablet capability that has not
  been implemented? It MUST NOT be fabricated as released; it is omitted or
  marked as a future capability.

## Requirements *(mandatory)*

### Functional Requirements

**Homepage & First Impression**

- **FR-001**: The homepage MUST present a hero section containing OPL Forge
  branding, a short value proposition, supported platforms, and visible
  Download, GitHub, and Documentation calls to action, plus real product
  imagery large enough to convey application structure.
- **FR-002**: The homepage MUST provide visual shortcuts to major product
  capabilities (e.g. Library, Install Games, Storage, Diagnostics, Artwork,
  Downloads, Catalog) that lead to the corresponding showcase section or
  dedicated page.
- **FR-003**: The homepage MUST include a substantial product tour covering
  the major implemented product areas using large real screenshots rather
  than generic feature cards.

**Product Screenshot Showcase**

- **FR-004**: The website MUST represent each of the following product areas
  with real screenshots wherever the underlying screenshot and feature
  currently exist: dashboard, library, game catalog, game details, add
  game/installation flow, device management, fragmentation diagnostics,
  download manager, artwork synchronization, background operations,
  activity/logs, and settings.
- **FR-005**: Every showcased screenshot MUST originate from a real
  application build (released or current development build); a screen that
  represents unshipped functionality MUST be explicitly labeled `IN
  DEVELOPMENT`, `PLANNED`, or `CONCEPT`.
- **FR-006**: Every significant screenshot MUST be accompanied by a caption
  or supporting copy explaining what is shown and why it matters; screenshot
  sequences that add no new information MUST be avoided.
- **FR-007**: The website MUST maintain screenshots as a structured,
  reusable content catalog (with attributes such as identifier, title,
  description, platform, related feature, status, and alt text) so the same
  screenshot can be reused across the homepage, feature showcases, and
  documentation instead of being duplicated ad hoc.
- **FR-008**: Screenshot content MUST anticipate incremental growth — new
  screenshots MUST be addable without restructuring already-published
  sections.

**Installation & Workflow Storytelling**

- **FR-009**: The website MUST present the Add Game / installation
  experience as a real, screenshot-backed sequence covering the stages that
  exist in the shipped product (e.g. source selection, metadata review,
  destination selection, storage validation, progress, verification,
  completion), rather than a generic marketing statement.
- **FR-010**: Game input sources (e.g. local storage, network/SMB, catalog)
  MUST be labeled available only when actually supported by the current
  product; unsupported sources MUST be labeled as future/roadmap.
- **FR-011**: Where large-file or filesystem-specific handling (e.g. FAT32
  splitting) is part of real product behavior, the website MAY visually
  explain it, but only in a way consistent with actual behavior.
- **FR-012**: The website MUST present at least one realistic end-to-end
  usage story (e.g. connect device → scan → diagnose → repair → sync
  artwork) using real screenshots rather than abstract marketing statements.

**Device Management & Diagnostics**

- **FR-013**: The website MUST include a device-management showcase
  demonstrating real connected-device information (filesystem, capacity,
  status) and, where implemented, available device actions.
- **FR-014**: The website MUST include a fragmentation-diagnostics showcase
  demonstrating real result states (healthy, fragmented, unknown/
  unverifiable, scanning, completed, error) wherever available.
- **FR-015**: Fragmentation- and diagnostics-related copy MUST accurately
  describe platform-specific capability differences and MUST NOT imply a
  host platform can verify something it cannot.

**Downloads & Release Integrity**

- **FR-016**: The website MUST provide a dedicated downloads experience that
  helps a visitor identify the correct build for their platform.
- **FR-017**: Listed download artifacts MUST derive from real project
  releases; when direct hosting or release automation is not yet in place,
  the experience MUST link to GitHub Releases instead of fabricating a
  download.
- **FR-018**: The downloads experience MUST gracefully communicate states
  such as "no stable release yet," "pre-release available," or "platform
  unavailable" rather than silently omitting or falsifying availability.
- **FR-019**: No version number, release date, download count, or similar
  metric MUST be hardcoded or implied unless it reflects real, current
  project data.

**Android & Tablet Showcase**

- **FR-020**: The website MUST include a dedicated Android showcase
  presenting multiple distinct real mobile screenshots (e.g. home, library,
  game details, device status, downloads, settings) wherever those
  screenshots exist, rather than a single phone image alongside the desktop
  hero.
- **FR-021**: Android-related copy and screenshots MUST demonstrate
  touch-first navigation patterns distinct from the desktop layout.
- **FR-022**: If tablet-specific layouts exist in the shipped product, the
  website MUST showcase them; if they do not yet exist, the website MUST
  NOT present tablet optimization as already released.
- **FR-023**: The website MUST provide a platform-comparison view
  summarizing capability availability across Desktop, Android, and Tablet,
  derived strictly from real, current product capabilities (no assumed
  feature parity).

**Documentation**

- **FR-024**: The website MUST provide a first-class, discoverable
  documentation entry point (not confined to the footer) covering at least:
  Getting Started, Installation, Library, Games, Storage, Fragmentation,
  Artwork, Downloads, Troubleshooting, and Contributing.
- **FR-025**: Where a showcased product capability has corresponding
  documentation, the showcase MUST link to that documentation topic.
- **FR-026**: Documentation SHOULD reuse the same real screenshots used in
  marketing showcases where they clarify instructions, rather than
  maintaining duplicate captures of the same interface.
- **FR-027**: Published documentation URLs MUST remain stable once
  published.

**Open Source, Roadmap, Support & Creator**

- **FR-028**: The website MUST make the GitHub repository easy to find from
  primary navigation or a visible CTA, an open-source section, and the
  footer, without redundant repeated buttons in a single view.
- **FR-029**: The open-source section MUST describe accepted contribution
  types (bug reports, feature proposals, testing, documentation, code,
  platform feedback) and MUST NOT display fabricated star, fork,
  contributor, or download counts.
- **FR-030**: The website MUST provide a roadmap section using a defined
  status vocabulary (`AVAILABLE`, `IN DEVELOPMENT`, `PLANNED`,
  `EXPERIMENTAL`) and MUST NOT invent release dates that have not actually
  been committed.
- **FR-031**: The website MUST provide an optional support/Patreon section
  that frames financial support as optional, explains what it funds
  (development, testing hardware, infrastructure), and reinforces that OPL
  Forge remains open source; no capability MUST be presented as
  payment-gated.
- **FR-032**: The website MUST provide a compact creator section identifying
  Victor Lucas Lopes Silva with links to his GitHub and LinkedIn profiles,
  kept visually secondary to the product content.

**Content Accuracy & Status Integrity**

- **FR-033**: Every feature claim published on the site MUST be traceable to
  one of: the actual application implementation, project documentation, the
  project roadmap, or an explicit product requirement; unsupported claims
  MUST be removed or clearly marked as future/conceptual.
- **FR-034**: The website MUST clearly distinguish `Implemented`, `In
  Development`, and `Planned` functionality everywhere status is relevant
  (product tour, roadmap, platform comparison).
- **FR-035**: The website MUST NOT display fictional testimonials, ratings,
  community quotes, or unverifiable adoption metrics (e.g. "10,000+ users,"
  "#1 PS2 tool").
- **FR-036**: The website MUST include the independent-project legal
  disclaimer required by the constitution and MUST frame product messaging
  around legitimate use cases (personal backups, library organization,
  preservation, storage management, homebrew tooling).

**Screenshot Governance & Privacy**

- **FR-037**: Every screenshot published to the site MUST be reviewed and
  sanitized to remove personal usernames, home-directory paths, private
  hostnames/IPs, network share credentials, access tokens, and internal
  development infrastructure references before publication.
- **FR-038**: Every published screenshot MUST have meaningful, descriptive
  alt text (or intentionally empty alt text for purely decorative crops);
  generic placeholders such as "Screenshot 1" are not acceptable.

**Repository, Asset & Design Inspection (pre-implementation)**

- **FR-039**: Before implementation planning proceeds, the current OPL
  Forge application repository and its documentation MUST be inspected to
  determine actual current screens, routes/views, feature modules,
  supported platforms, existing screenshot assets, and release artifacts;
  any discrepancy between this specification and the real product MUST be
  identified and reconciled in favor of the real product.
- **FR-040**: Before implementation planning proceeds, the existing Stitch
  visual reference MUST be inspected and mapped against real product
  screens and available assets; any Stitch section with no corresponding
  real screen MUST be replaced with a real screenshot, labeled conceptual,
  or omitted.
- **FR-041**: Before final implementation, a visual asset inventory MUST be
  produced identifying logo, desktop/Android/tablet screenshots, artwork
  examples, icons, and background/store graphics, each marked as
  `available`, `missing`, `needs recapture`, or `concept only`.
- **FR-042**: A product surface inventory MUST be produced from the real
  application (surface, platform, implementation status, screenshot
  availability, planned website coverage) and used to track showcase
  completeness; any surface that cannot be represented at launch MUST be
  documented as a known gap rather than silently dropped.

### Key Entities *(include if feature involves data)*

- **Product Screenshot**: A captured image of a real (or explicitly labeled
  conceptual) OPL Forge interface state. Key attributes: identifier, title,
  caption/description, platform (Desktop/Android/Tablet), related feature
  area, status (available/in development/planned/concept), source
  (release build/dev build/concept), alt text, and a reuse priority so the
  same asset can appear in multiple contexts (homepage, feature page,
  documentation).
- **Product Surface**: A distinct, meaningful screen or workflow stage of
  the real application (e.g. "Device Management," "Fragmentation
  Diagnostics," "Add Game — Source Selection"). Key attributes: name,
  platform, implementation status, whether a screenshot currently exists,
  and whether it is represented on the website.
- **Feature/Module**: A logical grouping of related product surfaces (e.g.
  Library, Installation, Diagnostics, Artwork, Downloads) used to organize
  navigation, the product tour, and documentation topics.
- **Platform**: A supported product surface context (Desktop, Android,
  Tablet) with its own capability profile used to drive the platform
  comparison view.
- **Documentation Topic**: A structured content unit (e.g. Getting Started,
  Fragmentation) with a stable URL, related feature area, and optional
  linked screenshots.
- **Release/Download Artifact**: A real, versioned build for a specific
  platform (e.g. Windows `.exe`, Linux AppImage/`.deb`, Android `.apk`)
  with an availability state (stable, pre-release, unavailable).
- **Roadmap Item**: A planned or in-progress capability with a status drawn
  from the constitution's defined vocabulary (`AVAILABLE`, `IN
  DEVELOPMENT`, `PLANNED`, `EXPERIMENTAL`) and no fabricated date unless
  committed.
- **External/Social Link**: A centralized reference to GitHub, LinkedIn, or
  Patreon used consistently across navigation, sections, and footer.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: A first-time visitor can correctly describe what OPL Forge is,
  what it looks like, and how to get it after viewing only the homepage
  hero, without scrolling further, in usability observation.
- **SC-002**: At least 90% of the product surfaces identified in the
  pre-implementation product surface inventory are represented on the
  website at launch with a real screenshot; any remaining surfaces are
  listed in an explicit, published gap list rather than silently omitted.
- **SC-003**: A visitor evaluating platform support can identify, within
  the Android and platform-comparison sections, at least the primary
  distinctions between Desktop, Android, and Tablet capability without
  needing to consult external sources.
- **SC-004**: A visitor seeking to download OPL Forge can reach a working
  download link or GitHub Releases entry for their platform in three
  interactions or fewer from the homepage.
- **SC-005**: Zero published feature claims, version numbers, or adoption
  metrics are found to be unsupported by real project data during content
  review.
- **SC-006**: A visitor can locate the documentation entry point from the
  primary site navigation in one interaction from any page.
- **SC-007**: A visitor can locate a working link to the GitHub repository
  from at least two independent locations on the site (e.g. navigation and
  footer, or an open-source section) without encountering a broken link.
- **SC-008**: 100% of published screenshots have been reviewed against the
  sanitization checklist (no personal paths, usernames, hostnames, tokens,
  or credentials visible) prior to publication.
- **SC-009**: A visitor can distinguish implemented, in-development, and
  planned capabilities correctly when asked, based solely on the status
  labeling used across the product tour and roadmap.

## Assumptions

- The exact current set of implemented screens, supported platforms, and
  available screenshot assets is not fully known at specification time and
  MUST be confirmed by inspecting the real OPL Forge application repository
  and its documentation during planning (see FR-039–FR-042); this
  specification describes the intended showcase breadth, not a guarantee
  that every listed surface currently has a matching screenshot.
- Tablet-specific layouts may or may not exist yet in the shipped product;
  the tablet showcase is included only to the extent real tablet screens
  exist, per FR-022.
- The Patreon URL and other external link destinations are treated as
  centralized configuration values (per the constitution) and will be
  populated with real destinations before launch; their exact values are
  an implementation/configuration detail, not a specification concern.
- Screenshot capture, sanitization, and the structured screenshot catalog
  are treated as content-production activities that occur alongside
  implementation; where a required screenshot does not exist at
  implementation time, the corresponding section is deferred or labeled
  conceptual rather than blocking the rest of the release.
- The existing Stitch-generated design is treated strictly as a visual
  reference to be reconciled against the real product (per FR-040) — it is
  not assumed to already reflect actual application screens.
- Feature parity across Desktop, Android, and Tablet is not assumed; the
  platform comparison view will reflect whatever real capability
  differences exist at implementation time.
- GitHub API-derived data (e.g. star counts, latest release) is treated as
  optional progressive enhancement; its unavailability MUST NOT block core
  site usability, consistent with the constitution.

## Out of Scope

- Backend services, databases, or server-side processing beyond static
  hosting (already governed by the constitution).
- User accounts, website authentication, or personalization.
- A custom download-hosting or file-serving system beyond linking to real
  release artifacts / GitHub Releases.
- A community forum, comments system, or any backend-dependent
  interactivity.
- Direct Patreon API integration or GitHub authentication flows.
- A proprietary CMS or e-commerce functionality.
- Product telemetry or analytics dashboards beyond optional, privacy-
  respecting page analytics already permitted by the constitution.
