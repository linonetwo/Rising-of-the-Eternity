export interface ITool {
  id?: string;
  type: 'TOOL';
  name: Name | Name2 | Name3 | string;
  description?: string;
  weight?: string;
  volume?: string;
  price?: number;
  price_postapoc?: number;
  to_hit?: Tohit | number;
  bashing?: number;
  material?: string[] | string;
  symbol?: string;
  color?: string;
  qualities?: Array<Array<number | string>>;
  use_action?:
    | Useaction
    | Useaction2
    | string[]
    | Useaction4[]
    | Useaction5[]
    | Useaction6
    | Useaction7
    | Useaction5
    | Useaction9
    | Useaction10
    | Useaction11
    | Useaction12
    | Useaction13
    | Useaction14
    | Useaction15
    | Useaction16
    | Useaction17
    | Useaction18[]
    | Useaction19[]
    | Useaction20
    | Useaction21
    | Useaction22[]
    | Useaction18
    | Useaction24
    | Useaction25
    | Array<Useaction26 | Useaction262 | string>
    | Useaction27
    | Array<Useaction28 | string>
    | Array<Useaction29 | string>
    | Useaction30
    | Useaction31[]
    | Array<Useaction32 | string>
    | Useaction33
    | Useaction34
    | Useaction35
    | Useaction36
    | Useaction37
    | Useaction38[]
    | Useaction39
    | Useaction40
    | Useaction41
    | Useaction42
    | Useaction43
    | Useaction44
    | Useaction45[]
    | Useaction46
    | Useaction47[]
    | Useaction48
    | Useaction49
    | Array<Useaction27 | Useaction502 | string>
    | Useaction51
    | Useaction52
    | Useaction53
    | Array<Useaction34 | Useaction262 | Useaction543 | string>
    | Useaction55
    | Useaction29
    | Useaction57
    | Useaction28
    | Useaction59
    | Useaction60
    | Useaction61
    | Useaction62
    | Useaction63
    | Useaction64
    | Useaction65[]
    | Useaction66
    | Useaction67
    | Useaction68
    | Useaction69
    | Useaction70
    | Useaction71
    | Useaction72
    | Useaction73
    | Array<Useaction24 | string>
    | Useaction502
    | Useaction76
    | Useaction77
    | Useaction78
    | Useaction65
    | Useaction80
    | Useaction81
    | Useaction82[]
    | Useaction83
    | Useaction84;
  category?: string;
  explode_in_fire?: boolean;
  explosion?: Explosion5;
  flags?: string[];
  'copy-from'?: string;
  initial_charges?: number;
  max_charges?: number;
  turns_per_charge?: number;
  '//'?: string;
  charges_per_use?: number;
  sub?: string;
  relic_data?: Relicdata;
  pocket_data?: Pocketdatum[];
  revert_to?: string;
  emits?: string[];
  techniques?: string[];
  ammo?: string[] | string;
  abstract?: string;
  proportional?: Proportional;
  cutting?: number;
  integral_volume?: string;
  gunmod_data?: Gunmoddata;
  looks_like?: string;
  countdown_action?: Countdownaction;
  countdown_interval?: number;
  power_draw?: number;
  charge_factor?: number;
  ascii_picture?: string;
  rand_charges?: number[];
  extend?: Extend;
  magazines?: Array<Array<string[] | string>>;
  repairs_like?: string;
  longest_side?: string;
  delete?: Delete;
  revert_msg?: string;
  properties?: string[][];
  snippet_category?: Snippetcategory[];
  min_skills?: Array<Array<number | string>>;
  thrown_damage?: Throwndamage[];
  relative?: Relative;
}

interface Relative {
  volume: string;
  weight: string;
}

interface Throwndamage {
  damage_type: string;
  amount: number;
}

interface Snippetcategory {
  id: string;
  text: string;
}

interface Delete {
  qualities: Array<Array<number | string>>;
}

interface Extend {
  flags: string[];
}

interface Countdownaction {
  menu_text?: string;
  type: string;
  target: string;
}

interface Gunmoddata {
  location: string;
  mod_targets: string[];
  install_time: string;
  dispersion_modifier?: number;
  mode_modifier?: Array<Array<string[] | number | string>>;
}

interface Proportional {
  cutting?: number;
  price: number;
  weight?: number;
  volume?: number;
}

interface Pocketdatum {
  pocket_type?: string;
  holster?: boolean;
  ammo_restriction?: Ammorestriction;
  max_contains_volume?: string;
  max_contains_weight?: string;
  item_restriction?: string[];
  rigid?: boolean;
  max_item_length?: string;
  watertight?: boolean;
  magazine_well?: string;
  airtight?: boolean;
  moves?: number;
  flag_restriction?: string[];
  open_container?: boolean;
  '//'?: string;
}

