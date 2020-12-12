export interface IMonster {
  id?: string;
  type: 'MONSTER';
  name?: Name | Name2 | Name3 | Name4 | string;
  description?: string;
  'copy-from'?: string;
  proportional?: Proportional;
  volume?: string;
  weight?: string;
  upgrades?: Upgrade | Upgrades2 | Upgrades3 | boolean | Upgrades5;
  looks_like?: string;
  default_faction?: string;
  species?: string[] | string;
  hp?: number;
  speed?: number;
  symbol?: string;
  color?: string;
  aggression?: number;
  morale?: number;
  luminance?: number;
  dodge?: number;
  harvest?: string;
  fear_triggers?: string[];
  special_attacks?: Array<
    | Specialattack
    | Specialattack
    | Specialattack
    | Specialattack
    | Specialattacks5
    | Specialattacks6
    | Specialattacks6
    | Specialattacks8
    | Specialattacks9
    | Specialattacks9
    | Specialattacks11
    | Specialattacks12
    | Specialattacks13
    | Specialattacks14
    | Specialattacks14
    | Specialattacks14
    | Specialattacks17
    | Specialattacks17
    | Specialattacks19
    | Specialattacks20
    | Specialattacks21
    | Specialattacks22
    | Specialattacks22
    | Specialattacks22
    | Specialattacks25
    | Specialattacks26
    | Specialattacks27
    | Specialattacks28
    | Specialattacks28
    | Specialattacks30
    | Spelldata
    | Spelldata
    | Spelldata
    | Specialattacks34
    | Specialattacks35
    | Specialattacks36
    | Specialattacks37
    | Specialattacks38
    | Specialattacks38
    | Specialattacks38
    | Specialattacks38
    | Specialattacks42
    | Specialattacks43
    | Specialattacks44
    | Specialattacks44
    | Specialattacks46
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Array<number | string>
    | Specialattacks81
    | Specialattacks82
    | Specialattacks83
    | Specialattacks84
    | Specialattacks85
    | Specialattacks86
    | Specialattacks87
    | Specialattacks87
    | Specialattacks87
    | Specialattacks87
    | Specialattacks87
    | Specialattacks87
    | Specialattacks93
    | Specialattacks93
    | Specialattacks95
    | Specialattacks96
    | Specialattacks96
    | Specialattacks96
    | Specialattacks96
    | Specialattacks100
    | Specialattacks101
    | Specialattacks102
    | Specialattacks102
    | Specialattacks102
    | Specialattacks105
    | Specialattacks105
    | Specialattacks107
    | Specialattacks107
    | Specialattacks109
    | Specialattacks109
    | Specialattacks109
    | Specialattacks112
    | Specialattacks112
  >;
  death_function?: string[];
  flags?: string[];
  melee_skill?: number;
  melee_dice?: number;
  melee_dice_sides?: number;
  melee_cut?: number;
  armor_bash?: number;
  armor_cut?: number;
  armor_bullet?: number;
  vision_day?: number;
  vision_night?: number;
  material?: string[];
  bodytype?: string;
  diff?: number;
  armor_stab?: number;
  armor_acid?: number;
  armor_fire?: number;
  anger_triggers?: string[];
  '//'?: string[] | string;
  path_settings?: Pathsettings;
  '//2'?: string;
  delete?: Delete;
  emit_fields?: Emitfield[];
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
  starting_ammo?: Startingammo;
  extend?: Extend;
  regenerates?: number;
  reproduction?: Reproduction;
  baby_flags?: string[];
  phase?: string;
  melee_damage?: Meleedamage[];
  categories?: string[];
  placate_triggers?: string[];
  zombify_into?: string;
  relative?: Relative;
  special_when_hit?: Array<number | string>;
  biosignature?: Biosignature;
  burn_into?: string;
  revert_to_itype?: string;
  attack_effs?: Attackeff[];
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
  chance?: number;
  duration?: number;
  affect_hit_bp?: boolean;
  '//'?: string;
}

