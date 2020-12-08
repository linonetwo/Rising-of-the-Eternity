export interface IItemBlacklist {
  type: 'ITEM_BLACKLIST';
  whitelist: boolean;
  items: string[];
  '//'?: string;
}
