export interface IMonstergroup {
  type: 'monstergroup';
  name: string;
  default?: string;
  is_animal?: boolean;
  monsters?: Array<
    | Monster
    | Monsters2
    | Monsters3
    | Monsters4
    | Monsters5
    | Monsters6
    | Monsters7
    | Monsters8
    | Monsters9
    | Monsters10
    | Monsters11
    | Monsters12
    | Monsters13
    | Monsters14
    | Monsters15
    | Monsters16
    | Monsters17
    | Monsters18
    | Monsters19
    | Monsters20
    | Monsters21
    | Monsters22
    | Monsters23
    | Monsters24
  >;
  is_safe?: boolean;
  '//'?: string;
  auto_total?: boolean;
}

interface Monsters24 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  pack_size: number[];
  conditions?: string[];
}

interface Monsters23 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  starts: number;
}

interface Monsters22 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  pack_size?: number[];
  ends?: number;
  starts?: number;
}

interface Monsters21 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  pack_size: number[];
  starts?: number;
}

interface Monsters20 {
  monster: string;
  freq: number;
  cost_multiplier: number;
}

interface Monsters19 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  starts: number;
  pack_size?: number[];
}

interface Monsters18 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  starts: number;
  pack_size: number[];
}

interface Monsters17 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  pack_size?: number[];
}

interface Monsters16 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  pack_size: number[];
}

interface Monsters15 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  pack_size?: number[];
  conditions?: string[];
}

interface Monsters14 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  pack_size: number[];
  conditions?: string[];
  ends?: number;
}

interface Monsters13 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  pack_size?: number[];
  conditions?: string[];
  ends?: number;
  starts?: number;
}

interface Monsters12 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  conditions?: string[];
  pack_size?: number[];
  starts?: number;
}

interface Monsters11 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  starts?: number;
  pack_size?: number[];
}

interface Monsters10 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  spawn_data: Spawndata;
}

interface Spawndata {
  ammo: Ammo[];
}

interface Ammo {
  ammo_id: string;
  qty: number;
}

interface Monsters9 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  conditions: string[];
}

interface Monsters8 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  conditions?: string[];
}

interface Monsters7 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  starts?: number;
}

interface Monsters6 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  ends?: number;
  starts?: number;
}

interface Monsters5 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  pack_size?: number[];
  conditions: string[];
}

interface Monsters4 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  starts: number;
  conditions: string[];
}

interface Monsters3 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  pack_size: number[];
  conditions: string[];
}

interface Monsters2 {
  monster: string;
  freq: number;
  cost_multiplier: number;
  ends?: number;
  pack_size?: number[];
  conditions?: string[];
  starts?: number;
  '//'?: string;
}

interface Monster {
  monster: string;
  freq: number;
  cost_multiplier: number;
  starts?: number;
  conditions?: string[];
}
