import { describe, expect, it } from 'vitest';
import { isConceptScreenshot, hasDocumentedGap } from '../../src/utils/screenshotDisplay';
import { screenshots } from '../../src/content/config/screenshots';
import { productSurfaces } from '../../src/content/config/productSurfaces';

describe('isConceptScreenshot', () => {
  it('flags concept-sourced screenshots for the Concept badge', () => {
    expect(isConceptScreenshot({ capturedFrom: 'concept' })).toBe(true);
  });

  it('does not flag real-app screenshots', () => {
    expect(isConceptScreenshot({ capturedFrom: 'real-app' })).toBe(false);
  });

  it('none of the current real screenshots are flagged as concept', () => {
    for (const shot of screenshots) {
      expect(isConceptScreenshot(shot)).toBe(false);
    }
  });
});

describe('hasDocumentedGap', () => {
  it('is true for a surface with zero screenshots (never a fabricated image)', () => {
    expect(hasDocumentedGap({ screenshotIds: [] })).toBe(true);
  });

  it('is false for a surface with at least one screenshot', () => {
    expect(hasDocumentedGap({ screenshotIds: ['dashboard'] })).toBe(false);
  });

  it('every current product surface has at least one real screenshot', () => {
    for (const surface of productSurfaces) {
      expect(hasDocumentedGap(surface)).toBe(false);
    }
  });
});
