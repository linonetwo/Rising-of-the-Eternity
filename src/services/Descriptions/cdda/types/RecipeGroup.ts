import { CDDA_JSON_TYPES } from './names';

export interface IRecipeGroup {
  type: CDDA_JSON_TYPES.recipe_group;
  id: string;
  building_type: string;
  recipes: Recipe[];
}

interface Recipe {
  id: string;
  description: string;
  om_terrains?: string[];
}
