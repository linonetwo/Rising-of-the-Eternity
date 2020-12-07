import { CDDA_JSON_TYPES } from './names';

export interface IArmor {
  type: CDDA_JSON_TYPES.ARMOR;
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
    | (Useaction4 | string)[]
    | Useaction5
    | Useaction4
    | Useaction7
    | Useaction8
    | Useaction9
    | Useaction10
    | Useaction11
    | string;
  qualities?: (number | string)[][];
  bashing?: number;
  looks_like?: string;
  warmth?: number;
  repairs_like?: string;
  environmental_protection?: number;
  to_hit?: number;
  max_encumbrance?: number;
  sided?: boolean;
  category?: string;
  power_armor?: boolean;
  '//'?: string;
  armor_portion_data?: Armorportiondatum[];
  valid_mods?: string[];
  'copy-from'?: string;
  armor_data?: Armordata;
  proportional?: Proportional;
  techniques?: string[];
  relic_data?: Relicdata;
  '//2'?: string;
  snippet_category?: Snippetcategory[];
  delete?: Delete;
  relative?: Relative;
  cutting?: number;
  abstract?: string;
  extend?: Delete;
  ascii_picture?: string;
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

interface Armordata {
  covers: string[];
  coverage: number;
  encumbrance: number;
  material_thickness: number;
}

interface Armorportiondatum {
  covers?: string[];
  coverage?: number;
  encumbrance?: number[];
  sided?: boolean;
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
  '//'?: string;
  rigid?: boolean;
  watertight?: boolean;
  max_item_volume?: string;
  airtight?: boolean;
  fire_protection?: boolean;
  spoil_multiplier?: number;
  pocket_type?: string;
  ammo_restriction?: Ammorestriction;
  item_restriction?: string[];
  weight_multiplier?: number;
  magazine_well?: string;
}

interface Ammorestriction {
  ammo_pistol_tiny?: number;
  ammo_pistol?: number;
  ammo_pistol_magnum?: number;
  '32'?: number;
  '38'?: number;
  '40'?: number;
  '44'?: number;
  '45'?: number;
  '46'?: number;
  '57'?: number;
  '380'?: number;
  '454'?: number;
  '460'?: number;
  '500'?: number;
  '762x25'?: number;
  '357mag'?: number;
  '357sig'?: number;
  '38super'?: number;
  '10mm'?: number;
  '45colt'?: number;
  '9x18'?: number;
  '9mm'?: number;
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
