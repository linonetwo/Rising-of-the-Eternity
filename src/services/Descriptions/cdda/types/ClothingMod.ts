export interface IClothingMod {
  type: 'clothing_mod';
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
