export interface IOvermapLocation {
  type: 'overmap_location';
  id: string;
  terrains?: string[];
  flags?: string[];
}
