export interface ExternalLink {
  id: 'github-repo' | 'github-issues' | 'github-releases' | 'linkedin' | 'patreon';
  label: string;
  url: string;
  visible: boolean;
}

export interface SiteConfig {
  name: 'OPL Forge';
  tagline: string;
  license: 'MIT';
  links: ExternalLink[];
  basePath: string;
}

/**
 * Centralized site configuration (constitution Article IX).
 * `license` MUST remain the literal "MIT" — see contracts/content-schemas.md
 * and research.md Decision 9 (the Stitch mockup incorrectly said GPL-3.0).
 */
export const site: SiteConfig = {
  name: 'OPL Forge',
  tagline: 'Forge your PS2 library.',
  license: 'MIT',
  basePath: '/oplforge',
  links: [
    {
      id: 'github-repo',
      label: 'GitHub',
      url: 'https://github.com/theguitarvity/src-app-oplforge',
      visible: true
    },
    {
      id: 'github-issues',
      label: 'Report an Issue',
      url: 'https://github.com/theguitarvity/src-app-oplforge/issues',
      visible: true
    },
    {
      id: 'github-releases',
      label: 'GitHub Releases',
      url: 'https://github.com/theguitarvity/src-app-oplforge/releases',
      visible: true
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/victor-lucas-lopes-silva',
      visible: true
    },
    {
      id: 'patreon',
      label: 'Patreon',
      url: 'https://patreon.com/oplforge',
      visible: true
    }
  ]
};
