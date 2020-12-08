export interface IOvermapConnection {
  type: 'overmap_connection';
  id: string;
  subtypes: Subtype[];
}

interface Subtype {
  terrain: string;
  locations: Array<string | string>;
  basic_cost?: number;
  flags?: string[];
}
