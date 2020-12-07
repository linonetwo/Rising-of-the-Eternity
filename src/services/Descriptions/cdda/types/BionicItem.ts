import { CDDA_JSON_TYPES } from './names';

export interface IBionicItem {
  id?: string;
  'copy-from'?: string;
  type: CDDA_JSON_TYPES.BIONIC_ITEM;
  name: Name;
  description?: string;
  price?: number;
  difficulty?: number;
  weight?: string;
  volume?: string;
  price_postapoc?: number;
  abstract?: string;
  category?: string;
  bashing?: number;
  material?: string[];
  symbol?: string;
  color?: string;
  use_action?: string[];
  flags?: string[];
  is_upgrade?: boolean;
  faults?: string[];
  extend?: Extend;
  looks_like?: string;
}

interface Extend {
  flags: string[];
}

interface Name {
  str?: string;
  str_pl?: string;
  str_sp?: string;
}
