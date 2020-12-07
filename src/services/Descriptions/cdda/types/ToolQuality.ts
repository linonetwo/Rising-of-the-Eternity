import { CDDA_JSON_TYPES } from './names';

export interface IToolQuality {
  type: CDDA_JSON_TYPES.tool_quality;
  id: string;
  name: Name | string;
  usages?: (string[] | number)[][];
  '//'?: string;
  '//2'?: string;
  '//3'?: string;
}

interface Name {
  str: string;
}
