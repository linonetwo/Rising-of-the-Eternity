import { CDDA_JSON_TYPES } from './names';

export interface IMonster {
  id?: string;
  type: CDDA_JSON_TYPES.MONSTER;
  name?: Name | Name2 | Name3 | Name4 | string;
  description?: string;
  'copy-from'?: string;
  proportional?: Proportional;
  volume?: string;
  weight?: string;
  upgrades?: Upgrade | Upgrades2 | Upgrades3 | boolean | Upgrades5;
  default_faction?: string;
  bodytype?: string;
  species?: string[] | string;
  hp?: number;
  speed?: number;
  material?: string[];
  symbol?: string;
  color?: string;
  aggression?: number;
  morale?: number;
  melee_skill?: number;
  melee_dice?: number;
  melee_dice_sides?: number;
  melee_cut?: number;
  dodge?: number;
  armor_bash?: number;
  armor_cut?: number;
  vision_day?: number;
  vision_night?: number;
  harvest?: string;
  special_attacks?: (
    | Specialattack
    | Specialattack
    | Specialattack
    | Specialattack
    | Specialattacks5
    | Specialattacks6
    | Specialattacks6
    | Specialattacks8
    | Specialattacks9
    | Specialattacks10
    | Specialattacks11
    | Specialattacks11
    | Specialattacks11
    | Specialattacks11
    | Specialattacks15
    | Specialattacks16
    | Specialattacks17
    | Specialattacks18
    | Specialattacks18
    | Specialattacks18
    | Specialattacks21
    | Specialattacks21
    | Specialattacks21
    | Specialattacks24
    | Specialattacks25
    | Specialattacks26
    | Specialattacks27
    | Specialattacks28
    | Specialattacks28
    | Specialattacks28
    | Specialattacks28
    | Specialattacks32
    | Specialattacks33
    | Specialattacks34
    | Specialattacks35
    | Specialattacks36
    | Specialattacks36
    | Specialattacks38
    | Spelldata
    | Spelldata
    | Spelldata
    | Spelldata
    | Spelldata
    | Specialattacks44
    | Specialattacks45
    | Specialattacks46
    | Specialattacks47
    | Specialattacks48
    | Specialattacks49
    | Specialattacks49
    | Specialattacks49
    | Specialattacks49
    | Specialattacks53
    | Specialattacks54
    | Specialattacks55
    | Specialattacks55
    | Specialattacks57
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | Specialattacks102
    | Specialattacks103
    | Specialattacks104
    | Specialattacks105
    | Specialattacks106
    | Specialattacks107
    | Specialattacks108
    | Specialattacks109
    | Specialattacks110
    | Specialattacks110
    | Specialattacks110
    | Specialattacks110
    | Specialattacks110
    | Specialattacks110
    | Specialattacks110
    | Specialattacks117
    | Specialattacks117
    | Specialattacks119
    | Specialattacks120
    | Specialattacks120
    | Specialattacks120
    | Specialattacks120
    | Specialattacks124
    | Specialattacks125
    | Specialattacks126
    | Specialattacks126
    | Specialattacks126
    | Specialattacks129
    | Specialattacks129
    | Specialattacks131
    | Specialattacks131
    | Specialattacks133
    | Specialattacks133
    | Specialattacks133
    | Specialattacks133
    | Specialattacks133
    | Specialattacks133
    | Specialattacks139
    | Specialattacks139
  )[];
  death_function?: string[];
  flags?: string[];
  categories?: string[];
  path_settings?: Pathsettings;
  anger_triggers?: string[];
  baby_flags?: string[];
  '//'?: string[] | string;
  biosignature?: Biosignature;
  fear_triggers?: string[];
  extend?: Extend;
  delete?: Delete;
  death_drops?:
    | Deathdrop
    | Deathdrops2[]
    | Deathdrops3
    | Deathdrops4
    | Deathdrops5
    | Deathdrops6
    | Item[]
    | Upgrades3
    | Deathdrops9[]
    | Deathdrops10
    | string;
  placate_triggers?: string[];
  diff?: number;
  starting_ammo?: Startingammo;
  reproduction?: Reproduction;
  armor_bullet?: number;
  armor_stab?: number;
  emit_fields?: Emitfield[];
  looks_like?: string;
  luminance?: number;
  armor_acid?: number;
  armor_fire?: number;
  '//2'?: string;
  regenerates?: number;
  phase?: string;
  melee_damage?: Meleedamage[];
  zombify_into?: string;
  relative?: Relative;
  special_when_hit?: (number | string)[];
  attack_effs?: Attackeff[];
  burn_into?: string;
  revert_to_itype?: string;
  abstract?: string;
  scents_ignored?: string[];
  alias?: string;
  regen_morale?: boolean;
  mech_str_bonus?: number;
  mech_battery?: string;
  mech_weapon?: string;
  attack_cost?: number;
  regenerates_in_dark?: boolean;
  grab_strength?: number;
  '//3'?: string;
  '//4'?: string;
}

