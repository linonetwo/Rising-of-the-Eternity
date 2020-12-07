import { CDDA_JSON_TYPES } from './names';

export interface IMonsterWhitelist {
  type: CDDA_JSON_TYPES.MONSTER_WHITELIST;
  mode?: string;
  categories?: string[];
  '//'?: string;
  monsters?: string[];
}