interface Biosignature {
  biosig_item: string;
  biosig_timer: number;
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

interface Reproduction {
  baby_egg?: string;
  baby_count: number;
  baby_timer: number;
  baby_monster?: string;
}

interface Extend {
  special_attacks?: Array<
    | Specialattack2
    | Spelldata
    | Array<number | string>
    | Array<number | string>
    | Specialattacks105
    | Specialattacks62
    | Specialattacks107
    | Specialattacks107
  >;
  flags?: string[];
  death_function?: string[];
}

interface Specialattacks62 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  fake_per: number;
  require_targeting_player: boolean;
  description: string;
  ranges: Array<Array<number | string>>;
  no_ammo_sound: string;
}

interface Specialattack2 {
  id?: string;
  cooldown: number;
  damage_max_instance?: Damagemaxinstance2[];
  type?: string;
  max_range?: number;
}

interface Startingammo {
  rock?: number;
  acidic_bore?: number;
  556?: number;
  '40x46mm_m433'?: number;
  napalm?: number;
  nail?: number;
  water?: number;
  '8mm_caseless'?: number;
  shot_beanbag?: number;
  '762_51'?: number;
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
  groups: Array<Array<number | string>>;
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
  groups: Array<Array<number | string>>;
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
  groups: Array<Array<number | string>>;
  '//': string;
}

interface Emitfield {
  emit_id: string;
  delay: string;
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

interface Pathsettings {
  '//min_dist'?: number;
  max_dist?: number;
}

interface Specialattacks112 {
  type: string;
  spell_data: Spelldata;
  cooldown: number;
}

interface Specialattacks109 {
  type: string;
  cooldown: number;
  damage_max_instance: Damagemaxinstance2[];
}

interface Specialattacks107 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  fake_per: number;
  require_targeting_player: boolean;
  ranges: Array<Array<number | string>>;
  description: string;
}

interface Specialattacks105 {
  type: string;
  spell_data: Spelldata3;
  cooldown: number;
  monster_message: string;
}

interface Spelldata3 {
  id: string;
  hit_self: boolean;
}

interface Specialattacks102 {
  type: string;
  cooldown: number;
  move_cost: number;
  max_range: number;
  min_consider_range: number;
}

interface Specialattacks101 {
  type: string;
  cooldown: number;
  gun_type: string;
  fake_skills: Array<Array<number | string>>;
  ranges: Array<Array<number | string>>;
  targeting_sound: string;
  description: string;
}

interface Specialattacks100 {
  type: string;
  cooldown: number;
  min_mul: number;
  '//': string;
}

interface Specialattacks96 {
  type: string;
  cooldown: number;
  max_range: number;
  allow_no_target: boolean;
}

interface Specialattacks95 {
  type: string;
  cooldown: number;
  max_range?: number;
  allow_no_target?: boolean;
}

interface Specialattacks93 {
  type: string;
  cooldown: number;
  accuracy: number;
  no_infection_chance: number;
}

interface Specialattacks87 {
  type: string;
  cooldown: number;
}

interface Specialattacks86 {
  '//': string;
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  ranges: Array<Array<number | string>>;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  laser_lock: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
  no_ammo_sound: string;
}

interface Specialattacks85 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  no_ammo_sound: string;
  ranges: Array<Array<number | string>>;
}

interface Specialattacks84 {
  type?: string;
  cooldown?: number;
  max_range?: number;
  min_consider_range?: number;
  max_consider_range?: number;
  damage_max_instance?: Damagemaxinstance2[];
  id?: string;
}

interface Specialattacks83 {
  type: string;
  cooldown: number;
  damage_max_instance: Damagemaxinstance3[];
}

interface Specialattacks82 {
  type: string;
  cooldown: number;
  gun_type: string;
  ranges: Array<Array<number | string>>;
  targeting_sound: string;
  description: string;
}

