export interface IMonsterBlacklist {
  type: 'MONSTER_BLACKLIST';
  monsters?: string[];
  categories?: string[];
  '//'?: string;
}
