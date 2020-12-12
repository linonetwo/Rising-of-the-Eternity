export interface IEnchantment {
  type: 'enchantment';
  id: string;
  condition?: string;
  ench_effects?: Encheffect[];
  emitter?: string;
  hit_you_effect?: Hityoueffect[];
  values?: Value[];
  has?: string;
  mutations?: string[];
  hit_me_effect?: Hitmeeffect[];
  intermittent_activation?: Intermittentactivation;
}

interface Intermittentactivation {
  effects: Effect[];
}

interface Effect {
  frequency: string;
  spell_effects: Spelleffect[];
}

interface Spelleffect {
  id: string;
}

interface Hitmeeffect {
  id: string;
  hit_self?: boolean;
  message?: string;
  npc_message?: string;
  once_in?: number;
}

interface Value {
  value: string;
  multiply?: number;
  add?: number;
}

interface Hityoueffect {
  id: string;
  hit_self?: boolean;
  once_in?: number;
  message?: string;
  min_level?: number;
}

interface Encheffect {
  effect: string;
  intensity: number;
}
