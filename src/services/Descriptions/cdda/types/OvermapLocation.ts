import { CDDA_JSON_TYPES } from './names';

export interface IOvermapLocation {
  type: CDDA_JSON_TYPES.overmap_location;
  id: string;
  terrains?: string[];
  flags?: string[];
}
