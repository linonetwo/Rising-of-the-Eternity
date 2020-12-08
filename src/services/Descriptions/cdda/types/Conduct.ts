export interface IConduct {
  id: string;
  type: 'conduct';
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
