export interface IToolmod {
  id?: string;
  type: 'TOOLMOD';
  category?: string;
  name: Name | string;
  description?: string;
  weight?: string;
  volume?: string;
  price?: number;
  material?: string[];
  symbol?: string;
  color?: string;
  acceptable_ammo?: string[];
  capacity_multiplier?: number;
  'copy-from'?: string;
  ammo_modifier?: string;
  flags?: string[];
  abstract?: string;
  pocket_mods?: Pocketmod[];
  magazine_adaptor?: Array<Array<string[] | string>>;
}

interface Pocketmod {
  pocket_type: string;
  item_restriction: string[];
  max_contains_volume: string;
  max_contains_weight: string;
}

interface Name {
  str: string;
}
