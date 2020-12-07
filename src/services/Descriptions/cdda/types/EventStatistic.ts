import { CDDA_JSON_TYPES } from './names';

export interface IEventStatistic {
  id: string;
  type: CDDA_JSON_TYPES.event_statistic;
  stat_type: string;
  event_type?: string;
  field?: string;
  event_transformation?: string;
  description?: Description;
}

interface Description {
  str?: string;
  str_pl?: string;
  str_sp?: string;
}
