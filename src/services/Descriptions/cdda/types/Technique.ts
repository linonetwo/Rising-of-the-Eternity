import { CDDA_JSON_TYPES } from './names';

export interface ITechnique {
  type: CDDA_JSON_TYPES.technique;
  id: string;
  name: string;
  messages?: string[];
  skill_requirements?: Skillrequirement[];
  melee_allowed?: boolean;
  unarmed_allowed?: boolean;
  block_counter?: boolean;
  crit_ok?: boolean;
  weighting?: number;
  disarms?: boolean;
  stun_dur?: number;
  mult_bonuses?: Multbonus[];
  unarmed_weapons_allowed?: boolean;
  crit_tec?: boolean;
  down_dur?: number;
  aoe?: string;
  wall_adjacent?: boolean;
  defensive?: boolean;
  grab_break?: boolean;
  dodge_counter?: boolean;
  knockback_dist?: number;
  knockback_spread?: number;
  miss_recovery?: boolean;
  req_buffs?: string[] | string;
  stunned_target?: boolean;
  powerful_knockback?: boolean;
  dummy?: boolean;
  description?: string;
  '//'?: string;
  downed_target?: boolean;
  weapon_damage_requirements?: Weapondamagerequirement[];
  side_switch?: boolean;
  human_target?: boolean;
  flat_bonuses?: Multbonus[];
  take_weapon?: boolean;
  knockback_follow?: boolean;
}

interface Weapondamagerequirement {
  type: string;
  min: number;
}

interface Multbonus {
  stat: string;
  scale: number;
  type?: string;
  'scaling-stat'?: string;
}

interface Skillrequirement {
  name: string;
  level: number;
}
