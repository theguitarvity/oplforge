import { describe, expect, it } from 'vitest';
import { getDownloadState } from '../../src/utils/releaseState';
import { releases } from '../../src/content/config/releases';

describe('getDownloadState', () => {
  it('renders the honest no-release-yet state when version is null', () => {
    expect(getDownloadState({ version: null, downloadUrl: null })).toBe('no-release-yet');
  });

  it('never renders a fabricated download state when version is null even if a URL exists', () => {
    expect(getDownloadState({ version: null, downloadUrl: 'https://example.com' })).toBe(
      'no-release-yet'
    );
  });

  it('renders the download state when a real version and URL are present', () => {
    expect(getDownloadState({ version: '1.0.0', downloadUrl: 'https://example.com' })).toBe(
      'download'
    );
  });

  it('all current real release entries render the honest no-release-yet state', () => {
    for (const release of releases) {
      expect(getDownloadState(release)).toBe('no-release-yet');
    }
  });
});
