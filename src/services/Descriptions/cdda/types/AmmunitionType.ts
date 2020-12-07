import { CDDA_JSON_TYPES } from './names';

export interface IAmmunitionType {
  type: CDDA_JSON_TYPES.ammunition_type;
  id: string;
  name: string;
  default: string;
  '//'?: string;
}
