export enum CDDA_JSON_TYPES {
  MOD_INFO = 'MOD_INFO',
  MONSTER_BLACKLIST = 'MONSTER_BLACKLIST',
  relic_procgen_data = 'relic_procgen_data',
  ascii_art = 'ascii_art',
  profession = 'profession',
  scenario = 'scenario',
  start_location = 'start_location',
  furniture = 'furniture',
  gate = 'gate',
  terrain = 'terrain',
  trap = 'trap',
  item_group = 'item_group',
  ammunition_type = 'ammunition_type',
  AMMO = 'AMMO',
  ARMOR = 'ARMOR',
  BIONIC_ITEM = 'BIONIC_ITEM',
  BOOK = 'BOOK',
  GENERIC = 'GENERIC',
  TOOL = 'TOOL',
  COMESTIBLE = 'COMESTIBLE',
  GUNMOD = 'GUNMOD',
  GUN = 'GUN',
  TOOL_ARMOR = 'TOOL_ARMOR',
  harvest = 'harvest',
  SPELL = 'SPELL',
  MONSTER_FACTION = 'MONSTER_FACTION',
  monstergroup = 'monstergroup',
  MONSTER = 'MONSTER',
  SPECIES = 'SPECIES',
  speech = 'speech',
  dream = 'dream',
  mutation_category = 'mutation_category',
  mutation = 'mutation',
  talk_topic = 'talk_topic',
  faction = 'faction',
  mission_definition = 'mission_definition',
  npc_class = 'npc_class',
  npc = 'npc',
  trait_group = 'trait_group',
  mapgen = 'mapgen',
  ter_furn_transform = 'ter_furn_transform',
  overmap_special = 'overmap_special',
  overmap_terrain = 'overmap_terrain',
  region_overlay = 'region_overlay',
  city_building = 'city_building',
  requirement = 'requirement',
  recipe = 'recipe',
  recipe_category = 'recipe_category',
  uncraft = 'uncraft',
  enchantment = 'enchantment',
  achievement = 'achievement',
  ammo_effect = 'ammo_effect',
  bionic = 'bionic',
  clothing_mod = 'clothing_mod',
  effect_type = 'effect_type',
  emit = 'emit',
  field_type = 'field_type',
  json_flag = 'json_flag',
  martial_art = 'martial_art',
  material = 'material',
  scent_type = 'scent_type',
  skill = 'skill',
  snippet = 'snippet',
  technique = 'technique',
  vehicle_part = 'vehicle_part',
  overlay_order = 'overlay_order',
  mod_tileset = 'mod_tileset',
  palette = 'palette',
  event_statistic = 'event_statistic',
  event_transformation = 'event_transformation',
}

interface PocketDaum {
  pocket_type?: string;
  max_contains_volume?: string;
  max_contains_weight?: string;
  moves?: number;
  max_item_length?: string;
  magazine_well?: string;
  rigid?: boolean;
  max_item_volume?: string;
  watertight?: boolean;
  holster?: boolean;
  flag_restriction?: string[];
  min_item_volume?: string;
  ammo_restriction?: AmmoRestriction;
}

export interface AmmoRestriction {
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
  rock?: number;
  '40x46mm'?: number;
  '40x53mm'?: number;
  '22'?: number;
  '50'?: number;
  '223'?: number;
  '300'?: number;
  '308'?: number;
  '762'?: number;
  '3006'?: number;
  '4570'?: number;
  '270win'?: number;
  '300blk'?: number;
  '5x50'?: number;
  '545x39'?: number;
  '762R'?: number;
  '8x40mm'?: number;
  '700nx'?: number;
  flintlock?: number;
  '36paper'?: number;
  '44paper'?: number;
  blunderbuss?: number;
  shotcanister?: number;
  shotpaper?: number;
  '410shot'?: number;
  shot?: number;
  '20x66mm'?: number;
  signal_flare?: number;
  arrow?: number;
  bolt?: number;
  pebble?: number;
  BB?: number;
  '12mm'?: number;
  metal_rail?: number;
  stimpack_ammo?: number;
  ampoule?: number;
  paintball?: number;
}

