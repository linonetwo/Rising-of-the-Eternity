import { CDDA_JSON_TYPES } from './names';

export interface IDream {
  type: CDDA_JSON_TYPES.dream;
  messages: string[];
  category: string;
  strength: number;
  '//'?: string;
}
