import { CDDA_JSON_TYPES } from './names';

export interface IGate {
  type: CDDA_JSON_TYPES.gate;
  id: string;
  alias?: string[];
  door: string;
  floor: string;
  walls: string[] | string;
  messages: Messages;
  moves: number;
  bashing_damage: number;
  '//'?: string;
}

interface Messages {
  pull: string;
  open: string;
  close: string;
  fail: string;
}
