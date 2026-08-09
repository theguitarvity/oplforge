import type { ReleaseArtifactData } from '../content/config/releases';

export type DownloadState = 'download' | 'no-release-yet';

/** Never fabricate a version: a null version always renders the honest fallback state. */
export function getDownloadState(release: Pick<ReleaseArtifactData, 'version' | 'downloadUrl'>): DownloadState {
  return release.version !== null && release.downloadUrl !== null ? 'download' : 'no-release-yet';
}
