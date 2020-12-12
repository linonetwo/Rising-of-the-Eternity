export interface ITerFurnTransform {
  type: 'ter_furn_transform';
  id: string;
  fail_message?: string;
  terrain?: Terrain[];
  furniture?: Furniture[];
  '//'?: string;
}

interface Furniture {
  result: string;
  valid_flags?: string[];
  message?: string;
  valid_furniture?: string[];
}

interface Terrain {
  result: Array<Array<number | string>> | string | string;
  valid_terrain?: string[];
  message?: string;
  message_good?: boolean;
  valid_flags?: string[];
}
