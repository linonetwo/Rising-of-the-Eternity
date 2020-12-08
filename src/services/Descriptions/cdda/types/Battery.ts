export interface IBattery {
  id: string;
  type: 'BATTERY';
  category: string;
  name: Name;
  description: string;
  weight: string;
  volume: string;
  price: number;
  price_postapoc: number;
  material: string[];
  symbol: string;
  color: string;
  max_capacity: string;
  looks_like: string;
  flags: string[];
}

interface Name {
  str: string;
  str_pl: string;
}
