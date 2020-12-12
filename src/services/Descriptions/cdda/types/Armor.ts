export interface IArmor {
  type: 'ARMOR';
  id?: string;
  name: Name | Name2 | Name3 | string;
  weight?: string;
  color?: string;
  covers?: string[];
  symbol?: string;
  description?: string;
  price?: number;
  price_postapoc?: number | string;
  material?: string[];
  volume?: string;
  flags?: string[];
  coverage?: number;
  encumbrance?: number;
  material_thickness?: number;
  pocket_data?: Pocketdatum[];
  use_action?:
    | string[]
    | Useaction2
    | Useaction3
    | Array<Useaction4 | string>
    | Useaction5
    | Useaction4
    | Useaction7
    | Useaction8
    | Useaction9
    | Useaction10
    | Useaction11
    | string;
  qualities?: Array<Array<number | string>>;
  'copy-from'?: string;
  category?: string;
  warmth?: number;
  proportional?: Proportional;
  environmental_protection?: number;
  to_hit?: number;
  bashing?: number;
  techniques?: string[];
  relic_data?: Relicdata;
  looks_like?: string;
  sided?: boolean;
  max_encumbrance?: number;
  '//'?: string;
  '//2'?: string;
  repairs_like?: string;
  snippet_category?: Snippetcategory[];
  valid_mods?: string[];
  armor_portion_data?: Armorportiondatum[];
  delete?: Delete;
  relative?: Relative;
  cutting?: number;
  abstract?: string;
  extend?: Delete;
  ascii_picture?: string;
  power_armor?: boolean;
  longest_side?: string;
  properties?: string[][];
}

interface Relative {
  material_thickness?: number;
  bashing?: number;
}

interface Delete {
  flags: string[];
}

interface Armorportiondatum {
  covers?: string[];
  coverage?: number;
  encumbrance?: number[];
  sided?: boolean;
}

interface Snippetcategory {
  id: string;
  text: string;
}

interface Relicdata {
  passive_effects: Passiveeffect[];
  charge_info?: Chargeinfo;
}

interface Chargeinfo {
  recharge_type: string;
  time: string;
  regenerate_ammo: boolean;
}

interface Passiveeffect {
  has?: string;
  condition?: string;
  values?: Value[];
  mutations?: string[];
  id?: string;
  hit_me_effect?: Hitmeeffect[];
  intermittent_activation?: Intermittentactivation;
}

interface Intermittentactivation {
  effects: Effect[];
}

interface Effect {
  frequency: string;
  spell_effects: Spelleffect[];
}

interface Spelleffect {
  id: string;
  hit_self: boolean;
}

interface Hitmeeffect {
  id: string;
  hit_self?: boolean;
}

interface Value {
  value: string;
  add: number;
}

interface Proportional {
  weight?: number;
  encumbrance?: number;
  price?: number;
  warmth?: number;
  volume?: number;
}

interface Useaction11 {
  type: string;
  target: string;
  msg: string;
  moves: number;
}

interface Useaction10 {
  type: string;
  spell_id: string;
  no_fail: boolean;
  level: number;
  need_worn: boolean;
}

interface Useaction9 {
  type: string;
  msg: string;
  target: string;
  menu_text: string;
  need_worn: boolean;
}

interface Useaction8 {
  target: string;
  msg: string;
  menu_text: string;
  type: string;
}

interface Useaction7 {
  type: string;
  group: string;
  items_fit: boolean;
  filthy_volume_threshold: string;
}

interface Useaction5 {
  type: string;
}

interface Useaction4 {
  type: string;
  holster_prompt: string;
  holster_msg: string;
}

interface Useaction3 {
  type: string;
  moves: number;
  moves_slow: number;
  need_sunlight: boolean;
}

interface Useaction2 {
  type: string;
  group: string;
  filthy_volume_threshold: string;
}

interface Pocketdatum {
  holster?: boolean;
  min_item_volume?: string;
  max_contains_volume?: string;
  max_contains_weight?: string;
  max_item_length?: string;
  moves?: number;
  flag_restriction?: string[];
  ammo_restriction?: Ammorestriction;
  pocket_type?: string;
  weight_multiplier?: number;
  rigid?: boolean;
  watertight?: boolean;
  magazine_well?: string;
  max_item_volume?: string;
}

interface Ammorestriction {
  32: number;
  38: number;
  40: number;
  44: number;
  45: number;
  46: number;
  57: number;
  380: number;
  454: number;
  460: number;
  500: number;
  '762x25': number;
  '357mag': number;
  '357sig': number;
  '38super': number;
  '10mm': number;
  '45colt': number;
  '9x18': number;
  '9mm': number;
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