interface Ammorestriction {
  crystallized_mana?: number;
  thread?: number;
  charcoal?: number;
  money?: number;
  candle_wax?: number;
  plutonium?: number;
  esbit?: number;
  gasoline?: number;
  tinder?: number;
  lamp_oil?: number;
  conc_alcohol?: number;
  butane?: number;
  match?: number;
  extinguishing_agent?: number;
  fish_bait?: number;
  glowstick_juice?: number;
  flare_nitrate?: number;
  anesthetic?: number;
  albuterol?: number;
  ampoule?: number;
  oxygen?: number;
  permanent_ink?: number;
  aerosol_paint?: number;
  black_pen_ink?: number;
  graphite?: number;
  blue_pen_ink?: number;
  red_pen_ink?: number;
  green_pen_ink?: number;
  soap?: number;
  tape?: number;
}

interface Relicdata {
  charge_info?: Chargeinfo;
  passive_effects?: Passiveeffect[];
}

interface Passiveeffect {
  has?: string;
  condition?: string;
  values?: Value[];
  hit_you_effect?: Hityoueffect[];
  id?: string;
  mutations?: string[];
}

interface Hityoueffect {
  id: string;
  hit_self: boolean;
}

interface Value {
  value: string;
  add: number;
}

interface Chargeinfo {
  recharge_type: string;
  time: string;
  regenerate_ammo: boolean;
}

interface Explosion5 {
  power: number;
  shrapnel?: Shrapnel | Shrapnel2 | Shrapnel3 | number;
  '//'?: string;
  distance_factor?: number;
  fire?: boolean;
}

interface Shrapnel3 {
  casing_mass: number;
  fragment_mass: number;
  recovery: number;
}

interface Useaction84 {
  type: string;
  fields_type: string;
  fields_radius: number;
  fields_min_intensity: number;
  fields_max_intensity: number;
  sound_volume: number;
  sound_msg: string;
  no_deactivate_msg: string;
  explosion: Explosion3;
}

interface Useaction83 {
  type: string;
  msg: string;
  target: string;
}

interface Useaction82 {
  target?: string;
  msg?: string;
  menu_text?: string;
  active?: boolean;
  need_charges?: number;
  need_charges_msg?: string;
  type: string;
  moves?: number;
}

interface Useaction81 {
  type: string;
  msg: string;
  target: string;
  active: boolean;
  need_charges: number;
  need_charges_msg: string;
}

interface Useaction80 {
  type: string;
  allow_under_player: boolean;
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
}

interface Useaction78 {
  type: string;
  moves: number;
  moves_slow: number;
}

interface Useaction77 {
  type: string;
  sound_volume: number;
  sound_msg: string;
  no_deactivate_msg: string;
  explosion: Explosion4;
}

interface Explosion4 {
  power: number;
  '//': string;
  shrapnel: number;
}

interface Useaction76 {
  type: string;
  no_deactivate_msg: string;
  sound_volume: number;
  sound_msg: string;
  explosion: Explosion;
}

interface Useaction73 {
  target: string;
  msg: string;
  active: boolean;
  moves: number;
  type: string;
  transform_age: number;
  not_ready_msg: string;
}

interface Useaction72 {
  type: string;
  bury_question: string;
  bury: Bury;
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
}

interface Useaction71 {
  type: string;
  spell_id: string;
  no_fail: boolean;
  level: number;
}

interface Useaction70 {
  target: string;
  msg: string;
  target_charges: number;
  target_ammo: string;
  menu_text: string;
  type: string;
}

interface Useaction69 {
  type: string;
  monster_id: string;
  friendly_msg: string;
  hostile_msg: string;
  difficulty: number;
  moves: number;
  skills: string[];
}

interface Useaction68 {
  target: string;
  msg: string;
  menu_text: string;
  type: string;
}

interface Useaction67 {
  type: string;
  npc_class_id: string;
  summon_msg: string;
  place_randomly: boolean;
  moves: number;
}

interface Useaction66 {
  target: string;
  msg: string;
  active: boolean;
  need_fire: number;
  need_charges: number;
  need_charges_msg: string;
  type: string;
}

interface Useaction65 {
  type: string;
  verb: string;
  gerund: string;
  on_terrain: boolean;
  material_restricted: boolean;
}

interface Useaction64 {
  type: string;
  target: string;
  msg: string;
  target_charges: number;
  menu_text: string;
}

interface Useaction63 {
  need_wielding: boolean;
  target: string;
  msg: string;
  target_charges: number;
  active: boolean;
  menu_text: string;
  type: string;
}

interface Useaction62 {
  type: string;
  allow_underwater: boolean;
  bury_question: string;
  bury: Bury;
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
}

interface Bury {
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
}

interface Useaction61 {
  type: string;
  max_weight: string;
}

