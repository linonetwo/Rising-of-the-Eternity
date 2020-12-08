export interface IBehavior {
  type: 'behavior';
  id: string;
  strategy?: string;
  children?: string[];
  conditions?: Condition[];
  goal?: string;
}

interface Condition {
  predicate: string;
  argument?: string;
}
