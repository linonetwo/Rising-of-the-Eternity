export interface IPetArmor {
  type: 'PET_ARMOR';
  id?: string;
  'copy-from'?: string;
  color?: string;
  name: Name;
  description?: string;
  price?: number;
  price_postapoc?: number;
  material?: string[];
  weight?: string;
  environmental_protection?: number;
  volume?: string;
  material_thickness?: number;
  symbol?: string;
  looks_like?: string;
  bashing?: number;
  to_hit?: number;
  flags?: string[];
  max_pet_vol?: string;
  min_pet_vol?: string;
  pet_bodytype?: string;
  pocket_data?: Pocketdatum[];
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
  max_item_length: string;
  moves: number;
}

interface Name {
  str: string;
  str_pl?: string;
}
