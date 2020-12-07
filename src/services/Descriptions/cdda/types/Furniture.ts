import { CDDA_JSON_TYPES } from './names';

export interface IFurniture {
  type: CDDA_JSON_TYPES.furniture;
  id: string;
  name: string;
  description: string;
  symbol: string;
  color?: string;
  move_cost_mod?: number;
  required_str?: number;
  flags?: string[];
  examine_action?: string;
  max_volume?: string;
  bash?: Bash;
  deconstruct?: Deconstruct;
  bgcolor?: string[] | string;
  looks_like?: string;
  coverage?: number;
  workbench?: Workbench;
  crafting_pseudo_item?: string;
  emissions?: string[];
  light_emitted?: number;
  'copy-from'?: string;
  deployed_item?: string;
  comfort?: number;
  floor_bedding_warmth?: number;
  bonus_fire_warmth_feet?: number;
  '//'?: string;
  surgery_skill_multiplier?: number;
  keg_capacity?: number;
  plant_data?: Plantdata;
  harvest_by_season?: Harvestbyseason[];
  connects_to?: string;
  open?: string;
  close?: string;
  alias?: string;
}

interface Harvestbyseason {
  seasons: string[];
  entries: Entry[];
}

interface Entry {
  drop: string;
  base_num?: number[];
}

interface Plantdata {
  transform: string;
  base?: string;
}

interface Workbench {
  multiplier: number;
  mass: number;
  volume: string;
}

interface Deconstruct {
  items: (
    | Item
    | Items2
    | Items32
    | Items3
    | Items5
    | Items6
    | Items72
    | Items82
    | Items8
    | Items10
    | Items112
    | Items122
    | Items12
    | Items13
    | Items16
    | Items17
    | Items172
  )[];
  furn_set?: string;
}

interface Items172 {
  item: string;
  count?: number[];
  charges?: number[] | number;
}

interface Items122 {
  item: string;
  count?: number;
  charges?: number;
}

interface Items112 {
  item: string;
  count?: number[] | number;
}

interface Items82 {
  item: string;
  count?: number[] | number;
  charges?: number;
}

interface Items72 {
  item: string;
  count?: number[];
  charges?: number[] | number;
  prob?: number;
}

interface Items32 {
  item: string;
  count?: number[] | number;
  charges?: number[] | number;
}

interface Bash {
  str_min?: number;
  str_max?: number;
  sound?: string;
  sound_fail?: string;
  items?: (
    | Item
    | Items2
    | Items3
    | Items4
    | Items5
    | Items6
    | Items7
    | Items8
    | Items9
    | Items10
    | Items11
    | Items12
    | Items13
    | Items14
    | Items15
    | Items16
    | Items17
  )[];
  furn_set?: string;
  explosive?: number;
  sound_vol?: number;
  sound_fail_vol?: number;
  tent_centers?: string[];
  collapse_radius?: number;
}

interface Items17 {
  item: string;
  count?: number[];
  charges?: number[];
}

interface Items16 {
  item: string;
  count: number[] | number;
}

interface Items15 {
  item: string;
  prob?: number;
  count?: number[] | number;
}

interface Items14 {
  item: string;
  prob: number;
  count?: number[];
  charges?: number[];
}

interface Items13 {
  item: string;
  count: number;
}

interface Items12 {
  item: string;
  count?: number[];
  prob?: number;
}

interface Items11 {
  item: string;
}

interface Items10 {
  item: string;
  count?: number[] | number;
  charges?: number[];
}

interface Items9 {
  item: string;
  count: number[];
  prob: number;
}

interface Items8 {
  item: string;
  count?: number[] | number;
  charges?: number[];
  prob?: number;
}

interface Items7 {
  item: string;
  count?: number[];
  charges?: number[];
  prob?: number;
}

interface Items6 {
  item: string;
  count?: number;
  charges?: number[];
}

interface Items5 {
  item: string;
  count: number[];
}

interface Items4 {
  item: string;
  count: number[];
  prob?: number;
}

interface Items3 {
  item: string;
  count?: number[];
  charges?: number;
}

interface Items2 {
  item?: string;
  prob?: number;
  count?: number[];
  group?: string;
}

interface Item {
  item: string;
  charges: number[];
}
