import { CDDA_JSON_TYPES } from './names';

export interface IComestible {
  type: CDDA_JSON_TYPES.COMESTIBLE;
  id?: string;
  name: Name | Name2 | Name3 | string;
  weight?: string;
  color?: string;
  spoils_in?: number | string;
  container?: string;
  comestible_type?: string;
  symbol?: string;
  quench?: number;
  healthy?: number;
  calories?: number;
  description?: string;
  price?: number | string;
  price_postapoc?: number | string;
  material?: string[] | string;
  volume?: string;
  flags?: string[];
  charges?: number;
  vitamins?: (number | string)[][];
  fun?: number;
  category?: string;
  smoking_result?: string;
  '//'?: string;
  rot_spawn?: string;
  rot_spawn_chance?: number;
  phase?: string;
  brewable?: Brewable;
  addiction_type?: string;
  use_action?:
    | Useaction
    | string[]
    | Useaction3
    | Useaction4
    | Useaction5
    | Useaction6
    | Useaction7
    | Useaction8
    | Useaction9
    | Useaction10
    | Useaction11
    | Useaction12
    | Useaction13
    | Useaction14
    | any[]
    | Useaction16
    | Useaction17
    | Useaction18
    | Useaction19
    | Useaction20
    | Useaction21
    | Useaction22
    | Useaction23
    | Useaction24
    | Useaction25
    | Useaction26
    | Useaction27
    | Useaction28
    | Useaction29
    | Useaction30
    | Useaction31;
  stim?: number;
  addiction_potential?: number;
  primary_material?: string;
  freezing_point?: number;
  stack_size?: number;
  'copy-from'?: string;
  looks_like?: string;
  delete?: Delete;
  parasites?: number;
  tool?: string;
  ammo_data?: Ammodata;
  seed_data?: Seeddata;
  emits?: string[];
  cooks_like?: string;
  proportional?: Proportional;
  sealed?: boolean;
  conditional_names?: Conditionalname[];
  '//2'?: string;
  explode_in_fire?: boolean;
  explosion?: Explosion;
  abstract?: string;
  snippet_category?: Snippetcategory[] | string;
  relative?: Relative;
  extend?: Delete;
  milling?: Milling;
  fatigue_mod?: number;
  contamination?: Contamination[];
  '//TODO'?: string;
  to_hit?: number;
  bashing?: number;
  armor_data?: Armordata;
  pocket_data?: Pocketdatum[];
}

interface Pocketdatum {
  pocket_type: string;
  max_contains_volume: string;
  max_contains_weight: string;
  max_item_length: string;
  moves: number;
}

interface Armordata {
  covers: string[];
  sided: boolean;
  coverage: number;
  encumbrance: number;
  max_encumbrance: number;
  material_thickness: number;
}

interface Contamination {
  disease: string;
  probability: number;
}

interface Milling {
  into: string;
  conversion_rate: number;
}

interface Relative {
  vitamins?: (number | string)[][];
  fun?: number;
}

interface Snippetcategory {
  id: string;
  text: string;
}

interface Explosion {
  power: number;
  shrapnel: number;
}

interface Conditionalname {
  type: string;
  condition: string;
  name: Name | Name | Name32 | Name3 | string | string;
}

interface Name32 {
  str?: string;
  str_pl?: string;
  str_sp?: string;
}

interface Proportional {
  fun?: number;
  price?: number;
  weight?: number;
  volume?: number;
  calories?: number;
  parasites?: number;
  price_postapoc?: number;
  quench?: number;
  healthy?: number;
}

interface Seeddata {
  plant_name: string;
  fruit: string;
  byproducts?: string[];
  grow: string;
  '//'?: string;
  fruit_div?: number;
}

interface Ammodata {
  ammo_type: string;
}

interface Delete {
  flags: string[];
}

interface Useaction31 {
  type: string;
  activation_message: string;
  effects: Effect2[];
  stat_adjustments: Statadjustments;
  fields_produced: Fieldsproduced;
  tools_needed: Toolsneeded3;
  moves: number;
}

interface Toolsneeded3 {
  dab_pen_on: number;
}

interface Useaction30 {
  type: string;
  activation_message: string;
  tools_needed: Toolsneeded2;
  effects: Effect3[];
}

interface Useaction29 {
  type: string;
  moves: number;
  effects: Effect3[];
  used_up_item: string;
}

interface Useaction28 {
  type: string;
  activation_message: string;
  effects: Effect[];
}

