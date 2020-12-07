import { CDDA_JSON_TYPES } from './names';

export interface IVehicleGroup {
  type: CDDA_JSON_TYPES.vehicle_group;
  id: string;
  vehicles: (number | string)[][];
  '//'?: string;
}
