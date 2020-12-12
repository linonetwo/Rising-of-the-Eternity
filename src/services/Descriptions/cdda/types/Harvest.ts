export interface IHarvest {
  id: string;
  type: 'harvest';
  entries: Array<
    | Entry
    | Entries2
    | Entries3
    | Entries4
    | Entries5
    | Entries6
    | Entries7
    | Entries8
    | Entries9
    | Entries10
    | Entries11
    | Entries12
    | Entries13
  >;
  message?: string;
  '//'?: string;
}

interface Entries13 {
  drop: string;
  type: string;
  mass_ratio?: number;
  scale_num?: number[];
  max?: number;
}

interface Entries12 {
  drop: string;
  type: string;
  mass_ratio?: number;
  base_num?: number[];
  scale_num?: number[];
}

interface Entries11 {
  drop: string;
  type: string;
  mass_ratio: number;
}

interface Entries10 {
  drop: string;
  type: string;
  flags?: string[];
  mass_ratio?: number;
  max?: number;
}

interface Entries9 {
  drop: string;
  base_num: number[];
  scale_num: number[];
  max: number;
  type: string;
}

interface Entries8 {
  drop: string;
  type: string;
  flags?: string[];
  faults?: string[];
  mass_ratio?: number;
}

interface Entries7 {
  drop: string;
  type: string;
  mass_ratio?: number;
  scale_num?: number[];
  max?: number;
  flags?: string[];
  faults?: string[];
}

interface Entries6 {
  drop: string;
  type: string;
  mass_ratio?: number;
  max?: number;
}

interface Entries5 {
  drop: string;
  type: string;
  mass_ratio?: number;
  scale_num?: number[];
  max?: number;
  flags?: string[];
}

interface Entries4 {
  drop: string;
  type: string;
  flags?: string[];
  mass_ratio?: number;
  max?: number;
  faults?: string[];
}

interface Entries3 {
  drop: string;
  type: string;
  flags?: string[];
  faults?: string[];
  mass_ratio?: number;
  base_num?: number[];
  scale_num?: number[];
  max?: number;
}

interface Entries2 {
  drop: string;
  type: string;
  mass_ratio?: number;
  base_num?: number[];
}

interface Entry {
  drop: string;
  type: string;
  mass_ratio?: number;
  base_num?: number[];
  scale_num?: number[];
  max?: number;
}
