import { CDDA_JSON_TYPES } from './names';

export interface IItemBlacklist {
  type: CDDA_JSON_TYPES.ITEM_BLACKLIST;
  whitelist: boolean;
  items: string[];
  '//'?: string;
}
