export type PlatformId = 'windows' | 'macos' | 'linux' | 'android';
export type MaturityStatus = 'AVAILABLE' | 'IN_DEVELOPMENT' | 'PLANNED' | 'EXPERIMENTAL';

export interface ProductSurfaceData {
  id: string;
  name: string;
  description: string;
  status: MaturityStatus;
  platform: PlatformId[];
  screenshotIds: string[];
  relatedDocSlugs: string[];
}

const DESKTOP: PlatformId[] = ['windows', 'macos', 'linux'];

/** Real product surface inventory — see data-model.md. */
export const productSurfaces: ProductSurfaceData[] = [
  {
    id: 'home',
    name: 'Home',
    description:
      'Empty-state onboarding (detect, prepare, open local library, explore catalog) or a live workspace with space, game-count, and health metrics once a device is connected.',
    status: 'AVAILABLE',
    platform: DESKTOP,
    screenshotIds: ['dashboard'],
    relatedDocSlugs: ['getting-started']
  },
  {
    id: 'devices',
    name: 'Devices',
    description:
      'Multi-tab device hub: Overview, Manage Devices (prepare, add a local folder, connect), and Diagnostics for connected PS2 storage.',
    status: 'AVAILABLE',
    platform: DESKTOP,
    screenshotIds: ['devices', 'devices-manage'],
    relatedDocSlugs: ['preparing-a-device']
  },
  {
    id: 'library',
    name: 'Library',
    description:
      'Unified PS2, PS1, and Apps library with grid/list views, real box art, status badges, and a local-folder import panel.',
    status: 'AVAILABLE',
    platform: DESKTOP,
    screenshotIds: ['library-grid', 'ps2-import', 'apps'],
    relatedDocSlugs: ['managing-your-library']
  },
  {
    id: 'catalog',
    name: 'Catalog',
    description:
      'Essentials Catalog with tier/media/priority filters and Smart Fill, plus metadata, cover-art search, and a resumable download center.',
    status: 'AVAILABLE',
    platform: DESKTOP,
    screenshotIds: ['catalog'],
    relatedDocSlugs: ['artwork-catalog']
  },
  {
    id: 'tools-diagnostics',
    name: 'Tools → Device Diagnostics',
    description: 'Physical-fragmentation analysis and transactional repair for PS2 storage.',
    status: 'AVAILABLE',
    platform: DESKTOP,
    screenshotIds: ['fragmentation'],
    relatedDocSlugs: ['understanding-fragmentation-repair']
  },
  {
    id: 'tools-components',
    name: 'Tools → OPL Components',
    description: 'Manages OPL build/runtime binaries and the PCSX2 compatibility database.',
    status: 'AVAILABLE',
    platform: DESKTOP,
    screenshotIds: [
      'components',
      'essentials-pacman',
      'download-pacman-progress',
      'legal-confirmation'
    ],
    relatedDocSlugs: ['downloads-components']
  },
  {
    id: 'tools-utilities',
    name: 'Tools → Utilities',
    description: 'Background operations and activity history for downloads and library actions.',
    status: 'AVAILABLE',
    platform: DESKTOP,
    screenshotIds: ['downloads'],
    relatedDocSlugs: ['troubleshooting']
  },
  {
    id: 'settings-general',
    name: 'Settings → General / Download Sources',
    description: 'General preferences and configurable download source management.',
    status: 'AVAILABLE',
    platform: DESKTOP,
    screenshotIds: ['settings-general', 'settings-sources'],
    relatedDocSlugs: ['getting-started']
  },
  {
    id: 'settings-network',
    name: 'Settings → Network',
    description:
      'SMB/FTP share so a PS2 can browse and launch the library over the local network without moving the drive.',
    status: 'AVAILABLE',
    platform: DESKTOP,
    screenshotIds: ['settings-network'],
    relatedDocSlugs: ['network-share-smb-ftp']
  },
  {
    id: 'android',
    name: 'Android application',
    description:
      'A companion app for library management and SMB sharing to a PS2, built on Storage Access Framework. Continuous debug-signed APKs are published after every successful build.',
    status: 'AVAILABLE',
    platform: ['android'],
    screenshotIds: [
      'mobile-home',
      'mobile-library',
      'mobile-diagnostics',
      'mobile-sharing',
      'mobile-essentials'
    ],
    relatedDocSlugs: []
  }
];
