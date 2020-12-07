import { CDDA_JSON_TYPES } from './names';

export interface IMonsterFaction {
  '//'?: string;
  type: CDDA_JSON_TYPES.MONSTER_FACTION;
  name: string;
  base_faction?: string;
  by_mood?: string[] | string;
  friendly?: string[] | string;
  neutral?: string[] | string;
  hate?: string[] | string;
}
