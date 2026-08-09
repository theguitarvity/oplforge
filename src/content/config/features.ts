export interface FeatureData {
  id: string;
  title: string;
  summary: string;
  icon: string;
  productSurfaceIds: string[];
  status: 'AVAILABLE' | 'IN_DEVELOPMENT' | 'PLANNED' | 'EXPERIMENTAL';
}

/** Feature/Module grid data — coarser-grained than Product Surface (data-model.md). */
export const features: FeatureData[] = [
  {
    id: 'library-management',
    title: 'Library Management',
    summary: 'A unified PS2, PS1, and Apps library with status badges and a contextual detail drawer.',
    icon: 'library',
    productSurfaceIds: ['library'],
    status: 'AVAILABLE'
  },
  {
    id: 'smart-installation',
    title: 'Smart Installation',
    summary: 'Game-ID detection and storage-aware planning for PS2/PS1 imports.',
    icon: 'download',
    productSurfaceIds: ['library', 'devices'],
    status: 'AVAILABLE'
  },
  {
    id: 'storage-diagnostics',
    title: 'Storage Diagnostics',
    summary: 'Physical-fragmentation analysis with transactional, rollback-safe repair.',
    icon: 'activity',
    productSurfaceIds: ['tools-diagnostics'],
    status: 'AVAILABLE'
  },
  {
    id: 'artwork-sync',
    title: 'Artwork Sync',
    summary: 'Search remote metadata and cover art, then sync it into your library.',
    icon: 'image',
    productSurfaceIds: ['catalog'],
    status: 'AVAILABLE'
  },
  {
    id: 'game-catalog',
    title: 'Game Catalog',
    summary: 'Manage OPL runtime binaries and the PCSX2 compatibility database.',
    icon: 'package',
    productSurfaceIds: ['tools-components'],
    status: 'AVAILABLE'
  },
  {
    id: 'network-share',
    title: 'PS2 Network Share',
    summary: 'Browse and launch your library over SMB/FTP without moving the drive.',
    icon: 'network',
    productSurfaceIds: ['settings-network'],
    status: 'AVAILABLE'
  },
  {
    id: 'background-operations',
    title: 'Background Operations',
    summary: 'A resilient download queue with full activity history.',
    icon: 'clock',
    productSurfaceIds: ['tools-utilities'],
    status: 'AVAILABLE'
  }
];
