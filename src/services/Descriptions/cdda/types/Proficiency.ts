import { CDDA_JSON_TYPES } from './names';

export interface IProficiency {
  type: CDDA_JSON_TYPES.proficiency;
  id: string;
  name: Name;
  description: string;
  can_learn: boolean;
  default_time_multiplier?: number;
  default_fail_multiplier?: number;
  time_to_learn?: string;
  required_proficiencies?: string[];
  '//'?: string;
}

interface Name {
  str: string;
}
