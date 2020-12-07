import { CDDA_JSON_TYPES } from './names';

export interface IOvermapLandUseCode {
  '//'?: string;
  type: CDDA_JSON_TYPES.overmap_land_use_code;
  id: string;
  sym: string;
  color: string;
  land_use_code?: number;
  name?: string;
  detailed_definition?: string;
}
