export interface RoadmapItemData {
  id: string;
  title: string;
  status: 'IN_DEVELOPMENT' | 'PLANNED' | 'EXPERIMENTAL';
  description: string;
  targetSurfaceIds: string[];
}

/** Real roadmap items only — see research.md Decision 2. */
export const roadmap: RoadmapItemData[] = [
  {
    id: 'android-app',
    title: 'Android application',
    status: 'PLANNED',
    description:
      'A future Android companion app is in the earliest planning stage — a scoping document exists, but no screens, UI, or builds have been created yet. There is currently no mobile or web version of OPL Forge.',
    targetSurfaceIds: ['android']
  }
];
