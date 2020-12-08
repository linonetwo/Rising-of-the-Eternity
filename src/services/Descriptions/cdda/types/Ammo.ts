export interface IAmmo {
  type: 'AMMO';
  id?: string;
  price?: number;
  name: Name | Name2 | Name3 | string;
  symbol?: string;
  color?: string;
  description?: string;
  material?: string[] | string;
  volume?: string;
  weight?: string;
  ammo_type?: string;
  damage?: Damage;
  range?: number;
  stack_size?: number;
  count?: number;
  effects?: string[];
  bashing?: number;
  category?: string;
  flags?: string[];
  dispersion?: number;
  loudness?: number;
  to_hit?: number;
  qualities?: Array<Array<number | string>>;
  looks_like?: string;
  '//'?: string;
  price_postapoc?: number;
  cutting?: number;
  critical_multiplier?: number;
  casing?: string;
  recoil?: number;
  phase?: string;
  container?: string;
  'copy-from'?: string;
  abstract?: string;
  extend?: Extend;
  drop?: string;
  relative?: Relative;
  proportional?: Proportional;
  delete?: Delete;
  '//2'?: string;
  sealed?: boolean;
  use_action?: string[];
  '//freezing_point'?: number;
  drop_action?: Dropaction;
  longest_side?: string;
  show_stats?: boolean;
  seed_data?: Seeddata;
  explode_in_fire?: boolean;
  explosion?: Explosion;
}

interface Explosion {
  power: number;
  shrapnel: number;
}

interface Seeddata {
  fruit: string;
  '//': string;
  plant_name: string;
  grow: string;
}

interface Dropaction {
  type: string;
  emits: string[];
  scale_qty: boolean;
}

interface Delete {
  effects?: string[];
  flags?: string[];
  casing?: string;
}

interface Proportional {
  price?: number;
  damage?: Damage3;
  dispersion?: number;
  recoil?: number;
  price_postapoc?: number;
  count?: number;
  loudness?: number;
  range?: number;
  weight?: number;
  volume?: number;
}

interface Damage3 {
  damage_type: string;
  amount: number;
  armor_penetration?: number;
}

interface Relative {
  damage?: Damage2;
  range?: number;
  pierce?: number;
  price?: number;
  dispersion?: number;
  loudness?: number;
  recoil?: number;
}

interface Damage2 {
  damage_type: string;
  amount?: number;
  armor_penetration?: number;
}

interface Extend {
  effects: string[];
}

interface Damage {
  damage_type: string;
  amount?: number;
  armor_penetration?: number;
  constant_damage_multiplier?: number;
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
