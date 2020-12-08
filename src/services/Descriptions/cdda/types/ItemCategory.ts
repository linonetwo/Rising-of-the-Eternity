export interface IItemCategory {
  id: string;
  type: 'ITEM_CATEGORY';
  name: Name;
  zone?: string;
  sort_rank: number;
  priority_zones?: Priorityzone[];
  '//'?: string;
}

interface Priorityzone {
  id: string;
  filthy: boolean;
}

interface Name {
  str: string;
}
