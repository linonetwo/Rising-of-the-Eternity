import { CDDA_JSON_TYPES } from './names';

export interface IObsoleteTerrain {
  type: CDDA_JSON_TYPES.obsolete_terrain;
  terrains: string[];
}
