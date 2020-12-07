import { CDDA_JSON_TYPES } from './names';

export interface IEmit {
  id: string;
  type: CDDA_JSON_TYPES.emit;
  '//'?: string;
  field: string;
  intensity?: number;
  chance?: number;
  qty?: number;
}
