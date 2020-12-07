import { CDDA_JSON_TYPES } from './names';

export interface IVehiclePlacement {
  type: CDDA_JSON_TYPES.vehicle_placement;
  id: string;
  locations: Location[];
}

interface Location {
  x: number[] | number[] | number | number;
  y: (number[] | number)[];
  facing: number[] | number;
}
