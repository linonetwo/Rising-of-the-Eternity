export interface IMagazine {
  id?: string;
  looks_like?: string;
  type: 'MAGAZINE';
  name: Name;
  description?: string;
  weight?: string;
  volume?: string;
  price?: number;
  price_postapoc?: number;
  material?: string[] | string;
  symbol?: string;
  color?: string;
  ammo_type?: string[] | string;
  capacity?: number;
  flags?: string[];
  pocket_data?: Pocketdatum[];
  category?: string;
  reload_time?: number;
  ascii_picture?: string;
  count?: number;
  '//'?: string;
  'copy-from'?: string;
  bashing?: number;
  to_hit?: number;
  longest_side?: string;
  default_ammo?: string;
  linkage?: string;
  armor_data?: Armordata;
  abstract?: string;
}

interface Armordata {
  covers: string[];
  coverage: number;
  material_thickness?: number;
  encumbrance: number;
}

interface Pocketdatum {
  pocket_type: string;
  rigid?: boolean;
  ammo_restriction: Ammorestriction;
  watertight?: boolean;
}

interface Ammorestriction {
  308?: number;
  crystallized_mana?: number;
  '8x40mm'?: number;
  afs_foam?: number;
  battery?: number;
  223?: number;
  charcoal?: number;
  40?: number;
  '10mm'?: number;
  '12mm'?: number;
  '20x66mm'?: number;
  22?: number;
  '300blk'?: number;
  300?: number;
  3006?: number;
  32?: number;
  '357sig'?: number;
  38?: number;
  '357mag'?: number;
  380?: number;
  '38super'?: number;
  '40x53mm'?: number;
  '410shot'?: number;
  44?: number;
  45?: number;
  454?: number;
  '45colt'?: number;
  46?: number;
  460?: number;
  50?: number;
  500?: number;
  '545x39'?: number;
  57?: number;
  '5x50'?: number;
  m235?: number;
  762?: number;
  '762R'?: number;
  '762x25'?: number;
  '9mm'?: number;
  '9x18'?: number;
  chemical_spray?: number;
  '123ln'?: number;
  flammable?: number;
  nail?: number;
  shot?: number;
  weldgas?: number;
}

interface Name {
  str: string;
  str_pl?: string;
}
