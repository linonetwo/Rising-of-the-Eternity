import { CDDA_JSON_TYPES } from './names';

export interface IStartLocation {
  type: CDDA_JSON_TYPES.start_location;
  id: string;
  name: string;
  terrain?: (Terrain | string)[];
  'copy-from'?: string;
  extend?: Extend;
  flags?: string[];
}

interface Extend {
  flags: string[];
}

interface Terrain {
  om_terrain: string;
  om_terrain_match_type: string;
}
