import { CDDA_JSON_TYPES } from './names';

export interface IAnatomy {
  id: string;
  type: CDDA_JSON_TYPES.anatomy;
  parts: string[];
}
