export interface IMapExtra {
  id: string;
  type: 'map_extra';
  name: Name;
  description: string;
  generator: Generator;
  sym?: string;
  color?: string;
  autonote?: boolean;
}

interface Generator {
  generator_method: string;
  generator_id: string;
}

interface Name {
  str: string;
  ctxt?: string;
}
