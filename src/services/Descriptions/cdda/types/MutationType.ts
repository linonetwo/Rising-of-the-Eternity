import { CDDA_JSON_TYPES } from './names';

export interface IMutationType {
  type: CDDA_JSON_TYPES.mutation_type;
  id: string;
}