interface Useaction27 {
  type: string;
  activation_message: string;
  effects: Effect3[];
  stat_adjustments: Statadjustments2;
  fields_produced: Fieldsproduced3;
  charges_needed: Chargesneeded;
  tools_needed: Toolsneeded;
}

interface Fieldsproduced3 {
  fd_cracksmoke: number;
}

interface Statadjustments2 {
  hunger: number;
}

interface Useaction26 {
  type: string;
  disinfectant_power: number;
  bite: number;
  move_cost: number;
}

interface Useaction25 {
  type: string;
  activation_message: string;
  effects: Effect3[];
  stat_adjustments: Statadjustments;
  fields_produced: Fieldsproduced2;
  charges_needed: Chargesneeded;
  tools_needed: Toolsneeded;
  moves: number;
}

interface Fieldsproduced2 {
  fd_cigsmoke: number;
}

interface Useaction24 {
  type: string;
  spell_id: string;
  no_fail: boolean;
  level: number;
}

interface Useaction23 {
  type: string;
  disinfectant_power: number;
  bite: number;
  move_cost: number;
  effects: Effect3[];
}

interface Useaction22 {
  type: string;
  disinfectant_power: number;
  bite: number;
  move_cost: number;
  used_up_item: Usedupitem2;
}

interface Usedupitem2 {
  id: string;
  quantity: number;
  charges: number;
  flags: string[];
}

interface Useaction21 {
  type: string;
  activation_message: string;
  stat_adjustments: Statadjustments;
  fields_produced: Fieldsproduced;
  charges_needed: Chargesneeded;
  tools_needed: Toolsneeded;
  moves: number;
}

interface Useaction20 {
  type: string;
  activation_message: string;
  effects: Effect2[];
}

interface Useaction19 {
  type: string;
  bandages_power: number;
  bleed: number;
  move_cost: number;
}

interface Useaction18 {
  type: string;
  activation_message: string;
  effects: Effect3[];
}

interface Useaction17 {
  target: string;
  msg: string;
  moves: number;
  type: string;
  transform_age: number;
  not_ready_msg: string;
  '//': string;
}

interface Useaction16 {
  type: string;
  mutation_category: string;
}

interface Useaction14 {
  type: string;
  is_strong: boolean;
}

interface Useaction13 {
  type: string;
  activation_message: string;
  effects: Effect3[];
  stat_adjustments: Statadjustments;
  fields_produced: Fieldsproduced;
  charges_needed: Chargesneeded;
  tools_needed: Toolsneeded;
  moves: number;
}

interface Useaction12 {
  type: string;
  disinfectant_power: number;
  bite: number;
  move_cost: number;
  used_up_item: Usedupitem;
}

interface Usedupitem {
  id: string;
  quantity: number;
  flags: string[];
}

interface Useaction11 {
  type: string;
  activation_message: string;
  vitamins: (number | string)[][];
}

interface Useaction10 {
  type: string;
}

interface Useaction9 {
  type: string;
  bleed: number;
  move_cost: number;
  effects: Effect3[];
}

interface Effect3 {
  id: string;
  duration: number;
}

interface Useaction8 {
  type: string;
  activation_message: string;
}

interface Useaction7 {
  type: string;
  activation_message: string;
  tools_needed: Toolsneeded2;
  vitamins: (number | string)[][];
}

interface Toolsneeded2 {
  syringe: number;
}

interface Useaction6 {
  type: string;
  activation_message: string;
  effects: Effect2[];
  stat_adjustments: Statadjustments;
  fields_produced: Fieldsproduced;
  charges_needed: Chargesneeded;
  tools_needed: Toolsneeded;
  moves: number;
}

interface Toolsneeded {
  apparatus: number;
}

interface Chargesneeded {
  fire: number;
}

interface Fieldsproduced {
  fd_weedsmoke: number;
}

interface Statadjustments {
  hunger: number;
  thirst: number;
}

interface Effect2 {
  id: string;
  duration: string;
}

interface Useaction5 {
  type: string;
  is_weak: boolean;
}

interface Useaction4 {
  type: string;
  activation_message: string;
  effects: Effect[];
  damage_over_time: Damageovertime[];
}

interface Damageovertime {
  damage_type: string;
  duration: string;
  amount: number;
  bodyparts: string[];
}

interface Effect {
  id: string;
  duration?: string;
}

interface Useaction3 {
  type: string;
  mutation_category: string;
  is_strong: boolean;
}

interface Useaction {
  type: string;
  bleed: number;
  move_cost: number;
}

interface Brewable {
  time: string;
  results: string[];
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
