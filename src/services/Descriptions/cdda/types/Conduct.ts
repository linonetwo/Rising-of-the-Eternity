import { CDDA_JSON_TYPES } from './names';

export interface IConduct {
  id: string;
  type: CDDA_JSON_TYPES.conduct;
  name: string;
  requirements: Requirement[];
  hidden_by?: string[];
}

interface Requirement {
  event_statistic: string;
  is: string;
  target: number;
  description: string;
}
