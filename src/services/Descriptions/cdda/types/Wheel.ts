export interface IWheel {
  id: string;
  category?: string;
  type: 'WHEEL';
  name: Name | Name2 | string;
  description: string;
  weight?: string;
  volume?: string;
  price?: number;
  bashing?: number;
  to_hit?: number;
  material?: string[];
  symbol?: string;
  color?: string;
  diameter?: number;
  width?: number;
  price_postapoc?: number;
  looks_like?: string;
  'copy-from'?: string;
  relative?: Relative;
}

interface Relative {
  weight: string;
}

interface Name2 {
  str: string;
  str_pl: string;
}

interface Name {
  str: string;
}
