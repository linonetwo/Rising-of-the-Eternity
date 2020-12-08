export interface IVehicleGroup {
  type: 'vehicle_group';
  id: string;
  vehicles: Array<Array<number | string>>;
  '//'?: string;
}
