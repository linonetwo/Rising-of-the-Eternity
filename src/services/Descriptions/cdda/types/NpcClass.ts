import { CDDA_JSON_TYPES } from './names';

export interface INpcClass {
  type: CDDA_JSON_TYPES.npc_class;
  id: string;
  name: Name | string;
  job_description: string;
  skills?: Skill[];
  bonus_str?: Bonusstr | number;
  bonus_dex?: Bonusdex | Bonusstr | Bonusdex3 | number;
  traits?: (
    | Trait
    | Traits2
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | (number | string)[]
    | Traits7
    | Distribution
    | Distribution
    | Distribution
    | Traits11
    | Traits12
  )[];
  bonus_per?: Bonusstr | Bonusdex3 | Bonusper3 | number;
  bonus_int?: Bonusstr | Bonusdex3 | number;
  '//'?: string;
  worn_override?: string;
  carry_override?: string;
  weapon_override?: string;
  common?: boolean;
  shopkeeper_item_group?: string;
  spells?: Spell[];
  bionics?: Bionic[];
  '//2'?: string;
  proficiencies?: string[];
}

interface Bionic {
  id: string;
  chance: number;
}

interface Spell {
  id: string;
  level: number;
}

interface Bonusper3 {
  sum: Sum2[];
}

interface Traits12 {
  distribution: Distribution[];
}

interface Traits11 {
  group: string;
  prob: number;
}

interface Traits7 {
  trait: string;
}

interface Traits2 {
  group?: string;
  distribution?: Distribution[];
}

interface Distribution {
  group: string;
}

interface Trait {
  trait?: string;
  group?: string;
}

interface Bonusdex3 {
  one_in: number;
}

interface Bonusdex {
  dice: number[];
}

interface Bonusstr {
  rng: number[];
}

interface Skill {
  skill: string;
  bonus?: Bonus;
  level?: Level;
}

interface Level {
  mul?: Mul[];
  dice?: number[];
  sum?: Sum2[];
}

interface Sum2 {
  dice?: number[];
  constant?: number;
}

interface Mul {
  one_in?: number;
  sum?: Sum[];
}

interface Sum {
  dice?: number[];
  rng?: number[];
}

interface Bonus {
  one_in?: number;
  rng?: number[];
}

interface Name {
  str: string;
}