interface Attackeff {
  id: string;
  duration?: number;
  chance?: number;
  affect_hit_bp?: boolean;
  '//'?: string;
}

interface Relative {
  melee_dice?: number;
  melee_dice_sides?: number;
  melee_cut?: number;
  armor_bash?: number;
  armor_cut?: number;
  armor_bullet?: number;
  vision_night?: number;
  melee_skill?: number;
  dodge?: number;
  morale?: number;
  aggression?: number;
  armor_stab?: number;
  armor_acid?: number;
  vision_day?: number;
  hp?: number;
  speed?: number;
}

interface Meleedamage {
  damage_type: string;
  amount: number;
  armor_penetration?: number;
}

interface Emitfield {
  emit_id: string;
  delay: string;
}

interface Reproduction {
  baby_egg?: string;
  baby_count: number;
  baby_timer: number;
  baby_monster?: string;
}

interface Startingammo {
  '762_51'?: number;
  napalm?: number;
  '40mm_incendiary'?: number;
  '223'?: number;
  milk_raw_choc?: number;
  rock?: number;
  pistol_ball?: number;
  rifle_huge_ball?: number;
  rifle_ball?: number;
  grenade_ammo_hedp?: number;
  grenade_ammo_beanbag?: number;
  acidic_bore?: number;
  '556'?: number;
  '40x46mm_m433'?: number;
  nail?: number;
  water?: number;
  '8mm_caseless'?: number;
  shot_beanbag?: number;
  '5x50dart'?: number;
  steel_rail?: number;
  xray_laser_barrel?: number;
  '9mm'?: number;
  '123ln'?: number;
  m235tpa?: number;
  bot_manhack?: number;
  bot_c4_hack?: number;
  bot_flashbang_hack?: number;
  bot_gasbomb_hack?: number;
  bot_grenade_hack?: number;
  bot_mininuke_hack?: number;
  grenade_emp?: number;
  c4?: number;
  flashbang?: number;
  tear_gas_payload?: number;
  grenade?: number;
  mininuke?: number;
  milk_raw?: number;
  '50bmg'?: number;
  '40x46mm_m1006'?: number;
  anesthetic?: number;
  barb_paralysis?: number;
  pressurized_tank?: number;
}

interface Deathdrops10 {
  subtype: string;
  groups: (number | string)[][];
}

interface Deathdrops9 {
  item?: string;
  count: number;
  group?: string;
}

interface Deathdrops6 {
  subtype: string;
  groups: string[];
}

interface Deathdrops5 {
  subtype: string;
  items: Deathdrops2[];
}

interface Deathdrops4 {
  groups: (number | string)[][];
}

interface Deathdrops3 {
  subtype: string;
  items: Item[];
}

interface Item {
  item?: string;
  prob: number;
  group?: string;
}

interface Deathdrops2 {
  item: string;
  prob: number;
}

interface Deathdrop {
  subtype: string;
  groups: (number | string)[][];
  '//': string;
}

interface Delete {
  flags?: string[];
  categories?: string[];
  upgrades?: Upgrades;
}

interface Upgrades {
  half_life: number;
  into?: string;
  into_group?: string;
}

interface Extend {
  flags?: string[];
  special_attacks?: (
    | Specialattack2
    | Spelldata
    | (number | string)[]
    | (number | string)[]
    | Specialattacks129
    | Specialattacks62
    | Specialattacks131
    | Specialattacks131
  )[];
  categories?: string[];
  death_function?: string[];
}

interface Specialattacks62 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  fake_per: number;
  require_targeting_player: boolean;
  description: string;
  ranges: (number | string)[][];
  no_ammo_sound: string;
}

interface Specialattack2 {
  id?: string;
  cooldown: number;
  damage_max_instance?: Damagemaxinstance2[];
  type?: string;
  max_range?: number;
}

interface Biosignature {
  biosig_item: string;
  biosig_timer: number;
}

interface Pathsettings {
  max_dist?: number;
  '//min_dist'?: number;
}

