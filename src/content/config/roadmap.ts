export interface RoadmapItemData {
  id: string;
  title: string;
  status: 'IN_DEVELOPMENT' | 'PLANNED' | 'EXPERIMENTAL';
  description: string;
  targetSurfaceIds: string[];
}

/** Real roadmap items only — see research.md Decision 2. */
export const roadmap: RoadmapItemData[] = [];
