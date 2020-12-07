import { CDDA_JSON_TYPES } from './names';

export interface IMoraleType {
  id: string;
  type: CDDA_JSON_TYPES.morale_type;
  text: string;
}
