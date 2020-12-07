import { CDDA_JSON_TYPES } from './names';

export interface ITraitBlacklist {
  '//': string;
  type: CDDA_JSON_TYPES.TRAIT_BLACKLIST;
  traits: string[];
}
