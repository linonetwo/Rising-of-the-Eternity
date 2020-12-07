import { CDDA_JSON_TYPES } from './names';

export interface IExternalOption {
  type: CDDA_JSON_TYPES.EXTERNAL_OPTION;
  name: string;
  stype: string;
  value: boolean | number;
}
