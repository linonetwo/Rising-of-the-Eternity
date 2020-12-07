import { CDDA_JSON_TYPES } from './names';

export interface IEnchantment {
  type: CDDA_JSON_TYPES.enchantment;
  id: string;
  condition?: string;
  ench_effects?: Encheffect[];
  emitter?: string;
  values?: Value[];
  hit_me_effect?: Hitmeeffect[];
  hit_you_effect?: Hityoueffect[];
  has?: string;
  mutations?: string[];
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

interface Hityoueffect {
  id: string;
  hit_self?: boolean;
  once_in?: number;
  message?: string;
  min_level?: number;
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

interface Encheffect {
  effect: string;
  intensity: number;
}
