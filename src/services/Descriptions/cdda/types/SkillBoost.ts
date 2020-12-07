import { CDDA_JSON_TYPES } from './names';

export interface ISkillBoost {
  type: CDDA_JSON_TYPES.skill_boost;
  stat: string;
  skills: string[];
  skill_offset: number;
  scaling_power: number;
}
