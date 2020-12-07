import { CDDA_JSON_TYPES } from './names';

export interface IScenarioBlacklist {
  type: CDDA_JSON_TYPES.SCENARIO_BLACKLIST;
  subtype: string;
  scenarios: string[];
}
