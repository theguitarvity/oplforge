import { describe, expect, it } from 'vitest';
import { productSurfaces } from '../../src/content/config/productSurfaces';
import { releases } from '../../src/content/config/releases';

describe('Android platform entry (US4 contract invariant)', () => {
  it('has status AVAILABLE', () => {
    const android = productSurfaces.find((s) => s.id === 'android');
    expect(android?.status).toBe('AVAILABLE');
  });

  it('appears in the releases collection with a working download', () => {
    const androidRelease = releases.find((r) => (r.platform as string) === 'android');
    expect(androidRelease?.version).not.toBeNull();
    expect(androidRelease?.downloadUrl).not.toBeNull();
  });
});

describe('All platforms', () => {
  it('are all AVAILABLE', () => {
    for (const surface of productSurfaces) {
      expect(surface.status).toBe('AVAILABLE');
    }
  });
});
