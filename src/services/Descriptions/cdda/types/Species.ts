import { CDDA_JSON_TYPES } from './names';

export interface ISpecies {
  type: CDDA_JSON_TYPES.SPECIES;
  id: string;
  description?: string;
  fear_triggers?: string[];
  footsteps?: string;
  anger_triggers?: string[];
  '//'?: string;
}
