export interface IBionic {
  id: string;
  type: 'bionic';
  name: Name;
  description: string;
  occupied_bodyparts?: Array<Array<number | string>>;
  act_cost?: number | string;
  flags?: string[];
  react_cost?: number | string;
  time?: number;
  bash_protec?: Array<Array<number | string>>;
  cut_protec?: Array<Array<number | string>>;
  bullet_protec?: Array<Array<number | string>>;
  env_protec?: Array<Array<number | string>>;
  fuel_options?: string[];
  fuel_efficiency?: number;
  fuel_capacity?: number;
  fake_item?: string;
  encumbrance?: Array<Array<number | string>>;
  included?: boolean;
  is_remote_fueled?: boolean;
  enchantments?: string[];
  stat_bonus?: Array<Array<number | string>>;
  vitamin_absorb_mod?: number;
  included_bionics?: string[];
  exothermic_power_gen?: boolean;
  canceled_mutations?: string[];
  capacity?: string;
  passive_fuel_efficiency?: number;
  weight_capacity_bonus?: string;
  '//'?: string;
  learned_spells?: Learnedspells;
  learned_proficiencies?: string[];
  spell_on_activation?: Spellonactivation;
}

interface Spellonactivation {
  id: string;
  hit_self: boolean;
}

interface Learnedspells {
  overcharge_eyes: number;
}

interface Name {
  str: string;
}
