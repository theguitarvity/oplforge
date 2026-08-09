import type { ProductScreenshotData } from '../content/config/screenshots';
import type { ProductSurfaceData } from '../content/config/productSurfaces';

/** Whether a screenshot should render the visible "Concept" badge. */
export function isConceptScreenshot(shot: Pick<ProductScreenshotData, 'capturedFrom'>): boolean {
  return shot.capturedFrom === 'concept';
}

/** Whether a product surface has a documented capture gap (no screenshots, never fabricated). */
export function hasDocumentedGap(surface: Pick<ProductSurfaceData, 'screenshotIds'>): boolean {
  return surface.screenshotIds.length === 0;
}
