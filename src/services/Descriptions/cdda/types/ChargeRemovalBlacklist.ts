import { CDDA_JSON_TYPES } from './names';

export interface IChargeRemovalBlacklist {
  type: CDDA_JSON_TYPES.charge_removal_blacklist;
  list: string[];
}
