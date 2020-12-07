import { CDDA_JSON_TYPES } from './names';

export interface ISkillDisplayType {
  type: CDDA_JSON_TYPES.skill_display_type;
  id: string;
  display_string: string;
}
