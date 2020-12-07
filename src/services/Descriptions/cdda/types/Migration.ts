import { CDDA_JSON_TYPES } from './names';

export interface IMigration {
  id: string[] | string;
  type: CDDA_JSON_TYPES.MIGRATION;
  replace: string;
  flags?: string[];
  charges?: number;
  contents?: Content[];
  sealed?: boolean;
}

interface Content {
  id: string;
  count: number;
}
