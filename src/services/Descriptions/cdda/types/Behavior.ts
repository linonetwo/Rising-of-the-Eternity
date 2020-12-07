import { CDDA_JSON_TYPES } from './names';

export interface IBehavior {
  type: CDDA_JSON_TYPES.behavior;
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
