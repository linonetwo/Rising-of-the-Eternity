import { CDDA_JSON_TYPES } from './names';

export interface IHitRange {
  type: CDDA_JSON_TYPES.hit_range;
  even_good: number[];
}
