import { CDDA_JSON_TYPES } from './names';

export interface IPetArmor {
  id?: string;
  type: CDDA_JSON_TYPES.PET_ARMOR;
  name: Name;
  description?: string;
  weight?: string;
  volume?: string;
  price?: number;
  price_postapoc?: number;
  material?: string[];
  material_thickness?: number;
  environmental_protection?: number;
  symbol?: string;
  looks_like?: string;
  color?: string;
  flags?: string[];
  max_pet_vol?: string;
  min_pet_vol?: string;
  pet_bodytype?: string;
  pocket_data?: Pocketdatum[];
  'copy-from'?: string;
  bashing?: number;
  to_hit?: number;
  '//'?: string;
  extend?: Extend;
  abstract?: string;
  snippet_category?: Snippetcategory[];
}

interface Snippetcategory {
  id: string;
  text: string;
}

interface Extend {
  flags: string[];
}

interface Pocketdatum {
  pocket_type: string;
  max_contains_volume: string;
  max_contains_weight: string;
  '//'?: string;
  moves: number;
  max_item_length?: string;
}

interface Name {
  str: string;
  str_pl?: string;
}
