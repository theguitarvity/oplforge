import { describe, expect, it } from 'vitest';
import { productSurfaces } from '../../src/content/config/productSurfaces';
import { releases } from '../../src/content/config/releases';

describe('Android platform entry (US4 contract invariant)', () => {
  it('has status PLANNED', () => {
    const android = productSurfaces.find((s) => s.id === 'android');
    expect(android?.status).toBe('PLANNED');
  });

  it('has zero screenshots', () => {
    const android = productSurfaces.find((s) => s.id === 'android');
    expect(android?.screenshotIds).toEqual([]);
  });

  it('does not appear in the releases collection', () => {
    expect(releases.some((r) => (r.platform as string) === 'android')).toBe(false);
  });
});

describe('Desktop platforms', () => {
  it('are all AVAILABLE', () => {
    const desktopSurfaces = productSurfaces.filter((s) => s.id !== 'android');
    for (const surface of desktopSurfaces) {
      expect(surface.status).toBe('AVAILABLE');
    }
  });
});
