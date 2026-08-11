import { site } from '../content/config/site';

/**
 * Builds a base-path-aware internal URL. Never hardcode absolute paths in
 * components — always go through this utility so the site keeps working
 * under any configured GitHub Pages base path (contracts/routes.md).
 */
export function url(path: string): string {
  const base = site.basePath.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  if (normalizedPath === '/') {
    return `${base}/`;
  }
  const withTrailingSlash = normalizedPath.endsWith('/')
    ? normalizedPath
    : `${normalizedPath}/`;
  return `${base}${withTrailingSlash}`;
}

/**
 * Builds a base-path-aware URL for a static file in `public/` (favicons,
 * OG images, etc). Unlike `url()`, this never appends a trailing slash,
 * since that would break a direct file reference.
 */
export function asset(path: string): string {
  const base = site.basePath.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
