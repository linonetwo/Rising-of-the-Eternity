import { CDDA_JSON_TYPES } from './names';

export interface IVehiclePartCategory {
  id: string;
  type: CDDA_JSON_TYPES.vehicle_part_category;
  name: Name;
  short_name: Name;
  '//': string;
  priority: number;
}

interface Name {
  str: string;
}
