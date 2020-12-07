import { CDDA_JSON_TYPES } from './names';

export interface IUncraft {
  result?: string;
  type: CDDA_JSON_TYPES.uncraft;
  activity_level?: string;
  skill_used?: string;
  difficulty?: number;
  time?: number | string;
  qualities?: Quality[];
  components?: (number | string)[][][];
  using?: (number | string)[][];
  '//'?: string;
  skills_required?: (number | number | string | string)[][];
  tools?: (number | string)[][][];
  flags?: string[];
  abstract?: string;
  'copy-from'?: string;
  decomp_learn?: (number | string)[][] | number;
}

interface Quality {
  id: string;
  level: number;
  amount?: number;
}
