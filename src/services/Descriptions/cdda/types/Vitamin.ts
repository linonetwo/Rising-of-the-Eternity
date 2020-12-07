import { CDDA_JSON_TYPES } from './names';

export interface IVitamin {
  id: string;
  type: CDDA_JSON_TYPES.vitamin;
  vit_type: string;
  name: Name;
  deficiency?: string;
  min: number;
  rate: string;
  disease?: number[][];
  excess?: string;
  max?: number;
  disease_excess?: number[][];
  flags?: string[];
}

interface Name {
  str: string;
}
