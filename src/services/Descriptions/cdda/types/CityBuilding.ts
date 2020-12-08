export interface ICityBuilding {
  type: 'city_building';
  id: string;
  overmaps: Overmap[];
  locations: string[];
  flags?: string[];
  '//'?: string;
}

interface Overmap {
  point: number[];
  overmap: string;
  locations?: string[];
}
