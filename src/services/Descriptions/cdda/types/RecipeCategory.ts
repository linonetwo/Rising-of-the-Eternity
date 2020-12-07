import { CDDA_JSON_TYPES } from './names';

export interface IRecipeCategory {
  type: CDDA_JSON_TYPES.recipe_category;
  id: string;
  recipe_subcategories: string[];
  '//'?: string;
  is_hidden?: boolean;
}
