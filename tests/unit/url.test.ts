import { describe, expect, it } from 'vitest';
import { url } from '../../src/utils/url';

describe('url()', () => {
  it('prefixes the base path', () => {
    expect(url('/features')).toBe('/oplforge/features/');
  });

  it('handles the root path', () => {
    expect(url('/')).toBe('/oplforge/');
  });

  it('adds a leading slash if missing', () => {
    expect(url('downloads')).toBe('/oplforge/downloads/');
  });

  it('normalizes a trailing slash without duplicating it', () => {
    expect(url('/docs/getting-started/')).toBe('/oplforge/docs/getting-started/');
  });
});
