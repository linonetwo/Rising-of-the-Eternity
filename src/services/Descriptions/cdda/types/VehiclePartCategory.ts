export interface IVehiclePartCategory {
  id: string;
  type: 'vehicle_part_category';
  name: Name;
  short_name: Name;
  '//': string;
  priority: number;
}

interface Name {
  str: string;
}
