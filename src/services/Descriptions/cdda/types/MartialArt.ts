export interface IMartialArt {
  type: 'martial_art';
  id: string;
  name: Name | string;
  description?: string;
  initiate?: string[];
  arm_block?: number;
  leg_block?: number;
  allow_melee?: boolean;
  force_unarmed?: boolean;
  learn_difficulty?: number;
  static_buffs?: Staticbuff[];
  techniques?: string[];
  weapons?: string[];
  onmove_buffs?: Onmovebuff[];
  ondodge_buffs?: Ondodgebuff[];
  autolearn?: string[][];
  onmiss_buffs?: Onmissbuff[];
  onhit_buffs?: Onhitbuff[];
  primary_skill?: string;
  strictly_melee?: boolean;
  oncrit_buffs?: Oncritbuff[];
  onblock_buffs?: Onblockbuff[];
  ongethit_buffs?: Ongethitbuff[];
  onattack_buffs?: Onattackbuff[];
  onkill_buffs?: Onkillbuff[];
  onpause_buffs?: Oncritbuff[];
  arm_block_with_bio_armor_arms?: boolean;
  leg_block_with_bio_armor_legs?: boolean;
  'copy-from'?: string;
  extend?: Extend;
}

interface Extend {
  weapons: string[];
}

interface Onkillbuff {
  id: string;
  name: string;
  description: string;
  skill_requirements?: Skillrequirement[];
  unarmed_allowed: boolean;
  melee_allowed?: boolean;
  buff_duration: number;
  bonus_dodges?: number;
  flat_bonuses?: Multbonus[];
  max_stacks?: number;
  mult_bonuses?: Multbonus2[];
}

interface Onattackbuff {
  id: string;
  name: string;
  description: string;
  unarmed_allowed?: boolean;
  melee_allowed?: boolean;
  buff_duration: number;
  mult_bonuses?: Multbonus2[];
  max_stacks?: number;
  flat_bonuses?: Multbonus[];
  skill_requirements?: Skillrequirement[];
  bonus_dodges?: number;
}

interface Ongethitbuff {
  id: string;
  name: string;
  description: string;
  skill_requirements: Skillrequirement[];
  unarmed_allowed?: boolean;
  buff_duration: number;
  flat_bonuses?: Flatbonus[];
  melee_allowed?: boolean;
  max_stacks?: number;
  mult_bonuses?: Flatbonus2[];
}

interface Onblockbuff {
  id: string;
  name: string;
  description: string;
  skill_requirements: Skillrequirement[];
  melee_allowed: boolean;
  buff_duration: number;
  flat_bonuses?: Flatbonus2[];
  max_stacks?: number;
}

interface Flatbonus2 {
  stat: string;
  scale: number;
}

interface Oncritbuff {
  id: string;
  name: string;
  description: string;
  skill_requirements?: Skillrequirement[];
  melee_allowed?: boolean;
  buff_duration: number;
  max_stacks?: number;
  mult_bonuses?: Multbonus2[];
  unarmed_allowed?: boolean;
  flat_bonuses?: Flatbonus[];
}

interface Onhitbuff {
  id: string;
  name: string;
  description: string;
  unarmed_allowed: boolean;
  skill_requirements: Skillrequirement[];
  buff_duration: number;
  flat_bonuses?: Flatbonus[];
  bonus_blocks?: number;
  bonus_dodges?: number;
  req_buffs?: string[];
  mult_bonuses?: Flatbonus[];
  max_stacks?: number;
  melee_allowed?: boolean;
}

interface Onmissbuff {
  id: string;
  name: string;
  description: string;
  unarmed_allowed?: boolean;
  skill_requirements?: Skillrequirement[];
  buff_duration: number;
  max_stacks?: number;
  mult_bonuses?: Multbonus2[];
  melee_allowed?: boolean;
  flat_bonuses?: Multbonus[];
}

interface Ondodgebuff {
  id: string;
  name: string;
  description: string;
  skill_requirements?: Skillrequirement[];
  unarmed_allowed?: boolean;
  buff_duration: number;
  mult_bonuses?: Multbonus[];
  bonus_dodges?: number;
  flat_bonuses?: Multbonus2[];
  melee_allowed?: boolean;
  max_stacks?: number;
}

interface Onmovebuff {
  id: string;
  name: string;
  description: string;
  skill_requirements?: Skillrequirement[];
  unarmed_allowed?: boolean;
  buff_duration: number;
  max_stacks?: number;
  flat_bonuses?: Multbonus[];
  melee_allowed?: boolean;
  bonus_blocks?: number;
  req_buffs?: string[];
  mult_bonuses?: Multbonus2[];
  bonus_dodges?: number;
  wall_adjacent?: boolean;
}

interface Multbonus2 {
  stat: string;
  type: string;
  scale: number;
}

interface Staticbuff {
  id: string;
  name: string;
  description: string;
  unarmed_allowed?: boolean;
  unarmed_weapons_allowed?: boolean;
  melee_allowed?: boolean;
  flat_bonuses?: Flatbonus[];
  skill_requirements?: Skillrequirement[];
  bonus_dodges?: number;
  bonus_blocks?: number;
  throw_immune?: boolean;
  quiet?: boolean;
  stealthy?: boolean;
  mult_bonuses?: Multbonus[];
  wall_adjacent?: boolean;
  '//'?: string;
}

interface Multbonus {
  stat: string;
  scale: number;
  type?: string;
}

interface Skillrequirement {
  name: string;
  level: number;
}

interface Flatbonus {
  stat: string;
  'scaling-stat'?: string;
  scale: number;
  type?: string;
}

interface Name {
  str: string;
}
