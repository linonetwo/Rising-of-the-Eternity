export interface IRecipeCategory {
  type: 'recipe_category';
  id: string;
  recipe_subcategories: string[];
  '//'?: string;
  is_hidden?: boolean;
}
