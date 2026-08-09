import { describe, expect, it } from 'vitest';
import { productSurfaces } from '../../src/content/config/productSurfaces';
import { screenshots } from '../../src/content/config/screenshots';
import { releases } from '../../src/content/config/releases';
import { roadmap } from '../../src/content/config/roadmap';
import { site } from '../../src/content/config/site';

describe('productSurfaces', () => {
  it('has unique ids', () => {
    const ids = productSurfaces.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('PLANNED surfaces have zero screenshots', () => {
    for (const surface of productSurfaces) {
      if (surface.status === 'PLANNED') {
        expect(surface.screenshotIds).toEqual([]);
      }
    }
  });

  it('every screenshotId resolves to an existing screenshot', () => {
    const screenshotIds = new Set(screenshots.map((s) => s.id));
    for (const surface of productSurfaces) {
      for (const id of surface.screenshotIds) {
        expect(screenshotIds.has(id)).toBe(true);
      }
    }
  });
});

describe('screenshots', () => {
  it('are all sanitized', () => {
    for (const shot of screenshots) {
      expect(shot.sanitized).toBe(true);
    }
  });

  it('have non-empty alt text', () => {
    for (const shot of screenshots) {
      expect(shot.altText.length).toBeGreaterThan(0);
    }
  });

  it('every productSurfaceId resolves to an existing surface', () => {
    const surfaceIds = new Set(productSurfaces.map((s) => s.id));
    for (const shot of screenshots) {
      expect(surfaceIds.has(shot.productSurfaceId)).toBe(true);
    }
  });
});

describe('releases', () => {
  it('never pairs a null version with a non-null downloadUrl', () => {
    for (const release of releases) {
      if (release.version === null) {
        expect(release.downloadUrl).toBeNull();
      }
    }
  });

  it('does not include android while it is PLANNED', () => {
    const androidSurface = productSurfaces.find((s) => s.id === 'android');
    expect(androidSurface?.status).toBe('PLANNED');
    expect(releases.some((r) => (r.platform as string) === 'android')).toBe(false);
  });
});

describe('roadmap', () => {
  it('android roadmap item is PLANNED', () => {
    const android = roadmap.find((r) => r.id === 'android-app');
    expect(android?.status).toBe('PLANNED');
  });
});

describe('site config', () => {
  it('license is exactly MIT', () => {
    expect(site.license).toBe('MIT');
  });
});
