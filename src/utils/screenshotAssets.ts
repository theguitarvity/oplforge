import apps from '../assets/product/desktop/apps.jpg';
import dashboard from '../assets/product/desktop/dashboard.jpg';
import devices from '../assets/product/desktop/devices.jpg';
import devicesManage from '../assets/product/desktop/devices-manage.jpg';
import downloadPacmanProgress from '../assets/product/desktop/download-pacman-progress.jpg';
import downloads from '../assets/product/desktop/downloads.jpg';
import essentialsPacman from '../assets/product/desktop/essentials-pacman.jpg';
import fragmentation from '../assets/product/desktop/fragmentation.jpg';
import legalConfirmation from '../assets/product/desktop/legal-confirmation.jpg';
import ps2Import from '../assets/product/desktop/ps2-import.jpg';
import libraryGrid from '../assets/product/desktop/library-grid.jpg';
import catalog from '../assets/product/desktop/catalog.jpg';
import components from '../assets/product/desktop/components.jpg';
import settingsGeneral from '../assets/product/desktop/settings-general.jpg';
import settingsSources from '../assets/product/desktop/settings-sources.jpg';
import settingsNetwork from '../assets/product/desktop/settings-network.jpg';
import mobileHome from '../assets/product/mobile/mobile-home.png';
import mobileLibrary from '../assets/product/mobile/mobile-library.png';
import mobileDiagnostics from '../assets/product/mobile/mobile-diagnostics.png';
import mobileSharing from '../assets/product/mobile/mobile-sharing.png';
import mobileEssentials from '../assets/product/mobile/mobile-essentials.png';

/**
 * Maps a screenshot's `filePath` (from `src/content/config/screenshots.ts`)
 * to its build-time-optimized image asset, so components can resolve real
 * screenshots without hardcoding public URLs.
 */
export const screenshotAssets: Record<string, ImageMetadata> = {
  'apps.jpg': apps,
  'dashboard.jpg': dashboard,
  'devices.jpg': devices,
  'devices-manage.jpg': devicesManage,
  'download-pacman-progress.jpg': downloadPacmanProgress,
  'downloads.jpg': downloads,
  'essentials-pacman.jpg': essentialsPacman,
  'fragmentation.jpg': fragmentation,
  'legal-confirmation.jpg': legalConfirmation,
  'ps2-import.jpg': ps2Import,
  'library-grid.jpg': libraryGrid,
  'catalog.jpg': catalog,
  'components.jpg': components,
  'settings-general.jpg': settingsGeneral,
  'settings-sources.jpg': settingsSources,
  'settings-network.jpg': settingsNetwork,
  'mobile-home.png': mobileHome,
  'mobile-library.png': mobileLibrary,
  'mobile-diagnostics.png': mobileDiagnostics,
  'mobile-sharing.png': mobileSharing,
  'mobile-essentials.png': mobileEssentials
};
