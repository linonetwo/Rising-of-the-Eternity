export interface IStartLocation {
  type: 'start_location';
  id: string;
  name: string;
  terrain?: Array<Terrain | string>;
  'copy-from'?: string;
  extend?: Extend;
  flags?: string[];
}

interface Extend {
  flags: string[];
}

interface Terrain {
  om_terrain: string;
  om_terrain_match_type: string;
}
