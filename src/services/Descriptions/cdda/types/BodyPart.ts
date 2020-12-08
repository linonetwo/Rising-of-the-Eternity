export interface IBodyPart {
  id: string;
  type: 'body_part';
  name: string;
  accusative: Accusative;
  heading: string;
  heading_multiple: string;
  hp_bar_ui_text?: string;
  encumbrance_text: string;
  main_part: string;
  connected_to?: string;
  opposite_part: string;
  hit_size: number;
  hit_size_relative: number[];
  hit_difficulty: number;
  side: string;
  legacy_id: string;
  stylish_bonus?: number;
  hot_morale_mod?: number;
  cold_morale_mod?: number;
  fire_warmth_bonus?: number;
  squeamish_penalty: number;
  base_hp: number;
  drench_capacity: number;
  smash_message: string;
  bionic_slots: number;
  smash_efficiency?: number;
  flags?: string[];
  '//'?: string;
  name_multiple?: string;
  accusative_multiple?: Accusative;
  is_limb?: boolean;
}

interface Accusative {
  ctxt: string;
  str: string;
}
