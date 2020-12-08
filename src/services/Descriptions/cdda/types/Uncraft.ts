export interface IUncraft {
  result?: string;
  type: 'uncraft';
  activity_level?: string;
  skill_used?: string;
  difficulty?: number;
  time?: number | string;
  qualities?: Quality[];
  components?: Array<Array<Array<number | string>>>;
  using?: Array<Array<number | string>>;
  '//'?: string;
  skills_required?: Array<Array<number | number | string | string>>;
  tools?: Array<Array<Array<number | string>>>;
  flags?: string[];
  abstract?: string;
  'copy-from'?: string;
  decomp_learn?: Array<Array<number | string>> | number;
}

interface Quality {
  id: string;
  level: number;
  amount?: number;
}
