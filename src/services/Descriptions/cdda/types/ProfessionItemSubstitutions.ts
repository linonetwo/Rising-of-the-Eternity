export interface IProfessionItemSubstitutions {
  type: 'profession_item_substitutions';
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
  new: Array<New | New | string | string>;
  present?: string[];
  absent?: string[];
}

interface New {
  item: string;
  ratio: number;
}
