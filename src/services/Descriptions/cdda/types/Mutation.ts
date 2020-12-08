export interface IMutation {
  type: 'mutation';
  id: string;
  name?: Name | string;
  points?: number;
  description?: Description | string;
  starting_trait?: boolean;
  initial_ma_styles?: string[];
  valid?: boolean;
  social_modifiers?: Socialmodifiers;
  debug?: boolean;
  visibility?: number;
  ugliness?: number;
  enchantments?: string[];
  category?: string[];
  mixed_effect?: boolean;
  purifiable?: boolean;
  profession?: boolean;
  weakness_to_water?: number;
  ignored_by?: string[];
  scent_type?: string;
  thirst_modifier?: number;
  cancels?: string[];
  can_only_eat?: string[];
  can_only_heal_with?: string[];
  vitamin_rates?: Array<Array<number | string>>;
  healing_awake?: number;
  healing_resting?: number;
  healthy_rate?: number;
  bleed_resist?: number;
  fat_to_max_hp?: number;
  anger_relations?: Array<Array<number | string>>;
  allowed_category?: string[];
  no_cbm_on_bp?: string[];
  armor?: Armor[];
  flags?: string[];
  prereqs?: string[];
  spells_learned?: Array<Array<number | string>>;
  crafting_speed_multiplier?: number;
  bionic_mana_penalty?: number;
  bionic_slot_bonuses?: Bionicslotbonuses;
  passive_mods?: Passivemods;
  hp_modifier?: number;
  speed_modifier?: number;
  weight_capacity_modifier?: number;
  casting_time_multiplier?: number;
  '//'?: string;
  encumbrance_multiplier_always?: Encumbrancemultiplieralways;
  mana_multiplier?: number;
  threshold?: boolean;
  threshreq?: string[] | string;
  mana_modifier?: number;
  lumination?: Array<Array<number | string>>;
  'copy-from'?: string;
  extend?: Extend;
  bodytemp_modifiers?: number[];
  changes_to?: string[];
  types?: string[];
  mana_regen_multiplier?: number;
  encumbrance_always?: Array<Array<number | string>>;
  restricts_gear?: string[];
  attacks?:
    | Attack
    | Attacks2
    | Attacks3
    | Attacks4[]
    | Attacks3[]
    | Attacks6
    | Attacks7[]
    | Attacks8[]
    | Attacks9
    | Attacks10
    | Attacks11[]
    | Attacks12
    | Attacks13;
  wet_protection?: Wetprotection[];
  cut_dmg_bonus?: number;
  butchering_quality?: number;
  destroys_gear?: boolean;
  movecost_modifier?: number;
  prereqs2?: string[];
  leads_to?: string[];
  hp_adjustment?: number;
  fatigue_modifier?: number;
  dodge_modifier?: number;
  metabolism_modifier?: number;
  vitamins_absorb_multi?: Array<Array<Array<Array<number | string>> | string>>;
  temperature_speed_modifier?: number;
  allow_soft_gear?: boolean;
  pierce_dmg_bonus?: number;
  stealth_modifier?: number;
  noise_modifier?: number;
  attackcost_modifier?: number;
  movecost_flatground_modifier?: number;
  active?: boolean;
  starts_active?: boolean;
  max_stamina_modifier?: number;
  stamina_regen_modifier?: number;
  player_display?: boolean;
  hearing_modifier?: number;
  craft_skill_bonus?: Array<Array<number | string>>;
  movecost_obstacle_modifier?: number;
  scent_intensity?: number;
  bodytemp_sleep?: number;
  hp_modifier_secondary?: number;
  fatigue_regen_modifier?: number;
  cost?: number;
  time?: number;
  hunger?: boolean;
  encumbrance_covered?: Array<Array<number | string>>;
  triggers?: Trigger[][];
  transform?: Transform;
  mending_modifier?: number;
  reading_speed_multiplier?: number;
  obtain_cost_multiplier?: number;
  consume_time_modifier?: number;
  vomit_multiplier?: number;
  map_memory_capacity_multiplier?: number;
  skill_rust_multiplier?: number;
  stomach_size_multiplier?: number;
  overmap_sight?: number;
  movecost_swim_modifier?: number;
  bash_dmg_bonus?: number;
  ranged_mutation?: Rangedmutation;
  scent_mask?: number;
  thirst?: boolean;
  fatigue?: boolean;
  rand_cut_bonus?: Randcutbonus;
  spawn_item?: Rangedmutation;
}

