export interface IRequirement {
  id: string;
  type: 'requirement';
  components?: Array<Array<Array<number | string>>>;
  '//'?: string;
  tools?: Array<Array<Array<number | string>>>;
  qualities?: Quality[];
}

interface Quality {
  id: string;
  level: number;
}