interface Useaction60 {
  type: string;
  monster_id: string;
  friendly_msg: string;
  hostile_msg: string;
  '//': string;
  difficulty: number;
  moves: number;
  skills: string[];
}

interface Useaction59 {
  type: string;
  draw_explosion_radius: number;
  draw_explosion_color: string;
  scrambler_blast_radius: number;
  sound_volume: number;
  sound_msg: string;
  no_deactivate_msg: string;
}

interface Useaction57 {
  type: string;
  no_deactivate_msg: string;
  sound_volume: number;
  sound_msg: string;
  explosion: Explosion2;
}

interface Useaction55 {
  target: string;
  msg: string;
  moves: number;
  type: string;
  transform_age: number;
  not_ready_msg: string;
  '//': string;
}

interface Useaction543 {
  type: string;
  target: string;
  active: boolean;
  msg: string;
  menu_text: string;
  moves: number;
}

interface Useaction53 {
  type: string;
  vehicle_name: string;
  unfold_msg: string;
  moves: number;
}

interface Useaction52 {
  type: string;
  draw_explosion_radius: number;
  draw_explosion_color: string;
  emp_blast_radius: number;
  sound_volume: number;
  sound_msg: string;
  explosion: Explosion;
  no_deactivate_msg: string;
}

interface Useaction51 {
  type: string;
  target_id: string;
  moves: number;
  noise: number;
  success_message: string;
  lacks_fuel_message: string;
}

interface Useaction502 {
  type: string;
  moves: number;
  noise: number;
  noise_message: string;
  noise_id: string;
  noise_variant: string;
  use_message: string;
  no_charges_message: string;
  '//': string;
}

interface Useaction49 {
  target: string;
  msg: string;
  active: boolean;
  need_fire: number;
  need_fire_msg: string;
  need_charges: number;
  need_charges_msg: string;
  type: string;
}

interface Useaction48 {
  type: string;
  needs_solid_neighbor: boolean;
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
}

interface Useaction47 {
  type: string;
  moves?: number;
  target?: string;
  msg?: string;
  active?: boolean;
  menu_text?: string;
}

interface Useaction46 {
  type: string;
  draw_explosion_radius: number;
  draw_explosion_color: string;
  emp_blast_radius: number;
  sound_volume: number;
}

interface Useaction45 {
  type: string;
  item_action_type?: string;
  materials: string[];
  skill: string;
  tool_quality?: number;
  cost_scaling?: number;
  move_cost?: number;
  clothing_mods?: string[];
}

interface Useaction44 {
  type: string;
  vehicle_name: string;
  tools_needed: Toolsneeded;
  unfold_msg: string;
  moves: number;
}

interface Toolsneeded {
  hand_pump: number;
}

interface Useaction43 {
  need_wielding: boolean;
  target: string;
  msg: string;
  target_charges: number;
  active: boolean;
  moves: number;
  need_fire: number;
  menu_text: string;
  type: string;
}

interface Useaction42 {
  type: string;
  fields_type: string;
  fields_radius: number;
  fields_min_intensity: number;
  fields_max_intensity: number;
  sound_volume: number;
  sound_msg: string;
  no_deactivate_msg: string;
}

interface Useaction41 {
  type: string;
  fields_type: string;
  fields_radius: number;
  fields_min_intensity: number;
  fields_max_intensity: number;
  emp_blast_radius: number;
  sound_volume: number;
  sound_msg: string;
  no_deactivate_msg: string;
}

interface Useaction40 {
  need_wielding: boolean;
  target: string;
  msg: string;
  target_charges: number;
  active: boolean;
  need_fire: number;
  menu_text: string;
  type: string;
}

interface Useaction39 {
  target: string;
  msg: string;
  menu_text: string;
  need_charges: number;
  need_charges_msg: string;
  type: string;
}

interface Useaction38 {
  type: string;
  item_action_type?: string;
  materials?: string[];
  skill?: string;
  cost_scaling?: number;
  move_cost?: number;
  flame?: boolean;
}

interface Useaction37 {
  type: string;
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
}

interface Useaction36 {
  target: string;
  msg: string;
  active: boolean;
  need_fire: number;
  menu_text: string;
  type: string;
}

interface Useaction35 {
  type: string;
  monster_id: string;
  friendly_msg: string;
  hostile_msg: string;
  difficulty: number;
  moves: number;
  place_randomly: boolean;
  skills: string[];
}

interface Useaction34 {
  type: string;
}

interface Useaction33 {
  target: string;
  msg: string;
  rand_target_charges: number[];
  active: boolean;
  menu_text: string;
  type: string;
}

interface Useaction32 {
  type: string;
  move_cost: number;
  used_up_item: Usedupitem;
}

interface Usedupitem {
  id: string;
  quantity: number;
  flags: string[];
}

