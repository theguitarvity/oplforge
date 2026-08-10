export interface ReleaseArtifactData {
  id: string;
  platform: 'windows' | 'macos' | 'linux' | 'android';
  architecture: string | null;
  format: string;
  version: string | null;
  downloadUrl: string | null;
  checksum: string | null;
}

const continuousReleaseBase =
  'https://github.com/theguitarvity/src-app-oplforge/releases/download/continuous';

export const releases: ReleaseArtifactData[] = [
  {
    id: 'windows-x64',
    platform: 'windows',
    architecture: 'x64',
    format: '.exe',
    version: 'Continuous',
    downloadUrl: `${continuousReleaseBase}/OPL-Forge-continuous-x64-Setup.exe`,
    checksum: null,
  },
  {
    id: 'windows-arm64',
    platform: 'windows',
    architecture: 'arm64',
    format: '.exe',
    version: null,
    downloadUrl: null,
    checksum: null,
  },
  {
    id: 'macos-intel',
    platform: 'macos',
    architecture: 'x64',
    format: '.dmg',
    version: 'Continuous',
    downloadUrl: `${continuousReleaseBase}/OPL-Forge-continuous-mac-x64.dmg`,
    checksum: null,
  },
  {
    id: 'macos-apple-silicon',
    platform: 'macos',
    architecture: 'arm64',
    format: '.dmg',
    version: 'Continuous',
    downloadUrl: `${continuousReleaseBase}/OPL-Forge-continuous-mac-arm64.dmg`,
    checksum: null,
  },
  {
    id: 'linux-appimage',
    platform: 'linux',
    architecture: 'x64',
    format: '.AppImage',
    version: 'Continuous',
    downloadUrl: `${continuousReleaseBase}/OPL-Forge-continuous-linux-x86_64.AppImage`,
    checksum: null,
  },
  {
    id: 'linux-deb',
    platform: 'linux',
    architecture: 'x64',
    format: '.deb',
    version: 'Continuous',
    downloadUrl: `${continuousReleaseBase}/OPL-Forge-continuous-linux-amd64.deb`,
    checksum: null,
  },
  {
    id: 'android',
    platform: 'android',
    architecture: null,
    format: '.apk',
    version: 'Continuous',
    downloadUrl: `${continuousReleaseBase}/OPL-Forge-Mobile-continuous.apk`,
    checksum: null,
  },
];
