import { CDDA_JSON_TYPES } from './names';

export interface IVehiclePart {
  id?: string;
  'copy-from'?: string;
  type: CDDA_JSON_TYPES.vehicle_part;
  name?: Name | string;
  item?: string;
  categories?: string[];
  color?: string;
  broken_color?: string;
  difficulty?: number;
  breaks_into?:
    | Breaksinto[]
    | Breaksinto2[]
    | Breaksinto3[]
    | Breaksinto4[]
    | Breaksinto5[]
    | any[]
    | Breaksinto7[]
    | Breaksinto8[]
    | Breaksinto9[]
    | Breaksinto10[]
    | Breaksinto11[]
    | Breaksinto12[]
    | string;
  requirements?: Requirements;
  location?: string;
  symbol?: string;
  broken_symbol?: string;
  durability?: number;
  description?: string;
  damage_modifier?: number;
  rolling_resistance?: number;
  wheel_type?: string;
  contact_area?: number;
  flags?: string[];
  damage_reduction?: Damagereduction;
  abstract?: string;
  looks_like?: string;
  size?: number;
  noise_factor?: number;
  fuel_type?: string;
  m2c?: number;
  power?: number;
  '//'?: string;
  standard_symbols?: boolean;
  folded_volume?: number | string;
  extend?: Extend;
  epower?: number;
  energy_consumption?: number;
  proportional?: Proportional;
  pseudo_tools?: Pseudotool[];
  bonus?: number;
  symbols?: Symbols;
  backfire_threshold?: number;
  backfire_freq?: number;
  damaged_power_factor?: number;
  fuel_options?: string[];
  qualities?: (number | string)[][];
  delete?: Delete;
  transform_terrain?: Transformterrain;
  exclusions?: string[];
  muscle_power_factor?: number;
  rotor_diameter?: number;
  comfort?: number;
  floor_bedding_warmth?: number;
  default_ammo?: string;
  workbench?: Workbench;
  emissions?: string[];
  exhaust?: string[];
}

interface Workbench {
  multiplier: number;
  mass: number;
  volume: string;
}

interface Transformterrain {
  pre_flags: string[];
  post_terrain: string;
}

interface Delete {
  flags: string[];
}

interface Symbols {
  horizontal_front?: string;
  horizontal_rear?: string;
  horizontal_2_front?: string;
  horizontal_2_rear?: string;
  vertical_left?: string;
  vertical_right?: string;
  vertical_T_left?: string;
  vertical_T_right?: string;
  vertical_2_left?: string;
  vertical_2_right?: string;
  ne?: string;
  nw?: string;
  se?: string;
  sw?: string;
  front?: string;
  rear?: string;
  left?: string;
  right?: string;
  horizontal?: string;
  vertical?: string;
  nw_edge?: string;
  ne_edge?: string;
  sw_edge?: string;
  se_edge?: string;
  horizontal_front_edge?: string;
  horizontal_rear_edge?: string;
}

interface Pseudotool {
  id: string;
  hotkey?: string;
}

interface Proportional {
  epower?: number;
  durability?: number;
  size?: number;
  damage_modifier?: number;
}

interface Extend {
  flags: string[];
  categories?: string[];
}

interface Damagereduction {
  all?: number;
  cut?: number;
  stab?: number;
  bash?: number;
}

interface Requirements {
  install?: Install;
  removal?: Removal;
  repair?: Repair;
}

interface Repair {
  skills?: (number | string)[][];
  time: string;
  using?: (number | string)[][];
}

interface Removal {
  skills?: (number | string)[][];
  time?: number | string;
  qualities?: Quality[];
  using?: any[] | (number | string)[][] | string;
}

interface Install {
  skills?: (number | string)[][];
  time?: number | string;
  qualities?: Quality[];
  using?: any[] | (number | string)[][] | string;
  components?: (number | string)[][][];
}

interface Quality {
  id: string;
  level: number;
}

interface Breaksinto12 {
  item: string;
}

interface Breaksinto11 {
  item: string;
  count?: number[];
}

interface Breaksinto10 {
  item: string;
  count: number[] | number;
}

interface Breaksinto9 {
  item: string;
  count?: number[];
  charges?: number[];
}

interface Breaksinto8 {
  item: string;
  count: number;
}

interface Breaksinto7 {
  group: string;
  count: number[];
}

interface Breaksinto5 {
  item: string;
  count: number[];
}

interface Breaksinto4 {
  item: string;
  count?: number[];
  charges?: number;
  prob?: number;
}

interface Breaksinto3 {
  item: string;
  prob?: number;
  count?: number[];
}

interface Breaksinto2 {
  item: string;
  count?: number[];
  charges?: number[] | number;
  prob?: number;
}

interface Breaksinto {
  item: string;
  prob: number;
}

interface Name {
  str: string;
}