type Name = string | { str: string; str_pl?: string };
type Color = string | string[];
type RangeOrFixed = number | number[];
interface IntermittentActivation {
  effects: Effect[];
}

interface Effect {
  frequency: string;
  spell_effects: SpellEffect[];
}

interface Effect2 {
  id: string;
  duration: number;
}

interface Extend {
  effects?: string[];
  flags?: string[];
}

interface Proportional {
  weight?: number;
  volume?: number;
  price?: number;
  damage?: Damage;
  recoil?: number;
  loudness?: number;
  dispersion?: number;
  range?: number;
  encumbrance?: number;
  warmth?: number;
}

interface SnippetCategory {
  id: string;
  text: string;
}

interface ArmorPortionDaum {
  covers?: string[];
  coverage?: number;
  encumbrance: RangeOrFixed;
  sided?: boolean;
}

interface Delete {
  effects?: string[];
  casing?: string;
  flags?: string[];
}

interface Relative {
  range?: number;
  damage?: Damage;
  dispersion?: number;
  price?: number;
  recoil?: number;
  bashing?: number;
  material_thickness?: number;
}

interface Explosion {
  power: number;
  shrapnel: number;
}

interface SeedData {
  fruit: string;
  '//': string;
  plant_name: string;
  grow: string;
}

interface RelicData {
  passive_effects: PassiveEffect[];
}

interface PassiveEffect {
  mutations: string[];
}

interface SpellEffect {
  id: string;
}

interface ChargeType {
  weight: number;
  charges: Charges;
  charges_per_use: ChargesPerUse;
  max_charges: MaxCharges;
  recharge_type: string;
  time: string[];
}

interface Charges {
  range: number[];
  power: number;
}

interface ChargesPerUse {
  range: number[];
  power: number;
}

interface MaxCharges {
  range: number[];
  power: number;
}

interface ActiveProcgenValue {
  weight: number;
  spell_id: string;
  base_power: number;
}

interface PassiveMultProcgenValue {
  weight: number;
  min_value: number;
  max_value: number;
  type: string;
  increment: number;
  power_per_increment: number;
}

interface PassiveAddProcgenValue {
  weight: number;
  min_value: number;
  max_value: number;
  type: string;
  increment: number;
  power_per_increment: number;
}

interface TypeWeight {
  weight: number;
  value: string;
}

interface Damage {
  damage_type: string;
  amount?: number;
  armor_penetration?: number;
  constant_damage_multiplier?: number;
}

interface DropAction {
  type: string;
  emits: string[];
  scale_qty: boolean;
}

interface Bash {
  furn_set?: string;
  tent_centers?: string[];
  collapse_radius?: number;
  str_min: number;
  str_max: number;
  sound?: string;
  sound_fail?: string;
  ter_set: string;
  items: Item[] | string;
  sound_vol?: number;
  sound_fail_vol?: number;
  ter_set_bashed_from_above?: string;
  str_min_supported?: number;
  bash_below?: boolean;
  '//'?: string;
  explosive?: number;
  str_min_blocked?: number;
  str_max_blocked?: number;
}

interface Deconstruct {
  deconstruct_above?: boolean;
  items: Item[];
  furn_set?: string;
}

interface Collection {
  item?: string;
  count?: number[];
  prob?: number;
  charges: RangeOrFixed;
  group?: string;
  'charges-min'?: number;
  distribution?: Distribution[];
  damage?: number[];
  'charges-max'?: number;
  collection?: Collection[];
  'container-item'?: string;
  sealed?: boolean;
}

interface Item {
  weight?: number;
  item: string;
  count?: RangeOrFixed;
  charges?: RangeOrFixed;
  prob?: number;
  'container-item'?: string;
  sealed?: boolean;
  'charges-min'?: number;
  'charges-max'?: number;
  'damage-min'?: number;
  'damage-max'?: number;
  distribution?: Distribution;
  group?: string;
  collection?: Collection[];
}
type Distribution = Item[];

