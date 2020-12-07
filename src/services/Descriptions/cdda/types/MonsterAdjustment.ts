import { CDDA_JSON_TYPES } from './names';

export interface IMonsterAdjustment {
  type: CDDA_JSON_TYPES.monster_adjustment;
  species: string;
  flag: Flag;
}

interface Flag {
  name: string;
  value: boolean;
}
