export interface IWeatherType {
  id: string;
  type: 'weather_type';
  name: string;
  color: string;
  map_color: string;
  sym: string;
  ranged_penalty: number;
  sight_penalty: number;
  light_modifier: number;
  sound_attn: number;
  dangerous: boolean;
  precip: string;
  rains: boolean;
  acidic: boolean;
  sun_intensity: string;
  requirements: Requirements;
  tiles_animation?: string;
  weather_animation?: Weatheranimation;
  sound_category?: string;
  effects?: Effect[];
}

interface Effect {
  one_in_chance?: number;
  must_be_outside: boolean;
  sound_message?: string;
  sound_effect?: string;
  message?: string;
  lightning?: boolean;
  time_between?: string;
  rain_proof?: boolean;
  pain_max?: number;
  pain?: number;
  wet?: number;
}

interface Weatheranimation {
  factor: number;
  color: string;
  sym: string;
}

interface Requirements {
  pressure_min?: number;
  humidity_max?: number;
  time?: string;
  pressure_max?: number;
  humidity_min?: number;
  humidity_and_pressure?: boolean;
  required_weathers?: string[];
  temperature_max?: number;
  windpower_min?: number;
}
