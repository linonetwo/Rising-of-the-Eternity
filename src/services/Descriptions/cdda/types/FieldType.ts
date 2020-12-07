import { CDDA_JSON_TYPES } from './names';

export interface IFieldType {
  id: string;
  type: CDDA_JSON_TYPES.field_type;
  legacy_enum_id?: number;
  intensity_levels: Intensitylevel[];
  description_affix?: string;
  underwater_age_speedup?: string;
  decay_amount_factor?: number;
  is_splattering?: boolean;
  half_life?: string;
  phase?: string;
  accelerated_decay?: boolean;
  display_field?: boolean;
  looks_like?: string;
  immunity_data?: Immunitydata;
  immune_mtypes?: string[];
  decrease_intensity_on_contact?: boolean;
  priority?: number;
  display_items?: boolean;
  bash?: Bash;
  apply_slime_factor?: number;
  has_acid?: boolean;
  has_fire?: boolean;
  gas_absorption_factor?: number;
  has_fume?: boolean;
  percent_spread?: number;
  dirty_transparency_cache?: boolean;
  legacy_make_rubble?: boolean;
  outdoor_age_speedup?: string;
  wandering_field?: string;
  has_elec?: boolean;
  npc_complain?: Npccomplain;
}

interface Npccomplain {
  chance: number;
  issue: string;
  duration: string;
  speech: string;
}

interface Bash {
  str_min: number;
  str_max: number;
  sound_vol: number;
  sound_fail_vol: number;
  sound: string;
  msg_success: string;
  sound_fail?: string;
}

interface Immunitydata {
  traits?: string[];
  body_part_env_resistance?: (number | string)[][];
}

interface Intensitylevel {
  name?: string;
  color?: string;
  sym?: string;
  effects?: Effect[];
  transparent?: boolean;
  dangerous?: boolean;
  light_emitted?: number;
  translucency?: number;
  convection_temperature_mod?: number;
  scent_neutralization?: number;
  extra_radiation_max?: number;
  radiation_hurt_damage_min?: number;
  radiation_hurt_damage_max?: number;
  radiation_hurt_message?: string;
  '//'?: string;
  monster_spawn_chance?: number;
  monster_spawn_count?: number;
  monster_spawn_radius?: number;
  monster_spawn_group?: string;
  light_override?: number;
  intensity_upgrade_chance?: number;
  intensity_upgrade_duration?: string;
  move_cost?: number;
}

interface Effect {
  effect_id: string;
  body_part: string;
  intensity: number;
  min_duration: string;
  max_duration: string;
  chance_in_vehicle: number;
  chance_inside_vehicle: number;
  chance_outside_vehicle: number;
}
