import { CDDA_JSON_TYPES } from './names';

export interface ISpeech {
  type: CDDA_JSON_TYPES.speech;
  speaker: string[] | string;
  sound: string;
  volume: number;
  '//hat tip'?: string;
}
