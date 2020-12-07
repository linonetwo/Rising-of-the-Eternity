import { CDDA_JSON_TYPES } from './names';

export interface IColordef {
  type: CDDA_JSON_TYPES.colordef;
  BLACK: number[];
  RED: number[];
  GREEN: number[];
  BROWN: number[];
  BLUE: number[];
  MAGENTA: number[];
  CYAN: number[];
  GRAY: number[];
  DGRAY: number[];
  LRED: number[];
  LGREEN: number[];
  YELLOW: number[];
  LBLUE: number[];
  LMAGENTA: number[];
  LCYAN: number[];
  WHITE: number[];
}
