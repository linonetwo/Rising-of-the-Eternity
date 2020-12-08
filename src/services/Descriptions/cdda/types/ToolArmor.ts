export interface IToolArmor {
  type: 'TOOL_ARMOR';
  id?: string;
  weight?: string;
  volume?: string;
  price?: number;
  material?: string[];
  symbol?: string;
  color?: string;
  covers?: string[];
  sided?: boolean;
  coverage?: number;
  warmth?: number;
  flags?: string[];
  name: Name | Name2 | Name3 | string;
  description?: Description | string;
  relic_data?: Relicdata;
  abstract?: string;
  bashing?: number;
  material_thickness?: number;
  pocket_data?: Pocketdatum[];
  use_action?:
    | string[]
    | Useaction2
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
    | Useaction15
    | Useaction16;
  'copy-from'?: string;
  environmental_protection?: number;
  weight_capacity_bonus?: string;
  encumbrance?: number;
  max_encumbrance?: number;
  looks_like?: string;
  charges_per_use?: number;
  category?: string;
  to_hit?: number;
  qualities?: Array<Array<number | string>>;
  max_charges?: number;
  initial_charges?: number;
  turns_per_charge?: number;
  revert_to?: string;
  '//'?: string;
  ammo?: string[] | string;
  repairs_like?: string;
  solar_efficiency?: number;
  price_postapoc?: number;
  power_draw?: number;
  techniques?: string[];
  armor_portion_data?: Armorportiondatum[];
  magazines?: Array<Array<string[] | string>>;
  extend?: Extend;
  environmental_protection_with_filter?: number;
  longest_side?: string;
  power_armor?: boolean;
}

interface Extend {
  flags: string[];
}

interface Armorportiondatum {
  covers: string[];
  coverage: number;
  encumbrance: number;
}

interface Useaction16 {
  type: string;
  msg: string;
  target: string;
}

interface Useaction15 {
  type: string;
  msg: string;
  target: string;
  active: boolean;
  need_charges: number;
  need_charges_msg: string;
}

interface Useaction14 {
  type: string;
  msg: string;
  menu_text: string;
  target: string;
  active: boolean;
}

interface Useaction13 {
  type: string;
  spell_id: string;
  no_fail: boolean;
  level: number;
  need_worn: boolean;
}

interface Useaction12 {
  type: string;
  menu_text: string;
  msg: string;
  target: string;
  active: boolean;
  need_charges: number;
  need_charges_msg: string;
}

interface Useaction11 {
  type: string;
  spell_id: string;
  no_fail: boolean;
  level: number;
}

interface Useaction10 {
  type: string;
  msg: string;
  target: string;
  active: boolean;
  need_worn: boolean;
  need_charges: number;
  need_charges_msg: string;
}

interface Useaction9 {
  type: string;
  target: string;
  active: boolean;
  moves: number;
  msg: string;
}

interface Useaction8 {
  type: string;
  msg: string;
  target: string;
  active: boolean;
}

interface Useaction7 {
  type: string;
  no_charges_message: string;
  use_message: string;
  '//': string;
  noise_message: string;
  noise_id: string;
  noise_variant: string;
  noise: number;
  moves: number;
}

interface Useaction6 {
  type: string;
  holster_prompt: string;
  holster_msg: string;
}

interface Useaction5 {
  type: string;
  moves: number;
  moves_slow: number;
  need_sunlight: boolean;
}

interface Useaction4 {
  type: string;
  speed_penalty: number;
  volume: number;
  fun: number;
  fun_bonus: number;
  description_frequency: number;
  player_descriptions: string[];
}

interface Useaction3 {
  type: string;
  menu_text: string;
  msg: string;
  target: string;
}

interface Useaction2 {
  type: string;
  speed_penalty: number;
  volume: number;
  fun: number;
  fun_bonus: number;
  description_frequency: number;
  player_descriptions: string[];
  npc_descriptions: string[];
}

interface Pocketdatum {
  max_contains_volume?: string;
  max_contains_weight?: string;
  moves?: number;
  flag_restriction?: string[];
  pocket_type?: string;
  max_item_length?: string;
  weight_multiplier?: number;
  volume_multiplier?: number;
  holster?: boolean;
  ammo_restriction?: Ammorestriction;
  item_restriction?: string[];
  rigid?: boolean;
  airtight?: boolean;
  watertight?: boolean;
  min_item_volume?: string;
}

interface Ammorestriction {
  crystallized_mana?: number;
  battery?: number;
  rebreather_filter?: number;
  gasfilter_s?: number;
  gasfilter_m?: number;
  ampoule?: number;
  stimpack_ammo?: number;
  nitrox?: number;
}

interface Relicdata {
  passive_effects?: Passiveeffect[];
  charge_info?: Chargeinfo;
}

interface Chargeinfo {
  recharge_type: string;
  time: string;
  regenerate_ammo: boolean;
}

interface Passiveeffect {
  has: string;
  condition: string;
  values: Value[];
}

interface Value {
  value: string;
  add?: number;
  multiply?: number;
}

interface Description {
  '//~': string;
  str: string;
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
