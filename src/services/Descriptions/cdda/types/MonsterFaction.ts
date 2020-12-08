export interface IMonsterFaction {
  '//'?: string;
  type: 'MONSTER_FACTION';
  name: string;
  base_faction?: string;
  by_mood?: string[] | string;
  friendly?: string[] | string;
  neutral?: string[] | string;
  hate?: string[] | string;
}
