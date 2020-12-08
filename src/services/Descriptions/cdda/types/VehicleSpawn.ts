export interface IVehicleSpawn {
  type: 'vehicle_spawn';
  id: string;
  spawn_types: Spawntype[];
}

interface Spawntype {
  '//': string;
  weight: number;
  vehicle_function?: string;
  vehicle_json?: Vehiclejson;
}

interface Vehiclejson {
  vehicle: string;
  placement: string;
  number: number[] | number[] | number | number;
  fuel: number;
  status: number;
}
