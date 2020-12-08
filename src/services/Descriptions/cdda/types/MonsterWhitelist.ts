export interface IMonsterWhitelist {
  type: 'MONSTER_WHITELIST';
  mode?: string;
  categories?: string[];
  '//'?: string;
  monsters?: string[];
}
