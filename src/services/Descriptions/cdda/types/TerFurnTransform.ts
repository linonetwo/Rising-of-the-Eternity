export interface ITerFurnTransform {
  type: 'ter_furn_transform';
  id: string;
  terrain?: Terrain[];
  fail_message?: string;
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
  valid_flags?: string[];
  valid_terrain?: string[];
  message?: string;
  message_good?: boolean;
}
