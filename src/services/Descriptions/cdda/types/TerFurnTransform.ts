import { CDDA_JSON_TYPES } from './names';

export interface ITerFurnTransform {
  type: CDDA_JSON_TYPES.ter_furn_transform;
  id: string;
  terrain?: Terrain[];
  fail_message?: string;
  furniture?: Furniture[];
  '//'?: string;
}

interface Furniture {
  result: string;
  valid_flags?: string[];
  message?: string;
  valid_furniture?: string[];
}

interface Terrain {
  result: (number | string)[][] | string | string;
  valid_flags?: string[];
  valid_terrain?: string[];
  message?: string;
  message_good?: boolean;
}
