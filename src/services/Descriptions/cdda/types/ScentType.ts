import { CDDA_JSON_TYPES } from './names';

export interface IScentType {
  type: CDDA_JSON_TYPES.scent_type;
  id: string;
  receptive_species: string[];
}
