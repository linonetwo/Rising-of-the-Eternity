export interface IRelicProcgenData {
  type: 'relic_procgen_data';
  id: string;
  charge_types: Chargetype[];
  active_procgen_values: Activeprocgenvalue[];
  passive_mult_procgen_values?: Passivemultprocgenvalue[];
  passive_add_procgen_values: Passivemultprocgenvalue[];
  type_weights: Typeweight[];
  items: Item[];
}

interface Item {
  weight: number;
  item: string;
}

interface Typeweight {
  weight: number;
  value: string;
}

interface Passivemultprocgenvalue {
  weight: number;
  min_value: number;
  max_value: number;
  type: string;
  increment: number;
  power_per_increment: number;
}

interface Activeprocgenvalue {
  weight: number;
  spell_id: string;
  base_power: number;
}

interface Chargetype {
  weight: number;
  charges: Charges;
  charges_per_use: Charges;
  max_charges: Charges;
  recharge_type: string;
  time: string[];
}

interface Charges {
  range: number[];
  power: number;
}