interface Specialattacks81 {
  type: string;
  cooldown: number;
  gun_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  ranges: Array<Array<number | string>>;
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  targeting_cost: number;
  laser_lock: boolean;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks46 {
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

interface Specialattacks44 {
  type: string;
  cooldown: number;
  gun_type: string;
  fake_skills: Array<Array<number | string>>;
  ranges: Array<Array<number | string>>;
}

interface Specialattacks43 {
  type: string;
  cooldown: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  no_ammo_sound: string;
  ranges: Array<Array<number | string>>;
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks42 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  ranges: Array<Array<number | string>>;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  laser_lock: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
  no_ammo_sound: string;
}

interface Specialattacks38 {
  type: string;
  spell_data: Spelldata2;
  cooldown: number;
}

interface Spelldata2 {
  id: string;
  min_level: number;
}

interface Specialattacks37 {
  type: string;
  cooldown: number;
  gun_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  ranges: Array<Array<number | string>>;
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks36 {
  type: string;
  move_cost: number;
  cooldown: number;
  gun_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  ranges: Array<Array<number | string>>;
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks35 {
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

interface Specialattacks34 {
  type: string;
  cooldown: number;
  max_range?: number;
  damage_max_instance?: Damagemaxinstance2[];
}

interface Specialattacks30 {
  type: string;
  cooldown: number;
  accuracy: number;
  damage_max_instance: Damagemaxinstance2[];
}

interface Specialattacks28 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  ranges: Array<Array<number | string>>;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  laser_lock: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  no_ammo_sound: string;
}

interface Specialattacks27 {
  type: string;
  cooldown: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  no_ammo_sound: string;
  ranges: Array<Array<number | string>>;
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  laser_lock: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks26 {
  type: string;
  cooldown: number;
  gun_type: string;
  ranges: Array<Array<number | string>>;
  description: string;
}

interface Specialattacks25 {
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

interface Specialattacks22 {
  id: string;
  damage_max_instance: Damagemaxinstance2[];
}

interface Specialattacks21 {
  id: string;
  cooldown: number;
  damage_max_instance: Damagemaxinstance2[];
}

interface Specialattacks20 {
  type: string;
  cooldown: number;
  move_cost?: number;
  gun_type?: string;
  fake_skills?: Array<Array<number | string>>;
  fake_dex?: number;
  fake_per?: number;
  require_targeting_player?: boolean;
  ranges?: Array<Array<number | string>>;
  description?: string;
}

interface Specialattacks19 {
  type: string;
  cooldown: number;
  move_cost: number;
  gun_type: string;
  ammo_type: string;
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  no_ammo_sound: string;
  ranges: Array<Array<number | string>>;
  require_targeting_player: boolean;
  require_targeting_npc: boolean;
  require_targeting_monster: boolean;
  targeting_cost: number;
  targeting_timeout_extend: number;
  targeting_sound: string;
  targeting_volume: number;
}

interface Specialattacks17 {
  type: string;
  spell_data: Spelldata;
  cooldown: number;
  monster_message: string;
}

interface Specialattacks14 {
  type: string;
  cooldown: number;
  min_mul: number;
}

interface Specialattacks13 {
  type: string;
  cooldown: number;
  gun_type: string;
  fake_skills: Array<Array<number | string>>;
  ranges: Array<Array<number | string>>;
  require_sunlight: boolean;
}

interface Specialattacks12 {
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

interface Specialattacks11 {
  type: string;
  cooldown: number;
  gun_type: string;
  ranges: Array<Array<number | string>>;
  targeting_sound: string;
}

interface Specialattacks9 {
  id: string;
  damage_max_instance: Damagemaxinstance[];
}

interface Specialattacks8 {
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
  fake_skills: Array<Array<number | string>>;
  fake_dex: number;
  ranges: Array<Array<number | string>>;
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
