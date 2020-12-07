import { CDDA_JSON_TYPES } from './names';

export interface IAsciiArt {
  type: CDDA_JSON_TYPES.ascii_art;
  id: string;
  picture: string[];
}
