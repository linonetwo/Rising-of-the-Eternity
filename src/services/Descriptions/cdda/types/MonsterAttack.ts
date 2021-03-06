export interface IMonsterAttack {
  type: 'monster_attack';
  attack_type: string;
  id: string;
  cooldown: number;
  move_cost: number;
  damage_max_instance: Damagemaxinstance[];
  body_parts?: Array<Array<number | string>>;
  effects?: Effect[];
  hit_dmg_u: string;
  hit_dmg_npc: string;
  no_dmg_msg_u: string;
  no_dmg_msg_npc: string;
}

interface Effect {
  id: string;
  duration: number;
  bp?: string;
}

interface Damagemaxinstance {
  damage_type: string;
  amount: number;
  armor_penetration?: number;
  armor_multiplier?: number;
}
