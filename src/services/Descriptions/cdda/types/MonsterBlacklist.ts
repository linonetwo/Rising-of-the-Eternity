import { CDDA_JSON_TYPES } from './names';

export interface IMonsterBlacklist {
  type: CDDA_JSON_TYPES.MONSTER_BLACKLIST;
  monsters?: string[];
  categories?: string[];
  '//'?: string;
}
