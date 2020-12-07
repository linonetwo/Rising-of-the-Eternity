import { CDDA_JSON_TYPES } from './names';

export interface IConstructionGroup {
  type: CDDA_JSON_TYPES.construction_group;
  id: string;
  name: string;
}