interface Specialattacks139 {
  type: string;
  spell_data: Spelldata;
  cooldown: number;
}

interface Specialattacks133 {
  type: string;
  cooldown: number;
  damage_max_instance: Damagemaxinstance2[];
}

interface Specialattacks131 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  fake_per: number;
  require_targeting_player: boolean;
  ranges: (number | string)[][];
  description: string;
}

interface Specialattacks129 {
  type: string;
  spell_data: Spelldata3;
  cooldown: number;
  monster_message: string;
}

interface Spelldata3 {
  id: string;
  hit_self: boolean;
}

interface Specialattacks126 {
  type: string;
  cooldown: number;
  move_cost: number;
  max_range: number;
  min_consider_range: number;
}

interface Specialattacks125 {
  type: string;
  cooldown: number;
  gun_type: string;
  fake_skills: (number | string)[][];
  ranges: (number | string)[][];
  targeting_sound: string;
  description: string;
}

interface Specialattacks124 {
  type: string;
  cooldown: number;
  min_mul: number;
  '//': string;
}

interface Specialattacks120 {
  type: string;
  cooldown: number;
  max_range: number;
  allow_no_target: boolean;
}

interface Specialattacks119 {
  type: string;
  cooldown: number;
  max_range?: number;
  allow_no_target?: boolean;
}

interface Specialattacks117 {
  type: string;
  cooldown: number;
  accuracy: number;
  no_infection_chance: number;
}

interface Specialattacks110 {
  type: string;
  cooldown: number;
}

interface Specialattacks109 {
  '//': string;
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  ranges: (number | string)[][];
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  laser_lock: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
  no_ammo_sound: string;
}

interface Specialattacks108 {
  type: string;
  cooldown: number;
  max_range: number;
  min_consider_range: number;
  max_consider_range: number;
}

interface Specialattacks107 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  no_ammo_sound: string;
  ranges: (number | string)[][];
}

interface Specialattacks106 {
  type?: string;
  cooldown?: number;
  max_range?: number;
  min_consider_range?: number;
  max_consider_range?: number;
  damage_max_instance?: Damagemaxinstance2[];
  id?: string;
}

interface Specialattacks105 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  max_ammo: number;
  ranges: (number | string)[][];
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  laser_lock: boolean;
  targeting_cost: number;
  targeting_sound: string;
  targeting_volume: number;
  description: string;
  no_ammo_sound: string;
}

interface Specialattacks104 {
  type: string;
  cooldown: number;
  damage_max_instance: Damagemaxinstance3[];
}

interface Specialattacks103 {
  type: string;
  cooldown: number;
  gun_type: string;
  ranges: (number | string)[][];
  targeting_sound: string;
  description: string;
}

