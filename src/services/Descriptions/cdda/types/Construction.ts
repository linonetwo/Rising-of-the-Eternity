import { CDDA_JSON_TYPES } from './names';

export interface IConstruction {
  type: CDDA_JSON_TYPES.construction;
  id: string;
  group: string;
  category: string;
  required_skills?: (number | string)[][];
  time: number | string;
  qualities?: (Quality[] | Quality)[];
  pre_special?: string;
  post_flags?: string[];
  post_special?: string;
  pre_note?: string;
  pre_flags?: string[] | string;
  dark_craftable?: boolean;
  post_terrain?: string;
  components?: (number | string)[][][];
  pre_terrain?: string;
  '//'?: string;
  byproducts?: Byproduct[];
  tools?: ((number | string)[] | (number | string)[] | string | string)[][];
  using?: (number | string)[][];
  '//2'?: string;
  vehicle_start?: boolean;
  skill?: string;
  difficulty?: number;
  on_display?: boolean;
}

interface Byproduct {
  item: string;
  count?: number[];
  charges?: number[];
}

interface Quality {
  id: string;
  level: number;
}
