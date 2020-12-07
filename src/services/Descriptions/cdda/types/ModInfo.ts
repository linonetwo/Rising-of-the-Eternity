import { CDDA_JSON_TYPES } from './names';

export interface IModInfo {
  type: CDDA_JSON_TYPES.MOD_INFO;
  id: string;
  name: string;
  description: string;
  dependencies?: string[];
  authors?: string[] | string;
  maintainers?: string[];
  category?: string;
  version?: string;
  obsolete?: boolean;
  core?: boolean;
  path?: string;
  legacy?: string;
  '//'?: string;
}
