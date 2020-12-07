import { CDDA_JSON_TYPES } from './names';

export interface IMovementMode {
  type: CDDA_JSON_TYPES.movement_mode;
  id: string;
  character: string;
  panel_char: string;
  name: string;
  panel_color: string;
  symbol_color: string;
  exertion_level: string;
  change_good_none: string;
  change_good_animal: string;
  change_good_mech: string;
  move_type: string;
  move_speed_multiplier: number;
  change_bad_none?: string;
  change_bad_animal?: string;
  change_bad_mech?: string;
  stop_hauling?: boolean;
  sound_multiplier?: number;
  stamina_multiplier?: number;
  swim_speed_mod?: number;
}
