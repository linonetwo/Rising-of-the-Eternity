export interface IAchievement {
  id: string;
  type: 'achievement';
  name: Name | string;
  requirements: Requirement[];
  time_constraint?: Timeconstraint;
  hidden_by?: string[];
  description?: string;
}

interface Timeconstraint {
  since: string;
  is: string;
  target: string;
}

interface Requirement {
  event_statistic: string;
  is: string;
  target?: string[] | number;
  visible?: string;
  description?: string;
}

interface Name {
  str: string;
  '//~': string;
}
