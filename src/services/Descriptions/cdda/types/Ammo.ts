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
  phase?: string;
  flags?: string[];
  looks_like?: string;
  dispersion?: number;
  loudness?: number;
  critical_multiplier?: number;
  container?: string;
  to_hit?: number;
  '//'?: string;
  qualities?: Array<Array<number | string>>;
  recoil?: number;
  'copy-from'?: string;
  relative?: Relative;
  price_postapoc?: number;
  casing?: string;
  drop?: string;
  '//2'?: string;
  sealed?: boolean;
  use_action?: string[];
  '//freezing_point'?: number;
  drop_action?: Dropaction;
  extend?: Extend;
  cutting?: number;
  proportional?: Proportional;
  longest_side?: string;
  show_stats?: boolean;
  seed_data?: Seeddata;
  delete?: Delete;
  abstract?: string;
  explode_in_fire?: boolean;
  explosion?: Explosion;
}

interface Explosion {
  power: number;
  shrapnel: number;
}

interface Delete {
  effects?: string[];
  flags?: string[];
  casing?: string;
}

interface Seeddata {
  fruit: string;
  '//': string;
  plant_name: string;
  grow: string;
}

interface Proportional {
  weight?: number;
  volume?: number;
  price?: number;
  damage?: Damage3;
  recoil?: number;
  dispersion?: number;
  loudness?: number;
  range?: number;
}

interface Damage3 {
  damage_type: string;
  amount: number;
  armor_penetration?: number;
}

interface Extend {
  effects: string[];
}

interface Dropaction {
  type: string;
  emits: string[];
  scale_qty: boolean;
}

interface Relative {
  price?: number;
  damage?: Damage2;
  dispersion?: number;
  loudness?: number;
  range?: number;
  recoil?: number;
}

interface Damage2 {
  damage_type: string;
  amount?: number;
  armor_penetration?: number;
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
