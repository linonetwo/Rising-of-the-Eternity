export interface ISkillBoost {
  type: 'skill_boost';
  stat: string;
  skills: string[];
  skill_offset: number;
  scaling_power: number;
}
