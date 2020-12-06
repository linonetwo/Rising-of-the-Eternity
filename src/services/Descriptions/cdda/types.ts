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

interface Extend {
  effects: string[];
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
    };
