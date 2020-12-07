import { CDDA_JSON_TYPES } from './names';

export interface IClothingMod {
  type: CDDA_JSON_TYPES.clothing_mod;
  id: string;
  flag: string;
  item: string;
  implement_prompt: string;
  destroy_prompt: string;
  mod_value: Modvalue[];
  restricted?: boolean;
}

interface Modvalue {
  type: string;
  value: number;
  proportion?: string[];
  round_up?: boolean;
}
