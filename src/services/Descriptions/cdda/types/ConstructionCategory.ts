import { CDDA_JSON_TYPES } from './names';

export interface IConstructionCategory {
  '//'?: string;
  type: CDDA_JSON_TYPES.construction_category;
  id: string;
  name: string;
}
