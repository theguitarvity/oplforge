import apps from '../assets/product/desktop/apps.jpg';
import dashboard from '../assets/product/desktop/dashboard.jpg';
import devices from '../assets/product/desktop/devices.jpg';
import downloadPacmanProgress from '../assets/product/desktop/download-pacman-progress.jpg';
import downloads from '../assets/product/desktop/downloads.jpg';
import essentialsPacman from '../assets/product/desktop/essentials-pacman.jpg';
import fragmentation from '../assets/product/desktop/fragmentation.jpg';
import legalConfirmation from '../assets/product/desktop/legal-confirmation.jpg';
import prepare from '../assets/product/desktop/prepare.jpg';
import ps2Import from '../assets/product/desktop/ps2-import.jpg';

/**
 * Maps a screenshot's `filePath` (from `src/content/config/screenshots.ts`)
 * to its build-time-optimized image asset, so components can resolve real
 * screenshots without hardcoding public URLs.
 */
export const screenshotAssets: Record<string, ImageMetadata> = {
  'apps.jpg': apps,
  'dashboard.jpg': dashboard,
  'devices.jpg': devices,
  'download-pacman-progress.jpg': downloadPacmanProgress,
  'downloads.jpg': downloads,
  'essentials-pacman.jpg': essentialsPacman,
  'fragmentation.jpg': fragmentation,
  'legal-confirmation.jpg': legalConfirmation,
  'prepare.jpg': prepare,
  'ps2-import.jpg': ps2Import
};