type ItemShortHand = [string, number];
type ItemShortHandEqual = string[];

interface PlantData {
  transform: string;
  base?: string;
}

interface Workbench {
  multiplier: number;
  mass: number;
  volume: string;
}

interface HarvestBySeason {
  seasons: string[];
  entries: Entry[];
}

interface Entry {
  drop: string;
  base_num?: number[];
  item?: string;
  prob?: number;
  group?: string;
  'charges-min'?: number;
  count: RangeOrFixed;
  charges: RangeOrFixed;
  'container-item'?: string;
  sealed?: boolean;
  distribution?: Distribution[];
  'count-min'?: number;
  'count-max'?: number;
  collection?: Collection[];
  'ammo-item'?: string;
  'charges-max'?: number;
  'custom-flags'?: string[];
  'damage-min'?: number;
  'damage-max'?: number;
  'contents-item'?: string;
  'contents-group'?: string;
  damage: RangeOrFixed;
  '//'?: string;
}

// ██╗   ██╗███████╗███████╗ █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗
// ██║   ██║██╔════╝██╔════╝██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║
// ██║   ██║███████╗█████╗  ███████║██║        ██║   ██║██║   ██║██╔██╗ ██║
// ██║   ██║╚════██║██╔══╝  ██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║
// ╚██████╔╝███████║███████╗██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║
//  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

interface ChangeScent {
  type: 'change_scent';
  scent_typeid: string;
  moves: number;
  duration: string;
  charges_to_use: number;
  effects: Effect2[];
}

interface DeployFurn {
  type: 'deploy_furn';
  furn_type: string;
}

interface Firestarter {
  type: 'firestarter';
  moves?: number;
  moves_slow?: number;
  need_sunlight?: boolean;
}

interface DelayedTransform {
  target: string;
  msg: string;
  moves: number;
  type: 'delayed_transform';
  transform_age: number;
  not_ready_msg: string;
  '//'?: string;
  container?: string;
  target_charges?: number;
  active?: boolean;
}

interface Unpack {
  type: 'unpack';
  group: string;
  items_fit?: boolean;
  filthy_volume_threshold: string;
}

interface Transform {
  target: string;
  msg: string;
  active?: boolean;
  menu_text?: string;
  type: 'transform';
  need_fire?: number;
  rand_target_charges?: number[];
  target_charges?: number;
  need_charges?: number;
  need_charges_msg?: string;
  need_worn?: boolean;
  moves?: number;
  qualities_needed?: QualitiesNeeded;
  need_wielding?: boolean;
  target_ammo?: string;
  need_fire_msg?: string;
}

interface QualitiesNeeded {
  SCREW_FINE: number;
}

interface CastSpell {
  type: 'cast_spell';
  spell_id: string;
  no_fail: boolean;
  level: number;
}

interface ExplosionUseAction {
  type: 'explosion';
  sound_volume?: number;
  sound_msg?: string;
  no_deactivate_msg?: string;
  explosion?: Explosion;
  draw_explosion_radius?: number;
  draw_explosion_color?: string;
  emp_blast_radius?: number;
  do_flashbang?: boolean;
  fields_type?: string;
  fields_radius?: number;
  fields_min_intensity?: number;
  fields_max_intensity?: number;
  scrambler_blast_radius?: number;
  power?: number;
  shrapnel?: Shrapnel;
}

interface Shrapnel {
  casing_mass: number;
  fragment_mass: number;
  drop?: string;
  recovery?: number;
}

interface PlaceMonster {
  type: 'place_monster';
  monster_id: string;
  friendly_msg?: string;
  hostile_msg?: string;
  '//'?: string;
  difficulty: number;
  moves: number;
  skills: string[];
  place_randomly?: boolean;
}

