export interface ReleaseArtifactData {
  id: string;
  platform: 'windows' | 'macos' | 'linux';
  architecture: string | null;
  format: string;
  version: string | null;
  downloadUrl: string | null;
  checksum: string | null;
}

/**
 * Real current release state: no public installer is published yet (the
 * source repository's README points users to GitHub Releases or building
 * from source) — see research.md Decision 7. `version`/`downloadUrl` are
 * intentionally `null`, never a fabricated value.
 */
export const releases: ReleaseArtifactData[] = [
  {
    id: 'windows-x64',
    platform: 'windows',
    architecture: 'x64',
    format: '.exe',
    version: null,
    downloadUrl: null,
    checksum: null
  },
  {
    id: 'windows-arm64',
    platform: 'windows',
    architecture: 'arm64',
    format: '.exe',
    version: null,
    downloadUrl: null,
    checksum: null
  },
  {
    id: 'macos-intel',
    platform: 'macos',
    architecture: 'x64',
    format: '.dmg',
    version: null,
    downloadUrl: null,
    checksum: null
  },
  {
    id: 'macos-apple-silicon',
    platform: 'macos',
    architecture: 'arm64',
    format: '.dmg',
    version: null,
    downloadUrl: null,
    checksum: null
  },
  {
    id: 'linux-appimage',
    platform: 'linux',
    architecture: 'x64',
    format: '.AppImage',
    version: null,
    downloadUrl: null,
    checksum: null
  },
  {
    id: 'linux-deb',
    platform: 'linux',
    architecture: 'x64',
    format: '.deb',
    version: null,
    downloadUrl: null,
    checksum: null
  }
];
