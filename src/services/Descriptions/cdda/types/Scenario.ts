export interface IScenario {
  type: 'scenario';
  id: string;
  name?: string;
  points?: number;
  description?: string;
  allowed_locs?: string[];
  start_name?: string;
  flags?: string[];
  missions?: string[];
  professions?: string[];
  forced_traits?: string[];
  forbidden_traits?: string[];
  traits?: string[];
  custom_initial_date?: Custominitialdate;
  add_professions?: boolean;
  vehicle?: string;
  map_extra?: string;
  'copy-from'?: string;
  extend?: Extend;
  blacklist_professions?: boolean;
}

interface Extend {
  professions: string[];
  map_special?: string;
}

interface Custominitialdate {
  season: string;
  year?: number;
}