interface FireweaponOff {
  type: 'fireweapon_off';
  target_id: string;
  moves: number;
  noise: number;
  success_chance?: number;
  success_message: string;
  failure_message?: string;
  lacks_fuel_message: string;
}

interface Mutagen {
  type: 'mutagen';
  is_weak?: boolean;
  mutation_category?: string;
  is_strong?: boolean;
}

interface Holster {
  type: 'holster';
  holster_prompt?: string;
  holster_msg?: string;
}

interface Manualnoise {
  type: 'manualnoise';
  no_charges_message: string;
  use_message: string;
  '//': string;
  noise_message: string;
  noise_id: string;
  noise_variant: string;
  noise: number;
  moves: number;
}

interface RevealMap {
  type: 'reveal_map';
  radius: number;
  terrain: Array<string | OMTerrain>;
  message: string;
}

interface OMTerrain {
  om_terrain: string;
  om_terrain_match_type: string;
}

interface ConsumeDrug {
  type: 'consume_drug';
  activation_message?: string;
  effects?: Effect2[];
  moves?: number;
  used_up_item?: string;
  stat_adjustments?: StatAdjustments;
  fields_produced?: FieldsProduced;
  charges_needed?: ChargesNeeded;
  tools_needed?: ToolsNeeded;
  vitamins?: ItemShortHand[];
}

interface StatAdjustments {
  hunger: number;
  thirst?: number;
}

interface FieldsProduced {
  fd_weedsmoke?: number;
  fd_cigsmoke?: number;
  fd_cracksmoke?: number;
}

interface ChargesNeeded {
  fire: number;
}

interface ToolsNeeded {
  apparatus?: number;
  syringe?: number;
  dab_pen_on?: number;
}

interface Heal {
  type: 'heal';
  bandages_power?: number;
  bleed?: number;
  move_cost: number;
  disinfectant_power?: number;
  bite?: number;
  used_up_item?: UsedUpItem;
  effects?: Effect2[];
}

interface UsedUpItem {
  id: string;
  quantity: number;
  charges?: number;
  flags: string[];
}

interface StrongAntibiotic {
  type: string;
}

interface MutagenIv {
  type: 'mutagen_iv';
  mutation_category?: string;
}

interface Ammobelt {
  type: 'ammobelt';
  belt: string;
}

interface PlaceTrap {
  type: 'place_trap';
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
  allow_under_player?: boolean;
  allow_underwater?: boolean;
  bury_question?: string;
  bury?: Bury;
  outer_layer_trap?: string;
  needs_solid_neighbor?: boolean;
}

interface Bury {
  trap: string;
  moves: number;
  practice: number;
  done_message: string;
}

interface UnfoldVehicle {
  type: 'unfold_vehicle';
  vehicle_name: string;
  unfold_msg: string;
  moves: number;
  tools_needed?: ToolsNeeded2;
}

interface ToolsNeeded2 {
  hand_pump: number;
}

interface Countdown {
  type: 'countdown';
  name: string;
  message: string;
}

interface Inscribe {
  type: 'inscribe';
  verb: string;
  gerund: string;
  on_terrain: boolean;
  material_restricted: boolean;
}

interface MusicalInstrument {
  type: 'musical_instrument';
  volume: number;
  fun: number;
  fun_bonus: number;
  speed_penalty: number;
  description_frequency: number;
  player_descriptions: string[];
  npc_descriptions?: string[];
}

interface DeployTent {
  type: 'deploy_tent';
  radius: number;
  broken_type: string;
  wall: string;
  floor: string;
  floor_center?: string;
  door_opened: string;
  door_closed: string;
}

interface RepairItem {
  type: 'repair_item';
  item_action_type: string;
  materials: string[];
  skill: string;
  tool_quality: number;
  cost_scaling: number;
  move_cost: number;
}

interface WeighSelf {
  type: 'weigh_self';
  max_weight: string;
}

