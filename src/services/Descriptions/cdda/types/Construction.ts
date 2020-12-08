export interface IConstruction {
  type: 'construction';
  id: string;
  group: string;
  category: string;
  required_skills?: Array<Array<number | string>>;
  time: number | string;
  qualities?: Array<Quality[] | Quality>;
  pre_special?: string;
  post_flags?: string[];
  post_special?: string;
  pre_note?: string;
  pre_flags?: string[] | string;
  dark_craftable?: boolean;
  post_terrain?: string;
  components?: Array<Array<Array<number | string>>>;
  pre_terrain?: string;
  '//'?: string;
  byproducts?: Byproduct[];
  tools?: Array<Array<Array<number | string> | Array<number | string> | string | string>>;
  using?: Array<Array<number | string>>;
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
