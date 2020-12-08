export interface ISkill {
  type: 'skill';
  id: string;
  name: Name | string;
  description: string;
  display_category: string;
  obsolete?: boolean;
  companion_survival_rank_factor?: number;
  companion_skill_practice?: Companionskillpractice[];
  companion_industry_rank_factor?: number;
  tags?: string[];
  time_to_attack?: Timetoattack;
  companion_combat_rank_factor?: number;
}

interface Timetoattack {
  min_time: number;
  base_time: number;
  time_reduction_per_level: number;
}

interface Companionskillpractice {
  skill: string;
  weight: number;
}

interface Name {
  str: string;
}
