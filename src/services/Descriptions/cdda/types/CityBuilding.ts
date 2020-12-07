import { CDDA_JSON_TYPES } from './names';

export interface ICityBuilding {
  type: CDDA_JSON_TYPES.city_building;
  id: string;
  overmaps: Overmap[];
  locations: string[];
  flags?: string[];
  '//'?: string;
}

interface Overmap {
  point: number[];
  overmap: string;
  locations?: string[];
}
