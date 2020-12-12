export interface IVehicle {
  id: string;
  type: 'vehicle';
  name: string;
  blueprint?: Array<string[] | string>;
  parts: Array<
    | Part
    | Parts2
    | Parts3
    | Parts4
    | Parts5
    | Parts6
    | Parts7
    | Parts8
    | Parts9
    | Parts10
    | Parts11
    | Parts12
    | Parts13
    | Parts14
    | Parts15
    | Parts16
    | Parts17
  >;
  items?: Array<
    Item | Items2 | Items3 | Items4 | Items5 | Items6 | Items7 | Items8 | Items9 | Items10 | Items11 | Items12 | Items13 | Items14
  >;
  '//'?: string;
}

interface Items14 {
  x: number;
  y: number;
  chance: number;
  items?: string[];
  item_groups?: string[];
}

interface Items13 {
  x: number;
  y: number;
  chance: number;
  '//repeat': number;
  item_groups: string[];
}

interface Items12 {
  x: number;
  y: number;
  chance: number;
  items: string[];
  magazine?: number;
  ammo?: number;
}

interface Items11 {
  x: number;
  y: number;
  chance: number;
  items: string[];
  ammo?: number;
}

interface Items10 {
  x: number;
  y: number;
  chance: number;
  items?: string[];
  item_groups?: string[];
  ammo?: number;
}

interface Items9 {
  x: number;
  y: number;
  chance: number;
  items?: string[];
  '//'?: _;
}

interface _ {
  item: string;
  'container-item': string;
}

interface Items8 {
  x: number;
  y: number;
  chance: number;
  item_groups: string[];
}

interface Items7 {
  x: number;
  y: number;
  chance: number;
  item_groups?: string;
  items?: string[];
}

interface Items6 {
  x: number;
  y: number;
  chance: number;
  items: string[];
}

interface Items5 {
  x: number;
  y: number;
  chance: number;
  magazine?: number;
  ammo?: number;
  item_groups?: string[];
  items?: string[];
}

interface Items4 {
  x: number;
  y: number;
  chance: number;
  item_groups?: string;
  items?: string[] | string;
}

interface Items3 {
  x: number;
  y: number;
  chance: number;
  item_groups: string[];
  magazine?: number;
  ammo?: number;
}

interface Items2 {
  x: number;
  y: number;
  chance: number;
  magazine: number;
  ammo: number;
  item_groups: string[];
}

interface Item {
  x: number;
  y: number;
  chance: number;
  '//repeat'?: number;
  item_groups: string[];
}

interface Parts17 {
  x: number;
  y: number;
  parts?: Array<Part2 | string | string>;
  part?: string;
  fuel?: string;
}

interface Parts16 {
  x: number;
  y: number;
  parts?: Array<Part3 | Part2 | Part2 | string | string | string>;
  part?: string;
}

interface Part3 {
  part: string;
  ammo: number;
  ammo_qty: number[];
}

interface Parts15 {
  x: number;
  y: number;
  parts?: Array<Part2 | string | string>;
  part?: string;
  ammo?: number;
  ammo_types?: string[];
  ammo_qty?: number[];
}

interface Parts14 {
  x: number;
  y: number;
  part?: string;
  parts?: string[];
  fuel?: string;
}

interface Parts13 {
  x: number;
  y: number;
  parts?: Array<Part2 | Part2 | Parts32 | string | string | string>;
  part?: string;
}

interface Parts32 {
  ammo_types: string[];
  part: string;
  ammo: number;
  ammo_qty: number[];
}

interface Parts12 {
  x: number;
  y: number;
  parts?: Array<Part2 | string | string>;
  part?: string;
  ammo?: number;
  ammo_qty?: number[];
  fuel?: string;
}

interface Parts11 {
  x: number;
  y: number;
  part: string;
}

interface Parts10 {
  x: number;
  y: number;
  parts: string[];
}

interface Parts9 {
  x: number;
  y: number;
  parts?: Array<Part2 | string | string>;
  part?: string;
}

interface Parts8 {
  x: number;
  y: number;
  part?: string;
  fuel?: string;
  parts?: string[];
  ammo?: number;
  ammo_qty?: number[];
}

interface Parts7 {
  x: number;
  y: number;
  part?: string;
  parts?: string[];
}

interface Parts6 {
  y: number;
  x: number;
  parts: Array<Part2 | string>;
}

interface Parts5 {
  x: number;
  y: number;
  parts?: Array<Part2 | Part2 | string | string>;
  part?: string;
  fuel?: string;
}

interface Parts4 {
  x: number;
  y: number;
  part?: string;
  fuel?: string;
  parts?: string[];
  ammo?: number;
  ammo_types?: string[];
  ammo_qty?: number[];
}

interface Parts3 {
  y: number;
  x: number;
  parts: Array<Part2 | string | string>;
}

interface Parts2 {
  x: number;
  y: number;
  parts?: Array<Part2 | string | string>;
  part?: string;
  ammo?: number;
  ammo_types?: string[];
  ammo_qty?: number[];
  fuel?: string;
}

interface Part2 {
  fuel: string;
  part: string;
}

interface Part {
  x: number;
  y: number;
  parts?: string[];
  part?: string;
  ammo?: number;
  ammo_types?: string[];
  ammo_qty?: number[];
}
