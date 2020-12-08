export interface IOvermapSpecial {
  id: string;
  type: 'overmap_special';
  overmaps: Array<Overmap | Overmaps2 | Overmaps3>;
  connections?: Connection[];
  locations?: string[];
  city_distance?: number[];
  city_sizes?: number[];
  occurrences?: number[];
  flags?: string[];
  'copy-from'?: string;
  '//'?: string;
  rotate?: boolean;
  spawns?: Spawns;
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

interface Overmaps3 {
  point: number[];
  overmap: string;
}

interface Overmaps2 {
  point: number[];
  overmap: string;
  locations?: string[];
}

interface Overmap {
  point: number[];
  overmap: string;
  locations: string[];
}
