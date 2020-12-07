import { CDDA_JSON_TYPES } from './names';

export interface IRequirement {
  id: string;
  type: CDDA_JSON_TYPES.requirement;
  components?: (number | string)[][][];
  '//'?: string;
  tools?: (number | string)[][][];
  qualities?: Quality[];
}

interface Quality {
  id: string;
  level: number;
}
