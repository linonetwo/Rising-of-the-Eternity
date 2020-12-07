import { CDDA_JSON_TYPES } from './names';

export interface ITrap {
  type: CDDA_JSON_TYPES.trap;
  id: string;
  name: string;
  color: string;
  symbol: string;
  visibility: number;
  avoidance: number;
  difficulty: number;
  action: string;
  drops?: (Drop | string | string)[];
  vehicle_data?: Vehicledata;
  comfort?: number;
  floor_bedding_warmth?: number;
  benign?: boolean;
  funnel_radius?: number;
  map_regen?: string;
  trigger_weight?: string;
  trap_radius?: number;
  always_invisible?: boolean;
  spell_data?: Spelldata;
}

interface Spelldata {
  id: string;
}

interface Vehicledata {
  sound_volume?: number;
  sound?: string;
  damage?: number;
  sound_type?: string;
  sound_variant?: string;
  remove_trap?: boolean;
  spawn_items?: (Spawnitem | string | string)[];
  chance?: number;
  set_trap?: string;
  do_explosion?: boolean;
  shrapnel?: number;
  is_falling?: boolean;
}

interface Spawnitem {
  id: string;
  chance: number;
}

interface Drop {
  item: string;
  quantity: number;
  charges: number;
}
