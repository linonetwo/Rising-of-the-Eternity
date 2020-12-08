export interface IGunmod {
  id: string;
  type: 'GUNMOD';
  name: Name | Name2 | Name3 | string;
  description?: string;
  weight?: string;
  volume?: string;
  price?: number;
  price_postapoc?: number;
  install_time?: string;
  to_hit?: number;
  material?: string[];
  symbol?: string;
  color?: string;
  location?: string;
  mod_targets?: string[];
  gun_data?: Gundata;
  flags?: string[];
  pocket_data?: Pocketdatum[];
  bashing?: number;
  consume_chance?: number;
  consume_divisor?: number;
  damage_modifier?: Rangeddamage;
  dispersion_modifier?: number;
  sight_dispersion?: number;
  aim_speed?: number;
  handling_modifier?: number;
  loudness_modifier?: number;
  '//'?: string;
  integral_volume?: string;
  min_skills?: Array<Array<number | string>>;
  use_action?: Useaction;
  'copy-from'?: string;
  acceptable_ammo?: string[];
  magazine_adaptor?: Array<Array<string[] | string>>;
  range_modifier?: number;
  ammo_effects?: string[];
  mode_modifier?: Array<Array<Array<string[] | number | string>>>;
  ammo_modifier?: string[] | string;
  ups_charges_multiplier?: number;
  integral_weight?: string;
  weight_multiplier?: number;
  '//durability_modifier'?: number;
  add_mod?: Array<Array<number | string>>;
  proportional?: Proportional;
  delete?: Delete;
  extend?: Delete;
  longest_side?: string;
  cutting?: number;
  qualities?: Array<Array<number | string>>;
  faults?: string[];
}

interface Delete {
  flags: string[];
}

interface Proportional {
  loudness_modifier?: number;
  sight_dispersion?: number;
}

interface Useaction {
  menu_text: string;
  type: string;
  target: string;
  msg: string;
}

interface Pocketdatum {
  pocket_type: string;
  ammo_restriction?: Ammorestriction;
  rigid?: boolean;
  holster?: boolean;
  max_contains_volume?: string;
  max_contains_weight?: string;
  item_restriction?: string[];
}

interface Ammorestriction {
  shot?: number;
  ammo_grenade?: number;
  ammo_shot?: number;
  signal_flare?: number;
  bolt?: number;
  shotpaper?: number;
  '40x46mm'?: number;
}

interface Gundata {
  ammo?: string;
  skill: string;
  dispersion?: number;
  durability: number;
  clip_size?: number;
  range?: number;
  ranged_damage?: Rangeddamage;
  ammo_effects?: string[];
  reload?: number;
  min_cycle_recoil?: number;
  blackpowder_tolerance?: number;
}

interface Rangeddamage {
  damage_type: string;
  amount: number;
}

interface Name3 {
  str: string;
  str_pl: string;
}

interface Name2 {
  str: string;
}

interface Name {
  str_sp: string;
}
