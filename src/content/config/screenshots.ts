import type { PlatformId } from './productSurfaces';

export interface ProductScreenshotData {
  id: string;
  productSurfaceId: string;
  platform: PlatformId;
  filePath: string;
  altText: string;
  caption: string;
  capturedFrom: 'real-app' | 'concept';
  sanitized: boolean;
}

/** Real screenshot catalog — sourced from theguitarvity/src-app-oplforge `docs/screenshots/`. */
export const screenshots: ProductScreenshotData[] = [
  {
    id: 'dashboard',
    productSurfaceId: 'home',
    platform: 'windows',
    filePath: 'dashboard.jpg',
    altText: 'OPL Forge home workspace showing connected device space, game count, and health metrics',
    caption: 'Home workspace with live device space, game count, and health metrics.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'devices',
    productSurfaceId: 'devices',
    platform: 'windows',
    filePath: 'devices.jpg',
    altText: 'Devices hub showing the Overview tab for a connected PS2 storage device',
    caption: 'Devices hub: Overview, Manage Devices, and Diagnostics tabs.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'devices-manage',
    productSurfaceId: 'devices',
    platform: 'windows',
    filePath: 'devices-manage.jpg',
    altText: 'Manage Devices tab listing connected PS2 storage with prepare and add-local-folder actions',
    caption: 'Manage connected devices, prepare a new one, or add a local folder as a target.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'ps2-import',
    productSurfaceId: 'library',
    platform: 'windows',
    filePath: 'ps2-import.jpg',
    altText: 'Add Games panel with local-folder source and PS2/PS1/APP filtering over a real library grid',
    caption: 'Adding games from a local folder, with live PS2/PS1/APP filtering.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'library-grid',
    productSurfaceId: 'library',
    platform: 'windows',
    filePath: 'library-grid.jpg',
    altText: 'Game library grid view with real PS2 box art and attention badges',
    caption: 'Grid library view with real box art and per-game status badges.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'catalog',
    productSurfaceId: 'catalog',
    platform: 'windows',
    filePath: 'catalog.jpg',
    altText: 'Essentials Catalog discover-and-install tab with tier/media filters and Smart Fill',
    caption: 'Essentials Catalog: discover, filter by tier, and Smart Fill free space.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'fragmentation',
    productSurfaceId: 'tools-diagnostics',
    platform: 'windows',
    filePath: 'fragmentation.jpg',
    altText: 'Device diagnostic audit results showing folder structure, naming, and fragmentation checks',
    caption: 'Full device audit: folder structure, naming, and fragmentation status.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'components',
    productSurfaceId: 'tools-components',
    platform: 'windows',
    filePath: 'components.jpg',
    altText: 'OPL Components catalog listing installed and available build, runtime, and asset packages',
    caption: 'OPL Components: build/runtime binaries, PCSX2 compatibility database, and assets.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'essentials-pacman',
    productSurfaceId: 'tools-components',
    platform: 'windows',
    filePath: 'essentials-pacman.jpg',
    altText: 'OPL Components catalog listing available build and runtime binaries',
    caption: 'OPL Components catalog: build/runtime binaries and compatibility database.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'download-pacman-progress',
    productSurfaceId: 'tools-components',
    platform: 'windows',
    filePath: 'download-pacman-progress.jpg',
    altText: 'Download progress view for an OPL Component being installed',
    caption: 'Resilient, resumable download progress for OPL Components.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'downloads',
    productSurfaceId: 'tools-utilities',
    platform: 'windows',
    filePath: 'downloads.jpg',
    altText: 'Download Center listing in-progress and failed background operations',
    caption: 'Download Center: resumable, cached downloads with per-item status.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'apps',
    productSurfaceId: 'library',
    platform: 'windows',
    filePath: 'apps.jpg',
    altText: 'Library view filtered to homebrew Apps',
    caption: 'Unified library view filtered to homebrew Apps.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'legal-confirmation',
    productSurfaceId: 'tools-components',
    platform: 'windows',
    filePath: 'legal-confirmation.jpg',
    altText: 'Legal confirmation dialog shown before downloading an OPL Component',
    caption: 'Per-item legal confirmation required before queuing a download.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'settings-general',
    productSurfaceId: 'settings-general',
    platform: 'windows',
    filePath: 'settings-general.jpg',
    altText: 'General settings tab with theme, default directory, log level, and update policy',
    caption: 'General preferences: theme, default import directory, logging, and updates.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'settings-sources',
    productSurfaceId: 'settings-general',
    platform: 'windows',
    filePath: 'settings-sources.jpg',
    altText: 'Download Sources settings tab listing configured Internet Archive sources',
    caption: 'Configurable download sources, editable per entry.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'settings-network',
    productSurfaceId: 'settings-network',
    platform: 'windows',
    filePath: 'settings-network.jpg',
    altText: 'Network settings tab configuring an SMB share so a PS2 can browse the local library',
    caption: 'SMB/FTP network share configuration for browsing the library from a PS2.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'mobile-home',
    productSurfaceId: 'android',
    platform: 'android',
    filePath: 'mobile-home.png',
    altText: 'OPL Forge Android home screen with cataloged library shortcuts, counters, and suggestions',
    caption: 'Home with shortcuts, counters, and suggestions.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'mobile-library',
    productSurfaceId: 'android',
    platform: 'android',
    filePath: 'mobile-library.png',
    altText: 'OPL Forge Android library screen in grid view with filters',
    caption: 'Grid library view with filters.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'mobile-diagnostics',
    productSurfaceId: 'android',
    platform: 'android',
    filePath: 'mobile-diagnostics.png',
    altText: 'OPL Forge Android device diagnostics screen showing library readiness',
    caption: 'Library readiness diagnostics.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'mobile-sharing',
    productSurfaceId: 'android',
    platform: 'android',
    filePath: 'mobile-sharing.png',
    altText: 'OPL Forge Android SMB sharing screen for connecting a PS2 to the library',
    caption: 'SMB sharing with the PS2.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'mobile-essentials',
    productSurfaceId: 'android',
    platform: 'android',
    filePath: 'mobile-essentials.png',
    altText: 'OPL Forge Android Essentials catalog with Catalog, Smart Fill, and Downloads tabs and tier filters',
    caption: 'Essentials catalog — Catalog/Smart Fill/Downloads tabs, tier filters.',
    capturedFrom: 'real-app',
    sanitized: true
  }
];
