export interface IEngine {
  id?: string;
  'copy-from'?: string;
  type: 'ENGINE';
  name: Name;
  description?: string;
  weight?: string;
  volume?: string;
  price?: number;
  price_postapoc?: number;
  '//'?: string;
  abstract?: string;
  category?: string;
  material?: string[];
  symbol?: string;
  color?: string;
  faults?: string[];
  looks_like?: string;
  displacement?: number;
}

interface Name {
  str: string;
}
