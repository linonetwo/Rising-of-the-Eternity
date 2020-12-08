export interface ITraitGroup {
  type: 'trait_group';
  id: string;
  subtype: string;
  traits: Array<
    Trait | Traits2 | Traits3 | Distribution2 | Traits5 | Distribution | Traits7 | Traits8 | Traits9 | Traits10 | Traits11 | Traits12
  >;
  '//'?: string;
  '//2'?: string;
  '//3'?: string;
}

interface Traits12 {
  distribution?: Traits8[];
  prob: number;
  trait?: string;
  group?: string;
}

interface Traits11 {
  group?: string;
  prob: number;
  trait?: string;
}

interface Traits10 {
  group: string;
  prob: number;
}

interface Traits9 {
  group: string;
}

interface Traits8 {
  trait: string;
  prob?: number;
}

interface Traits7 {
  trait?: string;
  prob: number;
  distribution?: Distribution[];
}

interface Traits5 {
  trait?: string;
  distribution?: Distribution3[];
  prob?: number;
}

interface Distribution3 {
  trait?: string;
  collection?: Distribution[];
}

interface Traits3 {
  trait?: string;
  prob?: number;
  distribution?: Distribution2[];
}

interface Distribution2 {
  trait: string;
  prob: number;
}

interface Traits2 {
  trait?: string;
  prob?: number;
  distribution?: Distribution[];
}

interface Distribution {
  trait: string;
}

interface Trait {
  group?: string;
  trait?: string;
}
