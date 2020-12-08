export interface IGun {
  id?: string;
  type: 'GUN';
  'copy-from'?: string;
  name: Name | Name2 | Name3 | Name4 | string;
  description?: string;
  flags?: string[];
  modes?: Array<Array<Array<string[] | number | number | string | string>>>;
  ammo_effects?: string[] | string;
  skill?: string;
  durability?: number;
  range?: number;
  dispersion?: number;
  ranged_damage?: Rangeddamage[] | Rangeddamage2[] | Rangeddamage | Rangeddamage4;
  looks_like?: string;
  reload_noise_volume?: number;
  symbol?: string;
  color?: string;
  price?: number;
  '//'?: string;
  material?: string[] | string;
  ammo?: string[] | string;
  weight?: string;
  volume?: string;
  price_postapoc?: number;
  bashing?: number;
  to_hit?: number;
  blackpowder_tolerance?: number;
  clip_size?: number;
  loudness?: number;
  barrel_volume?: string;
  built_in_mods?: string[];
  faults?: string[];
  valid_mod_locations?: Array<Array<number | string>>;
  pocket_data?: Pocketdatum[];
  reload?: number;
  ups_charges?: number;
  min_strength?: number;
  use_action?: Useaction;
  min_cycle_recoil?: number;
  armor_data?: Armordata;
  longest_side?: string;
  cutting?: number;
  techniques?: string[];
  qualities?: Array<Array<number | string>>;
  reload_noise?: string;
  proportional?: Proportional;
  relative?: Relative;
  extend?: Extend;
  default_mods?: string[];
  recoil?: number;
  abstract?: string;
  '//2'?: string;
  ascii_picture?: string;
  sight_dispersion?: number;
  magazines?: Array<Array<string[] | string>>;
  delete?: Extend;
  burst?: number;
}

interface Extend {
  flags: string[];
}

interface Relative {
  to_hit?: number;
  reload?: number;
  durability?: number;
  weight?: string;
  volume?: string;
  range?: number;
  ranged_damage?: Rangeddamage;
  price?: number;
  dispersion?: number;
  barrel_volume?: string;
}

interface Proportional {
  price?: number;
  price_postaopoc?: number;
  bashing?: number;
  weight?: number;
  dispersion?: number;
  reload?: number;
  volume?: number;
}

interface Armordata {
  covers: string[];
  coverage: number;
  material_thickness: number;
  encumbrance: number;
  sided?: boolean;
}

interface Useaction {
  menu_text: string;
  type: string;
  target: string;
  qualities_needed?: Qualitiesneeded;
  msg: string;
}

interface Qualitiesneeded {
  SCREW_FINE: number;
}

interface Pocketdatum {
  pocket_type: string;
  ammo_restriction?: Ammorestriction;
  holster?: boolean;
  max_contains_volume?: string;
  max_contains_weight?: string;
  item_restriction?: string[];
  allowed_speedloaders?: string[];
  rigid?: boolean;
  magazine_well?: string;
  watertight?: boolean;
}

interface Ammorestriction {
  3006?: number;
  223?: number;
  fusion?: number;
  arrow?: number;
  arrow_orichalcum?: number;
  38?: number;
  380?: number;
  '9mm'?: number;
  '357mag'?: number;
  shot?: number;
  308?: number;
  ammo_black_powder?: number;
  ammo_grenade?: number;
  ammo_pistol?: number;
  ammo_pistol_magnum?: number;
  ammo_pistol_tiny?: number;
  ammo_rifle?: number;
  ammo_rifle_huge?: number;
  ammo_rocket?: number;
  ammo_shot?: number;
  pellets?: number;
  plasma?: number;
  nail?: number;
  pulsesb?: number;
  22?: number;
  762?: number;
  acidic_bore?: number;
  '40x46mm'?: number;
  '120mm'?: number;
  '5x50'?: number;
  '8x40mm'?: number;
  40?: number;
  metal_rail?: number;
  flammable?: number;
  pebble?: number;
  bolt?: number;
  shotcanister?: number;
  mininuke_mod?: number;
  '66mm'?: number;
  'RPG-7'?: number;
  homebrew_rocket?: number;
  water?: number;
  BB?: number;
  rock?: number;
  fishspear?: number;
  '10mm'?: number;
  '20x66mm'?: number;
  '270win'?: number;
  300?: number;
  '36paper'?: number;
  '410shot'?: number;
  44?: number;
  '44paper'?: number;
  45?: number;
  454?: number;
  '45colt'?: number;
  4570?: number;
  50?: number;
  500?: number;
  '700nx'?: number;
  '762R'?: number;
  '84x246mm'?: number;
  atgm?: number;
  blunderbuss?: number;
  cannon?: number;
  flintlock?: number;
  barb?: number;
  paintball?: number;
  signal_flare?: number;
}

interface Rangeddamage4 {
  damage_type: string;
  amount: number;
  armor_penetration: number;
}

interface Rangeddamage2 {
  damage_type: string;
  amount: number;
  armor_multiplier?: number;
}

interface Rangeddamage {
  damage_type: string;
  amount: number;
}

interface Name4 {
  str: string;
  str_pl: string;
}

interface Name3 {
  str: string;
}

interface Name2 {
  ctxt: string;
  str: string;
}

interface Name {
  str_sp: string;
}