type UseAction =
  | ChangeScent
  | DeployFurn
  | Firestarter
  | DelayedTransform
  | Unpack
  | Transform
  | CastSpell
  | ExplosionUseAction
  | PlaceMonster
  | FireweaponOff
  | Mutagen
  | Holster
  | Manualnoise
  | string
  | RevealMap
  | ConsumeDrug
  | Heal
  | StrongAntibiotic
  | MutagenIv
  | Ammobelt
  | PlaceTrap
  | UnfoldVehicle
  | Countdown
  | Inscribe
  | MusicalInstrument
  | DeployTent
  | RepairItem
  | WeighSelf;

type Alias = string | string[];

export type ICDDAJSON =
  | {
      type: CDDA_JSON_TYPES.MOD_INFO;
      id: string;
      name: string;
      authors: string[];
      maintainers: string[];
      description: string;
      category: string;
      dependencies: string[];
    }
  | {
      '//': string;
      type: CDDA_JSON_TYPES.MONSTER_BLACKLIST;
      monsters: string[];
    }
  | {
      type: CDDA_JSON_TYPES.SPELL;
      name: Name;

      id: string;
      description: string;
      valid_targets: string[];
      effect: string;
      effect_str?: string;
      shape: string;
      base_casting_time?: number;
      flags?: string[];
      '//'?: string;
      min_duration?: number;
      max_duration?: number;
      message?: string;
      min_aoe?: number;
      max_aoe?: number;
      field_id?: string;
      field_chance?: number;
      min_field_intensity?: number;
      max_field_intensity?: number;
      min_damage?: number;
      max_damage?: number;
      min_range?: number;
      max_range?: number;
      damage_type?: string;
      extra_effects?: SpellEffect[];
      sound_description?: string;
      sound_type?: string;
      sound_ambient?: boolean;
      sound_id?: string;
      sound_variant?: string;
      field_intensity_variance?: number;
    }
  | {
      id: string;
      type: CDDA_JSON_TYPES.GENERIC;
      name: Name;
      description: string;
      symbol: string;
      volume: string;
      weight: string;
      to_hit?: number;
      bashing?: number;
      longest_side?: string;
      cutting?: number;
    }
  | {
      type: CDDA_JSON_TYPES.enchantment;
      id: string;
      values?: Array<{
        value: string;
        add: number;
      }>;
      has?: string;
      emitter?: string;
      intermittent_activation?: IntermittentActivation;
    }
  | {
      id: string;
      type: CDDA_JSON_TYPES.TOOL;
      name: Name;
      description: string;
      weight: string;
      volume: string;
      material: string[];
      symbol: string;
      relic_data: RelicData;
      color: string;
      flags: string[];
    }
  | {
      type: CDDA_JSON_TYPES.relic_procgen_data;
      id: string;
      charge_types: ChargeType[];
      active_procgen_values: ActiveProcgenValue[];
      passive_mult_procgen_values?: PassiveMultProcgenValue[];
      passive_add_procgen_values: PassiveAddProcgenValue[];
      type_weights: TypeWeight[];
      items: Item[];
    }
  | {
      type: CDDA_JSON_TYPES.ascii_art;
      id: string;
      picture: string[];
    }
  | {
      type: CDDA_JSON_TYPES.furniture;
      id: string;
      name: string;
      description: string;
      symbol: string;
      color?: string;
      move_cost_mod: number;
      coverage?: number;
      light_emitted?: number;
      required_str: number;
      flags?: string[];
      bash?: Bash;
      emissions?: string[];
      '//'?: string;
      deconstruct?: Deconstruct;
      looks_like?: string;
      max_volume?: string;
      bgcolor: Color;
      examine_action?: string;
      plant_data?: PlantData;
      workbench?: Workbench;
      deployed_item?: string;
      harvest_by_season?: HarvestBySeason[];
      comfort?: number;
      floor_bedding_warmth?: number;
      connects_to?: string;
      crafting_pseudo_item?: string;
      surgery_skill_multiplier?: number;
      open?: string;
      close?: string;
      keg_capacity?: number;
      alias?: string;
      bonus_fire_warmth_feet?: number;
    }
  | {
      type: CDDA_JSON_TYPES.terrain;
      id: string;
      name: string;
      description: string;
      symbol: string;
      looks_like?: string;
      color: Color;
      move_cost?: number;
      flags?: string[];
      deconstruct?: Deconstruct;
      bash?: Bash;
      examine_action?: string;
      connects_to?: string;
      roof?: string;
      open?: string;
      close?: string;
      coverage?: number;
      '//'?: string;
      'copy-from'?: string;
      alias: Alias;
      light_emitted?: number;
      transforms_into?: string;
      harvest_by_season?: HarvestBySeason[];
      heat_radiation?: number;
      trap?: string;
      max_volume?: string;
      curtain_transform?: string;
    }
  | {
      type: CDDA_JSON_TYPES.item_group;
      id: string;
      /**
       * maybe mixed content like [{ group: 'wines_worthy', prob: 50 }, [ 'trailmap', 30 ]]
       */
      items?: Item[] | ItemShortHand[] | ItemShortHandEqual;
      ammo?: number;
      magazine?: number;
      subtype?: string;
      entries?: Entry[];
      '//'?: string;
      '//2'?: string;
      '//3'?: string;
      'container-item'?: string;
      on_overflow?: string;
      groups?: Item[] | ItemShortHand[] | ItemShortHandEqual;
      '//TODO'?: string;
    }
  | {
      type: CDDA_JSON_TYPES.AMMO;
      id?: string;
      category?: string;
      price?: number;
      price_postapoc?: number;
      name: Name;
      symbol?: string;
      color?: string;
      description?: string;
      flags?: string[];
      material?: string[];
      effects?: string[];
      volume?: string;
      '//'?: string;
      ammo_type?: string;
      count?: number;
      '//2'?: string;
      weight?: string;
      phase?: string;
      stack_size?: number;
      looks_like?: string;
      container?: string;
      bashing?: number;
      damage?: Damage;
      range?: number;
      dispersion?: number;
      loudness?: number;
      to_hit?: number;
      qualities?: ItemShortHand[];
      recoil?: number;
      sealed?: boolean;
      'copy-from'?: string;
      use_action?: string[];
      '//freezing_point'?: number;
      drop_action?: DropAction;
      drop?: string;
      extend?: Extend;
      cutting?: number;
      casing?: string;
      proportional?: Proportional;
      delete?: Delete;
      relative?: Relative;
      abstract?: string;
      longest_side?: string;
      show_stats?: boolean;
      explode_in_fire?: boolean;
      explosion?: Explosion;
      seed_data?: SeedData;
      critical_multiplier?: number;
    }
  | {
      id?: string;
      type: string;
      name: Name;
      description?: string;
      weight?: string;
      volume?: string;
      price?: number;
      price_postapoc?: number;
      to_hit?: number;
      bashing?: number;
      material?: string[];
      symbol?: string;
      looks_like?: string;
      color?: string;
      covers?: string[];
      sided?: boolean;
      coverage?: number;
      material_thickness?: number;
      flags?: string[];
      category?: string;
      encumbrance?: number;
      warmth?: number;
      environmental_protection?: number;
      techniques?: string[];
      use_action: UseAction | UseAction[];
      'copy-from'?: string;
      '//'?: string;
      repairs_like?: string;
      qualities?: ItemShortHand[];
      delete?: Delete;
      relic_data?: RelicData;
      pocket_data?: PocketDaum[];
      proportional?: Proportional;
      relative?: Relative;
      valid_mods?: string[];
      cutting?: number;
      abstract?: string;
      extend?: Extend;
      max_encumbrance?: number;
      snippet_category?: SnippetCategory[];
      ascii_picture?: string;
      armor_portion_data?: ArmorPortionDaum[];
      power_armor?: boolean;
      longest_side?: string;
      properties?: string[][];
    };