interface Useaction31 {
  type: string;
  moves?: number;
  target?: string;
  msg?: string;
  menu_text?: string;
}

interface Useaction30 {
  type: string;
  volume: number;
  fun: number;
  fun_bonus: number;
  speed_penalty: number;
  description_frequency: number;
  player_descriptions: string[];
}

interface Useaction29 {
  target: string;
  msg: string;
  active: boolean;
  type: string;
}

interface Useaction28 {
  target: string;
  msg: string;
  active: boolean;
  menu_text: string;
  type: string;
}

interface Useaction27 {
  type: string;
  moves: number;
  moves_slow: number;
  need_sunlight: boolean;
}

interface Useaction262 {
  flame: boolean;
  type: string;
}

interface Useaction26 {
  type: string;
  item_action_type: string;
  materials: string[];
  skill: string;
  cost_scaling: number;
  move_cost: number;
}

interface Useaction25 {
  type: string;
  sound_volume: number;
  sound_msg: string;
  no_deactivate_msg: string;
  explosion: Explosion3;
}

interface Explosion3 {
  power: number;
}

interface Useaction24 {
  target: string;
  msg: string;
  menu_text: string;
  active: boolean;
  need_charges: number;
  need_charges_msg: string;
  type: string;
}

interface Useaction22 {
  type: string;
  noise_chance?: number;
  noise_message?: string;
  voluntary_extinguish_message?: string;
  charges_extinguish_message?: string;
  water_extinguish_message?: string;
  moves?: number;
}

interface Useaction21 {
  type: string;
  do_flashbang: boolean;
  sound_volume: number;
  sound_msg: string;
  no_deactivate_msg: string;
}

interface Useaction20 {
  type: string;
  target_id: string;
  moves: number;
  noise: number;
  success_chance: number;
  success_message: string;
  failure_message: string;
  lacks_fuel_message: string;
}

interface Useaction19 {
  type: string;
  noise?: number;
  noise_chance?: number;
  noise_message?: string;
  auto_extinguish_chance?: number;
  auto_extinguish_message?: string;
  voluntary_extinguish_message?: string;
  charges_extinguish_message?: string;
  water_extinguish_message?: string;
  moves?: number;
}

interface Useaction18 {
  type: string;
  item_action_type: string;
  materials: string[];
  skill: string;
  tool_quality: number;
  cost_scaling: number;
  move_cost: number;
}

interface Useaction17 {
  type: string;
  monster_id: string;
  difficulty: number;
  moves: number;
  skills: string[];
}

interface Useaction16 {
  type: string;
  spell_id: string;
  no_fail: boolean;
  level: number;
  need_wielding: boolean;
}

interface Useaction15 {
  type: string;
  radius: number;
  broken_type: string;
  wall: string;
  floor: string;
  door_opened: string;
  door_closed: string;
}

interface Useaction14 {
  target: string;
  msg: string;
  target_charges: number;
  active: boolean;
  need_fire: number;
  menu_text: string;
  type: string;
}

interface Useaction13 {
  type: string;
  outer_layer_trap: string;
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
}

interface Useaction12 {
  type: string;
  radius: number;
  broken_type: string;
  wall: string;
  floor: string;
  floor_center: string;
  door_opened: string;
  door_closed: string;
}

interface Useaction11 {
  target: string;
  msg: string;
  target_charges: number;
  active: boolean;
  menu_text: string;
  type: string;
}

interface Useaction10 {
  type: string;
  no_deactivate_msg: string;
  explosion: Explosion2;
}

interface Explosion2 {
  power: number;
  shrapnel: Shrapnel2;
}

interface Shrapnel2 {
  casing_mass: number;
  fragment_mass: number;
  drop: string;
  recovery: number;
}

interface Useaction9 {
  target: string;
  msg: string;
  active: boolean;
  need_charges: number;
  type: string;
}

interface Useaction7 {
  target: string;
  msg: string;
  need_fire: number;
  need_fire_msg: string;
  menu_text: string;
  type: string;
}

interface Useaction6 {
  type: string;
  no_deactivate_msg: string;
  explosion: Explosion;
}

interface Explosion {
  power: number;
  shrapnel: Shrapnel;
}

interface Shrapnel {
  casing_mass: number;
  fragment_mass: number;
}

interface Useaction5 {
  type: string;
  moves: number;
}

interface Useaction4 {
  type: string;
  moves?: number;
  moves_slow?: number;
  target?: string;
  msg?: string;
  active?: boolean;
  menu_text?: string;
}

interface Useaction2 {
  type: string;
  allow_underwater: boolean;
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
}

interface Useaction {
  type: string;
  furn_type: string;
}

interface Tohit {
  grip: string;
  length: string;
  surface: string;
  balance: string;
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
