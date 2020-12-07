import { CDDA_JSON_TYPES } from './names';

export interface IMaterial {
  type: CDDA_JSON_TYPES.material;
  id: string;
  name: string;
  density?: number;
  bash_resist?: number;
  cut_resist?: number;
  bullet_resist?: number;
  acid_resist?: number;
  fire_resist?: number;
  elec_resist?: number;
  chip_resist?: number;
  dmg_adj?: string[];
  bash_dmg_verb?: string;
  cut_dmg_verb?: string;
  fuel_data?: Fueldata;
  'copy-from'?: string;
  specific_heat_liquid?: number;
  specific_heat_solid?: number;
  latent_heat?: number;
  edible?: boolean;
  burn_data?: Burndatum[];
  repaired_with?: string;
  salvaged_into?: string;
  burn_products?: (number | string)[][];
  compacts_into?: string[];
  rotting?: boolean;
  vitamins?: (number | string)[][];
  soft?: boolean;
  reinforces?: boolean;
  '//'?: string;
  '//1'?: string;
  '//2'?: string;
  compact_accepts?: string[];
  '//3'?: string;
  '//4'?: string;
  '//5'?: string;
}

interface Burndatum {
  fuel?: number;
  smoke?: number;
  burn?: number;
  volume_per_turn?: string;
  '//'?: string;
  immune?: boolean;
}

interface Fueldata {
  energy: number;
  perpetual?: boolean;
  explosion_data?: Explosiondata;
  pump_terrain?: string;
  '//'?: string;
}

interface Explosiondata {
  chance_hot: number;
  chance_cold: number;
  factor: number;
  fiery: boolean;
  size_factor: number;
}
