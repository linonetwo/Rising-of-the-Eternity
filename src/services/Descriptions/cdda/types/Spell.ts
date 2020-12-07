import { CDDA_JSON_TYPES } from './names';

export interface ISpell {
  id: string;
  type: CDDA_JSON_TYPES.SPELL;
  name: Name | string;
  description: string;
  valid_targets: string[];
  flags?: string[];
  effect: string;
  effect_str?: string;
  shape: string;
  max_level?: number;
  base_casting_time?: number;
  min_range?: number;
  max_range?: number;
  min_damage?: number;
  max_damage?: number;
  min_aoe?: number;
  max_aoe?: number;
  min_duration?: number;
  aoe_increment?: number;
  field_id?: string;
  min_field_intensity?: number;
  max_field_intensity?: number;
  field_intensity_increment?: number;
  max_duration?: number;
  damage_type?: string;
  damage_increment?: number;
  range_increment?: number;
  spell_class?: string;
  difficulty?: number;
  base_energy_cost?: number;
  energy_source?: string;
  duration_increment?: number;
  final_energy_cost?: number;
  final_casting_time?: number;
  skill?: string;
  components?: string;
  message?: string;
  sound_description?: string;
  sound_type?: string;
  sound_ambient?: boolean;
  sound_id?: string;
  sound_variant?: string;
  targeted_monster_ids?: string[];
  extra_effects?: Extraeffect[];
  affected_body_parts?: string[];
  field_chance?: number;
  field_intensity_variance?: number;
  min_dot?: number;
  max_dot?: number;
  dot_increment?: number;
  min_pierce?: number;
  max_pierce?: number;
  pierce_increment?: number;
  energy_increment?: number;
  casting_time_increment?: number;
  learn_spells?: Learnspells;
  '//'?: string;
  '//2'?: string;
  '//3'?: string;
  '//4'?: string;
  '//5'?: string;
  '//6'?: string;
  '//7'?: string;
}

interface Learnspells {
  test_fake_spell?: number;
  acid_resistance_greater?: number;
  create_atomic_light?: number;
  megablast?: number;
  technomancer_knifeshot_superior?: number;
}

interface Extraeffect {
  id: string;
  hit_self?: boolean;
}

interface Name {
  str: string;
}
