import { CDDA_JSON_TYPES } from './names';

export interface IOvermapTerrain {
  type: CDDA_JSON_TYPES.overmap_terrain;
  id?: string[] | string;
  name?: Name | string;
  sym?: string;
  color?: string;
  see_cost?: number;
  extras?: string;
  mondensity?: number;
  mapgen?: Mapgen[];
  flags?: string[];
  'copy-from'?: string;
  spawns?: Spawns;
  abstract?: string;
  '//'?: string;
  land_use_code?: string;
  extend?: Extend;
  delete?: Extend;
  mapgen_straight?: Mapgenstraight[];
  mapgen_curved?: Mapgenstraight[];
  mapgen_end?: Mapgenstraight[];
  mapgen_tee?: Mapgenstraight[];
  mapgen_four_way?: Mapgenstraight[];
}

interface Mapgenstraight {
  method: string;
  name: string;
}

interface Extend {
  flags: string[];
}

interface Spawns {
  group: string;
  population: number[];
  chance: number;
}

interface Mapgen {
  weight?: number;
  method: string;
  object?: Object;
  name?: string;
}

interface Object {
  fill_ter?: string;
  rows: string[];
  terrain: Terrain;
  furniture: Furniture;
  set?: Set[];
  toilets?: Toilets;
}

interface Toilets {
  B: B;
}

interface B {}

interface Set {
  point: string;
  x: number[];
  y: number;
  id: string;
  repeat: number[];
}

interface Furniture {
  '6'?: string;
  x?: string;
  d?: string;
  O?: string;
  r?: string;
  t?: string;
  T?: string;
  S?: string;
  e?: string;
  h?: string;
  c?: string;
  l?: string;
  '#'?: string;
  A?: string;
  C?: string;
  D?: string;
  E?: string;
  F?: string;
  G?: string;
  H?: string;
  I?: string;
}

interface Terrain {
  '5': string;
  ' ': string;
  d?: string;
  '%'?: string;
  O?: string;
  ','?: string;
  _?: string;
  r: string;
  '^'?: string;
  '.': string;
  '-': string;
  '|': string;
  '#'?: string;
  t?: string;
  '+': string;
  '='?: string;
  D: string;
  w?: string;
  T?: string;
  S?: string;
  e?: string;
  h?: string;
  c?: string;
  l?: string;
  s?: string;
  '1'?: string;
  '2'?: string;
  '3'?: string;
  '4'?: string;
  y?: string;
  A?: string;
  B?: string;
  C?: string;
  E?: string;
  F?: string;
  G?: string;
  H?: string;
  I?: string;
}

interface Name {
  str: string;
  '//NOLINT(cata-text-style)': string;
}
