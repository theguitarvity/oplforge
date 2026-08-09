import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { productSurfaces } from './content/config/productSurfaces';
import { screenshots } from './content/config/screenshots';
import { releases } from './content/config/releases';
import { roadmap } from './content/config/roadmap';

const platformId = z.enum(['windows', 'macos', 'linux', 'android']);
const maturityStatus = z.enum(['AVAILABLE', 'IN_DEVELOPMENT', 'PLANNED', 'EXPERIMENTAL']);

const productSurfacesCollection = defineCollection({
  loader: () => productSurfaces,
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    status: maturityStatus,
    platform: z.array(platformId),
    screenshotIds: z.array(z.string()),
    relatedDocSlugs: z.array(z.string())
  })
});

const screenshotsCollection = defineCollection({
  loader: () => screenshots,
  schema: z.object({
    id: z.string(),
    productSurfaceId: z.string(),
    platform: platformId,
    filePath: z.string(),
    altText: z.string().min(1),
    caption: z.string(),
    capturedFrom: z.enum(['real-app', 'concept']),
    sanitized: z.boolean()
  })
});

const releasesCollection = defineCollection({
  loader: () => releases,
  schema: z.object({
    id: z.string(),
    platform: z.enum(['windows', 'macos', 'linux']),
    architecture: z.string().nullable(),
    format: z.string(),
    version: z.string().nullable(),
    downloadUrl: z.string().nullable(),
    checksum: z.string().nullable()
  })
});

const roadmapCollection = defineCollection({
  loader: () => roadmap,
  schema: z.object({
    id: z.string(),
    title: z.string(),
    status: z.enum(['IN_DEVELOPMENT', 'PLANNED', 'EXPERIMENTAL']),
    description: z.string(),
    targetSurfaceIds: z.array(z.string())
  })
});

const docsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    relatedProductSurfaceIds: z.array(z.string()).default([])
  })
});

export const collections = {
  productSurfaces: productSurfacesCollection,
  screenshots: screenshotsCollection,
  releases: releasesCollection,
  roadmap: roadmapCollection,
  docs: docsCollection
};
