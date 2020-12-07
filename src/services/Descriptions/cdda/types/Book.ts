import { CDDA_JSON_TYPES } from './names';

export interface IBook {
  id?: string;
  type: CDDA_JSON_TYPES.BOOK;
  name: Name | Name2 | Name3 | Name4 | string;
  description?: Description | string;
  weight?: string;
  volume?: string;
  price?: number | string;
  price_postapoc?: number;
  material?: string[];
  symbol?: string;
  color?: string;
  time?: number | string;
  fun?: number;
  bashing?: number;
  skill?: string;
  required_level?: number;
  max_level?: number;
  intelligence?: number;
  looks_like?: string;
  abstract?: string;
  'copy-from'?: string;
  '//'?: string;
  use_action?: string[] | Useaction2;
  martial_art?: string;
  chapters?: number;
  longest_side?: string;
  flags?: string[];
  relative?: Relative;
  ascii_picture?: string;
  to_hit?: number;
  '//isbn13'?: number;
  '//bashing'?: string;
  snippet_category?: Snippetcategory[];
  '//genre'?: string;
  '//note'?: string;
  '//dual genre'?: string;
}

interface Snippetcategory {
  id: string;
  text: string;
}

interface Relative {
  intelligence?: number;
  chapters?: number;
  fun?: number;
  price?: number;
  price_postapoc?: number;
  time?: string;
  weight?: string;
  bashing?: number;
}

interface Useaction2 {
  type: string;
  spells: string[];
}

interface Description {
  str: string;
  '//~': string;
}

interface Name4 {
  str: string;
  str_pl: string;
}

interface Name3 {
  str: string;
}

interface Name2 {
  '//~': string;
  str: string;
  str_pl: string;
}

interface Name {
  str_sp: string;
}
