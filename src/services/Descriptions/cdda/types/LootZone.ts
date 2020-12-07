import { CDDA_JSON_TYPES } from './names';

export interface ILootZone {
  id: string;
  type: CDDA_JSON_TYPES.LOOT_ZONE;
  name: string;
  description: string;
}