interface Specialattacks102 {
  type: string;
  cooldown: number;
  gun_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  ranges: (number | string)[][];
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  targeting_cost: number;
  laser_lock: boolean;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks57 {
  id?: string;
  damage_max_instance?: Damagemaxinstance4[];
  type?: string;
  cooldown?: number;
  max_range?: number;
}

interface Damagemaxinstance4 {
  damage_type: string;
  amount: number;
  armor_multiplier?: number;
}

interface Specialattacks55 {
  type: string;
  cooldown: number;
  gun_type: string;
  fake_skills: (number | string)[][];
  ranges: (number | string)[][];
}

interface Specialattacks54 {
  type: string;
  cooldown: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  no_ammo_sound: string;
  ranges: (number | string)[][];
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks53 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  ranges: (number | string)[][];
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  laser_lock: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
  no_ammo_sound: string;
}

interface Specialattacks49 {
  type: string;
  spell_data: Spelldata2;
  cooldown: number;
}

interface Spelldata2 {
  id: string;
  min_level: number;
}

interface Specialattacks48 {
  type: string;
  cooldown: number;
  gun_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  ranges: (number | string)[][];
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks47 {
  type: string;
  move_cost: number;
  cooldown: number;
  gun_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  ranges: (number | string)[][];
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks46 {
  type: string;
  cooldown: number;
  accuracy: number;
  move_cost: number;
  damage_max_instance: Damagemaxinstance3[];
}

interface Damagemaxinstance3 {
  damage_type: string;
  amount: number;
  armor_penetration: number;
}

interface Specialattacks45 {
  type: string;
  cooldown: number;
  accuracy: number;
  damage_max_instance: Damagemaxinstance2[];
  effects: Effect[];
}

interface Specialattacks44 {
  type: string;
  cooldown: number;
  max_range?: number;
  damage_max_instance?: Damagemaxinstance2[];
}

interface Specialattacks38 {
  type: string;
  cooldown: number;
  accuracy: number;
  damage_max_instance: Damagemaxinstance2[];
}

interface Specialattacks36 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  ranges: (number | string)[][];
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  laser_lock: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  no_ammo_sound: string;
}

interface Specialattacks35 {
  type: string;
  cooldown: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  no_ammo_sound: string;
  ranges: (number | string)[][];
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  laser_lock: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks34 {
  type: string;
  cooldown: number;
  gun_type: string;
  ranges: (number | string)[][];
  description: string;
}

interface Specialattacks33 {
  type: string;
  damage_max_instance: Damagemaxinstance2[];
  effects: Effect[];
  cooldown: number;
}

interface Specialattacks32 {
  type: string;
  cooldown: number;
  accuracy: number;
  damage_max_instance: Damagemaxinstance2[];
  effects: Effect[];
  no_infection_chance: number;
}

interface Effect {
  id: string;
  duration: number;
  bp: string;
}

interface Specialattacks28 {
  id: string;
  damage_max_instance: Damagemaxinstance2[];
}

interface Specialattacks27 {
  id: string;
  cooldown: number;
  damage_max_instance: Damagemaxinstance2[];
}

interface Specialattacks26 {
  type: string;
  cooldown: number;
  move_cost?: number;
  gun_type?: string;
  fake_skills?: (number | string)[][];
  fake_dex?: number;
  fake_per?: number;
  require_targeting_player?: boolean;
  ranges?: (number | string)[][];
  description?: string;
}

interface Specialattacks25 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  no_ammo_sound: string;
  ranges: (number | string)[][];
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks24 {
  type: string;
  no_infection_chance: number;
  damage_max_instance: Damagemaxinstance2[];
  cooldown: number;
}

interface Specialattacks21 {
  type: string;
  spell_data: Spelldata;
  cooldown: number;
  monster_message: string;
}

interface Specialattacks18 {
  type: string;
  cooldown: number;
  min_mul: number;
}

interface Specialattacks17 {
  type: string;
  cooldown: number;
  gun_type: string;
  fake_skills: (number | string)[][];
  ranges: (number | string)[][];
  require_sunlight: boolean;
}

interface Specialattacks16 {
  id?: string;
  cooldown: number;
  damage_max_instance?: Damagemaxinstance2[];
  type?: string;
  spell_data?: Spelldata;
  monster_message?: string;
}

interface Spelldata {
  id: string;
}

interface Specialattacks15 {
  type: string;
  cooldown: number;
  gun_type: string;
  ranges: (number | string)[][];
  targeting_sound: string;
}

interface Specialattacks11 {
  id: string;
  damage_max_instance: Damagemaxinstance[];
}

interface Specialattacks10 {
  type?: string;
  cooldown?: number;
  max_range?: number;
  min_consider_range?: number;
  max_consider_range?: number;
  allow_no_target?: boolean;
  damage_max_instance?: Damagemaxinstance2[];
  id?: string;
}

interface Damagemaxinstance2 {
  damage_type: string;
  amount: number;
  armor_multiplier: number;
}

interface Specialattacks9 {
  type: string;
  cooldown: number;
  min_mul: number;
  no_infection_chance: number;
}

interface Specialattacks8 {
  type: string;
  cooldown: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  ranges: (number | string)[][];
}

interface Specialattacks6 {
  id: string;
  cooldown: number;
  damage_max_instance: Damagemaxinstance[];
}

interface Damagemaxinstance {
  damage_type: string;
  amount: number;
}

interface Specialattacks5 {
  type: string;
  move_cost: number;
  gun_type: string;
  fake_skills: (number | string)[][];
  fake_dex: number;
  ranges: (number | string)[][];
}

interface Specialattack {
  type: string;
  cooldown: number;
  max_range: number;
}

interface Upgrades5 {
  age_grow: number;
  into: string;
}

interface Upgrades3 {}

interface Upgrades2 {
  half_life: number;
  into_group: string;
}

interface Upgrade {
  half_life: number;
  into: string;
}

interface Proportional {
  hp: number;
  speed?: number;
  morale?: number;
  melee_dice_sides?: number;
  dodge?: number;
  armor_cut?: number;
  armor_bullet?: number;
  vision_day?: number;
  volume?: number;
  weigth?: number;
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
