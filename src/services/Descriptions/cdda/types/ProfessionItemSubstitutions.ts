import { CDDA_JSON_TYPES } from './names';

export interface IProfessionItemSubstitutions {
  type: CDDA_JSON_TYPES.profession_item_substitutions;
  trait?: string;
  sub?: Sub[];
  item?: string;
  bonus?: Bonus;
}

interface Bonus {
  present: string[];
  absent?: string[];
}

interface Sub {
  item?: string;
  new: (New | New | string | string)[];
  present?: string[];
  absent?: string[];
}

interface New {
  item: string;
  ratio: number;
}
