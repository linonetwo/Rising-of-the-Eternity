export interface IRecipe {
  result?: string;
  type: 'recipe';
  activity_level?: string;
  category?: string;
  subcategory?: string;
  skill_used?: string;
  difficulty?: number;
  time?: number | string;
  using?: Array<Array<Array<Array<number | string> | number | string>>>;
  qualities?: Array<Quality[] | Quality[] | Qualities3 | Quality | Quality>;
  components?: Array<Array<Array<number | string>>>;
  description?: string;
  autolearn?: boolean | Array<Array<number | string>>;
  never_learn?: boolean;
  construction_blueprint?: string;
  blueprint_name?: string;
  '//'?: string;
  blueprint_needs?: Blueprintneeds;
  check_blueprint_needs?: boolean;
  '//0'?: string;
  reversible?: boolean;
  decomp_learn?: number;
  book_learn?:
    | Booklearn
    | Booklearn2
    | Booklearn3
    | Booklearn4
    | Booklearn5
    | Booklearn6
    | Booklearn7
    | Booklearn8
    | Booklearn9
    | Booklearn10
    | string[][]
    | Array<Array<number | string | string>>
    | Array<Array<number | string>>
    | Booklearn14
    | Booklearn15
    | Booklearn16
    | Booklearn17;
  tools?: Array<Array<Array<number | string>>>;
  id_suffix?: string;
  'copy-from'?: string;
  result_mult?: number;
  byproducts?: Array<Array<number | string | string>>;
  proficiencies?: Proficiency[];
  skills_required?: Array<Array<number | number | string | string>>;
  flags?: string[];
  batch_time_factors?: number[];
  charges?: number;
  obsolete?: boolean;
  abstract?: string;
  delete_flags?: string[];
  contained?: boolean;
  container?: string;
  '//2'?: string;
  blueprint_provides?: Blueprintprovide[];
  blueprint_requires?: Blueprintprovide[];
  blueprint_excludes?: Blueprintprovide[];
  blueprint_resources?: string[];
  '//blueprint_requires'?: Blueprintrequire[];
  extend?: Extend;
}

interface Extend {
  proficiencies: Proficiency2[];
}

interface Proficiency2 {
  proficiency: string;
}

interface Blueprintrequire {
  id: string;
}

interface Blueprintprovide {
  id: string;
  amount?: number;
}

interface Proficiency {
  proficiency: string;
  required?: boolean;
  time_multiplier?: number;
  fail_multiplier?: number;
  learning_time_multiplier?: number;
}

interface Booklearn17 {
  cookbook_sushi: Recipelabchem;
  cookbook_foodfashions: Textbookgaswarfare;
}

interface Booklearn16 {
  family_cookbook: Recipelabchem;
  cookbook_daintydishes: Textbookgaswarfare;
}

interface Booklearn15 {
  afs_bugbrew_book: Recipelabchem;
}

interface Booklearn14 {
  family_cookbook: Recipelabchem;
  survival_book: Recipelabchem;
  textbook_survival: Recipelabchem;
  cookbook_foodfashions: Textbookgaswarfare;
}

interface Booklearn10 {
  adv_chemistry: Recipelabchem;
  textbook_chemistry: Recipelabchem;
  cookbook_foodfashions: Textbookgaswarfare;
}

interface Booklearn9 {
  scots_cookbook: Recipelabchem;
  cookbook_liverforkids: Textbookgaswarfare;
}

interface Booklearn8 {
  textbook_gaswarfare: Recipelabchem;
  textbook_anarch: Textbookgaswarfare;
}

interface Booklearn7 {
  scots_cookbook: Recipelabchem;
  cookbook: Recipelabchem;
  cookbook_liverforkids: Textbookgaswarfare;
}

interface Booklearn6 {
  cookbook_italian: Recipelabchem;
  cookbook_foodfashions: Textbookgaswarfare;
}

interface Booklearn5 {
  textbook_gaswarfare: Recipelabchem;
  textbook_anarch: Textbookgaswarfare;
  manual_launcher: Recipelabchem;
}

interface Booklearn4 {
  pocket_survival: Recipelabchem;
  survival_book: Recipelabchem;
  textbook_survival: Recipelabchem;
  manual_survival: Recipelabchem;
  mag_survival: Recipelabchem;
  family_cookbook: Recipelabchem;
  cookbook_daintydishes: Textbookgaswarfare;
}

interface Booklearn3 {
  mag_glam: Recipelabchem;
  cookbook_liverforkids: Textbookgaswarfare;
}

interface Booklearn2 {
  cookbook_sushi: Recipelabchem;
  cookbook_daintydishes: Textbookgaswarfare;
}

interface Booklearn {
  textbook_gaswarfare: Textbookgaswarfare;
  textbook_anarch: Textbookgaswarfare;
  recipe_labchem: Recipelabchem;
}

interface Recipelabchem {
  skill_level: number;
}

interface Textbookgaswarfare {
  skill_level: number;
  recipe_name: string;
}

interface Blueprintneeds {
  time?: string;
  skills?: Array<Array<number | string>>;
  inline?: Inline;
}

interface Inline {
  tools: Array<Array<Array<number | string>>>;
  qualities: Quality2[][];
  components: Array<Array<Array<number | string>>>;
}

interface Quality2 {
  id: string;
  level?: number;
}

interface Qualities3 {
  id: string;
  level: number;
  amount: number;
}

interface Quality {
  id: string;
  level: number;
}
