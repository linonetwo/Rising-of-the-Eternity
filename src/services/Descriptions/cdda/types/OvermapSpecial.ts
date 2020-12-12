export interface IOvermapSpecial {
  type: 'overmap_special';
  id: string;
  overmaps: Overmap[];
  connections?: Connection[];
  locations?: string[];
  city_distance?: number[];
  city_sizes?: number[];
  occurrences: number[];
  flags?: string[];
  rotate?: boolean;
  spawns?: Spawns;
  '//'?: string;
}

interface Spawns {
  group: string;
  population: number[];
  radius: number[];
}

interface Connection {
  point: number[];
  terrain?: string;
  existing?: boolean;
  connection?: string;
  from?: number[];
}

interface Overmap {
  point: number[];
  overmap: string;
  locations?: string[];
}
