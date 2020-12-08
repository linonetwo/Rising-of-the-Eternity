export interface IRecipeGroup {
  type: 'recipe_group';
  id: string;
  building_type: string;
  recipes: Recipe[];
}

interface Recipe {
  id: string;
  description: string;
  om_terrains?: string[];
}
