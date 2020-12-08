export interface IGeneric {
  id?: string;
  type: 'GENERIC';
  category?: string;
  name: Name | Name2 | Name3 | Name4 | string;
  description?: Description | string;
  weight?: string;
  volume?: string;
  price?: number | string;
  price_postapoc?: number | string;
  material?: string[] | any[] | string;
  symbol?: string;
  color?: string;
  use_action?:
    | Useaction
    | string[]
    | Useaction3[]
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
    | Useaction15
    | Useaction16
    | Useaction17
    | Useaction18
    | Useaction19
    | Useaction20
    | Useaction21
    | Useaction22
    | Useaction23
    | string;
  flags?: string[];
  longest_side?: string;
  to_hit?: number;
  techniques?: string[];
  bashing?: number;
  qualities?: Array<Array<number | string>>;
  '//'?: string;
  cutting?: number;
  ascii_picture?: string;
  pocket_data?: Pocketdatum[];
  armor_data?: Armordata;
  properties?: string[][];
  'copy-from'?: string;
  relic_data?: Relicdata;
  looks_like?: string;
  proportional?: Proportional;
  relative?: Relative;
  abstract?: string;
  '//electric'?: number;
  container?: string;
  snippet_category?: Snippetcategory[] | string;
  book_data?: Bookdata;
  '//0'?: string;
  '//1'?: string;
  '//spoils_in'?: string;
  insulation?: number;
  explode_in_fire?: boolean;
  explosion?: Explosion;
  emits?: string[];
  stackable?: boolean;
  milling?: Milling;
  extend?: Extend;
  countdown_action?: Countdownaction;
  countdown_interval?: number;
  delete?: Delete;
  thrown_damage?: Throwndamage[];
  gunmod_data?: Gunmoddata;
  damage_states?: number[];
  conditional_names?: Conditionalname[];
}

interface Conditionalname {
  type: string;
  condition: string;
  name: Name | Name4 | string;
}

interface Gunmoddata {
  location: string;
  mod_targets: string[];
  mode_modifier: Array<Array<string[] | number | string>>;
  install_time: string;
}

interface Throwndamage {
  damage_type: string;
  amount: number;
}

interface Delete {
  qualities: Array<Array<number | string>>;
}

interface Countdownaction {
  need_wielding?: boolean;
  menu_text?: string;
  type: string;
  target: string;
}

interface Extend {
  flags?: string[];
  qualities?: Array<Array<number | string>>;
}

interface Milling {
  into: string;
  conversion_rate: number;
}

interface Explosion {
  power: number;
  shrapnel: Shrapnel;
}

interface Shrapnel {
  casing_mass: number;
  fragment_mass: number;
}

interface Bookdata {
  martial_art: string;
}

interface Snippetcategory {
  id: string;
  text: string;
}

interface Relative {
  to_hit?: number;
  bashing?: number;
  weight?: string;
  cutting?: number;
}

interface Proportional {
  price?: number;
  bashing?: number;
  cutting?: number;
  weight?: number;
  volume?: number;
}

interface Relicdata {
  passive_effects: Passiveeffect[];
}

interface Passiveeffect {
  has: string;
  condition: string;
  values?: Value[];
  hit_you_effect?: Hityoueffect[];
  hit_me_effect?: Hitmeeffect[];
}

interface Hitmeeffect {
  id: string;
  hit_self: boolean;
}

interface Hityoueffect {
  id: string;
}

interface Value {
  value: string;
  multiply?: number;
  add: number;
}

interface Armordata {
  covers: string[];
  sided?: boolean;
  coverage: number;
  material_thickness: number;
  encumbrance?: number;
  warmth?: number;
  environmental_protection?: number;
}

interface Pocketdatum {
  pocket_type?: string;
  watertight?: boolean;
  rigid?: boolean;
  max_contains_volume: string;
  max_item_volume?: string;
  max_contains_weight: string;
  moves?: number;
  max_item_length?: string;
  airtight?: boolean;
  open_container?: boolean;
  sealed_data?: Sealeddata;
  '//'?: string;
  item_restriction?: string[];
  spoil_multiplier?: number;
  weight_multiplier?: number;
  volume_multiplier?: number;
  magazine_well?: string;
  flag_restriction?: string[];
}

interface Sealeddata {
  spoil_multiplier: number;
}

interface Useaction23 {
  type: string;
  msg: string;
  target: string;
}

interface Useaction22 {
  target: string;
  container: string;
  target_charges: number;
  msg: string;
  moves: number;
  type: string;
  transform_age: number;
  not_ready_msg: string;
}

interface Useaction21 {
  target: string;
  msg: string;
  moves: number;
  type: string;
  transform_age: number;
  not_ready_msg: string;
}

interface Useaction20 {
  target: string;
  msg: string;
  menu_text: string;
  type: string;
}

interface Useaction19 {
  type: string;
  radius: number;
  terrain: string[];
  message: string;
}

interface Useaction18 {
  type: string;
  monster_id: string;
  friendly_msg: string;
  hostile_msg: string;
  '//': string;
  difficulty: number;
  moves: number;
  skills: string[];
}

interface Useaction17 {
  type: string;
  target: string;
  active: boolean;
  moves: number;
  msg: string;
}

interface Useaction16 {
  type: string;
  belt: string;
}

interface Useaction15 {
  type: string;
  name: string;
  message: string;
}

interface Useaction14 {
  target: string;
  msg: string;
  active: boolean;
  menu_text: string;
  type: string;
}

interface Useaction13 {
  type: string;
  radius: number;
  terrain: Array<Terrain | string>;
  message: string;
}

interface Terrain {
  om_terrain: string;
  om_terrain_match_type: string;
}

interface Useaction12 {
  target: string;
  msg: string;
  moves: number;
  type: string;
  transform_age: number;
  not_ready_msg: string;
  '//': string;
}

interface Useaction11 {
  type: string;
  group: string;
  items_fit: boolean;
  filthy_volume_threshold: string;
}

interface Useaction10 {
  type: string;
  holster_prompt: string;
  holster_msg: string;
}

interface Useaction9 {
  type: string;
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
}

interface Useaction8 {
  target: string;
  msg: string;
  container: string;
  target_charges: number;
  moves: number;
  type: string;
  transform_age: number;
  not_ready_msg: string;
  '//': string;
}

interface Useaction7 {
  menu_text: string;
  type: string;
  target: string;
  msg: string;
  moves: number;
  need_wielding: boolean;
}

interface Useaction6 {
  type: string;
  scent_typeid: string;
  moves: number;
  duration: string;
  charges_to_use: number;
  effects: Effect[];
}

interface Effect {
  id: string;
  duration: number;
}

interface Useaction5 {
  type: string;
  moves: number;
  moves_slow: number;
  need_sunlight: boolean;
}

interface Useaction4 {
  type: string;
  spell_id: string;
  no_fail: boolean;
  level: number;
  need_wielding: boolean;
}

interface Useaction3 {
  type: string;
  moves?: number;
  moves_slow?: number;
  target?: string;
  msg?: string;
  active?: boolean;
  menu_text?: string;
}

interface Useaction {
  type: string;
  furn_type: string;
}

interface Description {
  '//~': string;
  str: string;
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
