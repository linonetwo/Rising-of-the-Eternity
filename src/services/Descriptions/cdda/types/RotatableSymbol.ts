import { CDDA_JSON_TYPES } from './names';

export interface IRotatableSymbol {
  type: CDDA_JSON_TYPES.rotatable_symbol;
  tuple: string[];
}
