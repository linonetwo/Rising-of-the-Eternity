export interface ISpell {
  id: string;
  type: 'SPELL';
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
  energy_source?: string;
  difficulty?: number;
  base_energy_cost?: number;
  duration_increment?: number;
  extra_effects?: Extraeffect[];
  sound_description?: string;
  sound_id?: string;
  sound_variant?: string;
  min_dot?: number;
  max_dot?: number;
  spell_class?: string;
  energy_increment?: number;
  final_energy_cost?: number;
  '//'?: string;
  '//2'?: string;
  range_increment?: number;
  casting_time_increment?: number;
  final_casting_time?: number;
  components?: string;
  field_chance?: number;
  sound_type?: string;
  affected_body_parts?: string[];
  message?: string;
  learn_spells?: Learnspells;
  '//3'?: string;
  '//4'?: string;
  '//5'?: string;
  dot_increment?: number;
  '//6'?: string;
  min_pierce?: number;
  max_pierce?: number;
  pierce_increment?: number;
  '//7'?: string;
  field_intensity_variance?: number;
  targeted_monster_ids?: string[];
  sound_ambient?: boolean;
}

interface Learnspells {
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
