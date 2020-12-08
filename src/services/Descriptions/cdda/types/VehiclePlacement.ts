export interface IVehiclePlacement {
  type: 'vehicle_placement';
  id: string;
  locations: Location[];
}

interface Location {
  x: number[] | number[] | number | number;
  y: Array<number[] | number>;
  facing: number[] | number;
}
