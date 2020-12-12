export interface ITerrain {
  type: 'terrain';
  id: string;
  name: string;
  description: string;
  looks_like?: string;
  symbol: string;
  color: string[] | string;
  move_cost?: number;
  coverage?: number;
  flags?: string[];
  bash?: Bash;
  deconstruct?: Deconstruct;
  roof?: string;
  light_emitted?: number;
  '//'?: string[] | string;
  open?: string;
  close?: string;
  examine_action?: string;
  connects_to?: string;
  alias?: string[] | string;
  harvest_by_season?: Harvestbyseason[];
  transforms_into?: string;
  'copy-from'?: string;
  heat_radiation?: number;
  trap?: string;
  max_volume?: string;
  curtain_transform?: string;
}

interface Harvestbyseason {
  seasons: string[];
  entries: Entry[];
}

interface Entry {
  drop: string;
  base_num: number[];
  scale_num?: number[];
}

interface Deconstruct {
  ter_set: string;
  items: Item2[];
  deconstruct_above?: boolean;
}

interface Item2 {
  item: string;
  count?: number[] | number[] | number | number;
  charges?: number;
  prob?: number;
}

interface Bash {
  str_min: number;
  str_max: number;
  sound?: string;
  sound_fail?: string;
  ter_set: string;
  items?:
    | Item[]
    | Items2[]
    | Items3[]
    | Items4[]
    | Items5[]
    | Items6[]
    | Items7[]
    | Items8[]
    | Items9[]
    | Items10[]
    | Items11[]
    | Items12[]
    | Items13[]
    | Items14[]
    | string;
  explosive?: number;
  str_min_supported?: number;
  bash_below?: boolean;
  sound_vol?: number;
  sound_fail_vol?: number;
  str_min_blocked?: number;
  str_max_blocked?: number;
  '//'?: string;
  ter_set_bashed_from_above?: string;
}

interface Items14 {
  item: string;
  charges?: number[];
  count?: number;
}

interface Items13 {
  item: string;
  count?: number[] | number;
  charges?: number[];
}

interface Items12 {
  item: string;
  count: number[] | number;
}

interface Items11 {
  item: string;
  charges: number[];
}

interface Items10 {
  item: string;
  count?: number[];
  charges?: number[];
}

interface Items9 {
  item: string;
  count: number;
}

interface Items8 {
  item: string;
  count?: number[];
  prob?: number;
  charges?: number[];
}

interface Items7 {
  item: string;
  prob: number;
  count?: number[];
  charges?: number[];
}

interface Items6 {
  item: string;
  count: number[];
}

interface Items5 {
  item: string;
  count: number[];
  prob: number;
}

interface Items4 {
  item: string;
  count?: number[] | number;
  prob?: number;
  charges?: number[];
}

interface Items3 {
  item: string;
  prob?: number;
  count?: number[];
}

interface Items2 {
  item: string;
  count: number[] | number;
  prob?: number;
}

interface Item {
  item: string;
  count: number[];
  prob?: number;
}
