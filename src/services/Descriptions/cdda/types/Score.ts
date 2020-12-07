import { CDDA_JSON_TYPES } from './names';

export interface IScore {
  id: string;
  type: CDDA_JSON_TYPES.score;
  statistic: string;
}
