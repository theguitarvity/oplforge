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
    caption: 'Devices hub: Overview, Games, OPL Files, and Diagnostics tabs.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'prepare',
    productSurfaceId: 'devices',
    platform: 'windows',
    filePath: 'prepare.jpg',
    altText: 'Device preparation screen creating the required PS2 folder structure',
    caption: 'Preparing a device: creates the DVD/CD/PS1/APPS/ART/CFG/VMC folder structure.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'ps2-import',
    productSurfaceId: 'library',
    platform: 'windows',
    filePath: 'ps2-import.jpg',
    altText: 'PS2 game import screen with Game-ID detection and storage planning',
    caption: 'PS2/PS1 import with Game-ID detection and storage planning.',
    capturedFrom: 'real-app',
    sanitized: true
  },
  {
    id: 'fragmentation',
    productSurfaceId: 'tools-diagnostics',
    platform: 'windows',
    filePath: 'fragmentation.jpg',
    altText: 'Fragmentation diagnostics screen showing per-game fragmentation status',
    caption: 'Fragmentation diagnostics with per-game physical-fragmentation status.',
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
    altText: 'Downloads and activity history list showing completed and queued operations',
    caption: 'Downloads and activity history for background operations.',
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
  }
];
