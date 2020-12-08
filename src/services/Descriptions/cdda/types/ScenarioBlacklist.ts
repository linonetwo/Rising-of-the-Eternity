export interface IScenarioBlacklist {
  type: 'SCENARIO_BLACKLIST';
  subtype: string;
  scenarios: string[];
}