interface Randcutbonus {
  min: number;
  max: number;
}

interface Rangedmutation {
  type: string;
  message: string;
}

interface Transform {
  target: string;
  msg_transform: string;
  active: boolean;
  moves: number;
}

interface Trigger {
  trigger_type: string;
  threshold_low?: number;
  msg_on?: Msgon;
  msg_off?: Msgon;
  threshold_high?: number;
}

interface Msgon {
  text: string;
  rating: string;
}

interface Wetprotection {
  part: string;
  neutral?: number;
  ignored?: number;
  good?: number;
}

interface Attacks13 {
  attack_text_u: string;
  attack_text_npc: string;
  body_part: string;
  chance: number;
  base_damage: Basedamage[];
}

interface Attacks12 {
  attack_text_u: string;
  attack_text_npc: string;
  chance: number;
  base_damage: Basedamage;
  strength_damage: Basedamage;
}

interface Attacks11 {
  attack_text_u: string;
  attack_text_npc: string;
  blocker_mutations?: string[];
  body_part: string;
  chance: number;
  base_damage: Basedamage;
  required_mutations?: string[];
}

interface Attacks10 {
  attack_text_u: string;
  attack_text_npc: string;
  chance: number;
  base_damage: Basedamage[];
}

interface Attacks9 {
  attack_text_u: string;
  attack_text_npc: string;
  blocker_mutations: string[];
  body_part: string;
  chance: number;
  base_damage: Basedamage;
}

interface Attacks8 {
  attack_text_u: string;
  attack_text_npc: string;
  blocker_mutations?: string[];
  chance: number;
  hardcoded_effect: boolean;
  required_mutations?: string[];
}

interface Attacks7 {
  attack_text_u: string;
  attack_text_npc: string;
  chance: number;
  hardcoded_effect: boolean;
}

interface Attacks6 {
  attack_text_u: string;
  attack_text_npc: string;
  body_part: string;
  chance: number;
  base_damage: Basedamage;
}

interface Attacks4 {
  attack_text_u: string;
  attack_text_npc: string;
  body_part: string;
  chance: number;
  hardcoded_effect: boolean;
}

interface Attacks3 {
  attack_text_u: string;
  attack_text_npc: string;
  body_part: string;
  chance: number;
  base_damage: Basedamage;
  strength_damage: Basedamage;
}

interface Attacks2 {
  attack_text_u: string;
  attack_text_npc: string;
  chance: number;
  strength_damage: Basedamage;
}

interface Attack {
  attack_text_u: string;
  attack_text_npc: string;
  chance: number;
  base_damage: Basedamage;
}

interface Basedamage {
  damage_type: string;
  amount: number;
}

interface Extend {
  cancels?: string[];
  category?: string[];
  threshreq?: string[];
  changes_to?: string[];
  allow_soft_gear?: boolean;
}

interface Encumbrancemultiplieralways {
  arm_l: number;
  arm_r: number;
  hand_l: number;
  hand_r: number;
  leg_l: number;
  leg_r: number;
  mouth: number;
}

interface Passivemods {
  dex_mod?: number;
  str_mod?: number;
  int_mod?: number;
  per_mod?: number;
}

interface Bionicslotbonuses {
  torso: number;
}

interface Armor {
  parts: string[] | string;
  cut?: number;
  bash?: number;
  bullet?: number;
  acid?: number;
}

interface Socialmodifiers {
  lie?: number;
  intimidate?: number;
  persuade?: number;
}

interface Description {
  '//~': string;
  str: string;
}

interface Name {
  str: string;
}
