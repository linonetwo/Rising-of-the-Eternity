import { CDDA_JSON_TYPES } from './names';

export interface IOvermapConnection {
  type: CDDA_JSON_TYPES.overmap_connection;
  id: string;
  subtypes: Subtype[];
}

interface Subtype {
  terrain: string;
  locations: (string | string)[];
  basic_cost?: number;
  flags?: string[];
}
