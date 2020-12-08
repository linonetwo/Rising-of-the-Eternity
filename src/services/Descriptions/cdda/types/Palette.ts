import { CDDA_JSON_TYPES } from './names'

export interface IPalette {
  type: CDDA_JSON_TYPES.palette;
  id: string;
  furniture?: Furniture;
  terrain?: Terrain;
  toilets?: Toilets;
  items?: Items;
  mapping?: Mapping;
  traps?: Traps;
  fields?: Fields2;
  monster?: Monster;
  monsters?: Monsters;
  item?: Item8;
  liquids?: Liquids;
  sealed_item?: Sealeditem;
  vendingmachines?: Vendingmachines;
  vehicles?: Vehicles;
  '//'?: string;
  gaspumps?: Gaspumps;
  signs?: Signs;
  nested?: Nested;
  computers?: Computers;
}

interface Computers {
  '6': _62;
}

interface _62 {
  name: string;
  options: Option[];
  access_denied?: string;
  security?: number;
  failures?: Failure[];
}

interface Failure {
  action: string;
}

interface Option {
  name: string;
  action: string;
  security?: number;
}

interface Nested {
  d: D2;
}

interface D2 {
  chunks: (number | string)[][];
}

interface Signs {
  M: M;
}

interface M {
  signage: string;
}

interface Gaspumps {
  '!': _2;
}

interface Vehicles {
  'ɱ': _10;
  'ƃ': _10;
  'ɔ': _10;
  'Ƨ': _10;
  '^': _10;
  'Я': _10;
  'Г': _10;
  'ւ': _10;
}

interface _10 {
  vehicle: string;
  chance: number;
  rotation: number;
}

interface Vendingmachines {
  R?: R;
  S?: R;
  D?: R;
  F?: R;
  V?: V2;
  '8'?: R;
  '9'?: R;
  '4'?: R;
  '5'?: R;
}

interface V2 {
  item_group?: string;
}

interface R {
  item_group: string;
}

interface Sealeditem {
  '#'?: _9;
  '1'?: _5;
  '2'?: _5;
  '3'?: _5;
  '4'?: _5;
  '5'?: _5;
  '6'?: _5;
  '7'?: _5;
  '8'?: _5;
  '9'?: _5;
}

interface _9 {
  item: U4;
  furniture: string;
  chance: number;
}

interface Liquids {
  g?: G;
  '0'?: G;
  'Я'?: G;
  '6'?: G;
  '7'?: G;
  H?: G;
}

interface G {
  liquid: string;
  amount: number[];
}

interface Item8 {
  n?: _3;
  ':'?: _8;
  O?: _8;
  ','?: B2;
}

interface _8 {
  item: string;
  repeat: number[];
}

interface Monsters {
  '0'?: _0;
  '!'?: S[];
  '.'?: S[];
}

interface _0 {
  monster: string;
}

interface Monster {
  S?: S;
  s?: S;
  '.'?: S;
  ' '?: S;
  x?: S;
  Z?: S;
  X?: X;
}

interface X {
  monster: string;
  friendly: boolean;
}

interface S {
  monster: string;
  chance: number;
}

interface Fields2 {
  ' ': _7;
  '.': _7;
  s: _7;
  S: _7;
  '~': _7;
}

interface _7 {
  field: string;
  intensity: number;
}

interface Traps {
  '2': string;
  '7': string;
}

interface Mapping {
  '*'?: _5;
  W?: W;
  c?: C2;
  S?: C2;
  X?: C2;
  d?: C2;
  h?: H;
  ']'?: _6;
  l?: C2;
  f?: C2;
  s?: C2;
  b?: C2;
  r?: C2;
}

interface _6 {
  items: Item7[];
}

interface Item7 {
  item: string;
  chance: number;
  repeat?: number;
}

interface H {
  item: _3[];
}

interface C2 {
  items: _3[];
}

interface W {
  furniture: string;
  item: Item6;
  fields: Fields;
}

interface Fields {
  field: string;
}

interface Item6 {
  item: string;
  amount: number;
}

interface _5 {
  furniture: string;
  item: U4;
}

interface Items {
  ' '?: _3[] | _22 | _3;
  '.'?: _3[] | _22[] | _3;
  b?: _3[] | B2[] | B2 | _3;
  B?: B | _3[] | B3 | B2 | _3;
  C?: C[] | B2 | _3;
  d?: _3[] | B2[] | C[] | B2 | _3;
  D?: D | B2[] | B2 | _3;
  i?: C[] | B2 | _3;
  l?: _3[] | B2[] | B2 | _3;
  o?: _3[] | C[] | O3 | B2 | _3;
  q?: C[] | _3;
  Q?: B3 | C[] | B2 | _3;
  R?: _3[] | B2[] | B2 | _3;
  s?: B2[] | _3;
  S?: _3[] | B2 | _3;
  t?: C;
  U?: B3 | B2[] | C[] | U4 | B2 | _3;
  x?: B2[] | B2 | _3;
  X?: B2[] | B2 | _3;
  '$'?: B2[] | B2 | _3;
  j?: _3[] | C[] | B2;
  L?: _3[] | B2[] | C[] | B2 | _3;
  W?: _3[] | B2[] | C[] | _3 | B3[];
  N?: B3 | B2[] | _3;
  r?: _3[] | B2[] | C[] | B2 | _3;
  T?: _3[] | C[] | B2 | _3 | B3[];
  a?: C[] | B2 | _3;
  A?: C[] | _3 | A3;
  H?: _3;
  '9'?: C[] | B2;
  '!'?: C;
  c?: _3[] | B2[] | B2 | _3;
  h?: C;
  '%'?: B2;
  '~'?: B2;
  '1'?: _3[] | _3 | U4[];
  '2'?: _3[] | _3 | U4[];
  '3'?: _3[] | _3 | U4[];
  '4'?: _3[] | _3 | U4[];
  '5'?: _3 | U4[];
  '6'?: C[] | _3 | U4[];
  '7'?: _3[] | _3;
  '8'?: _3[] | C[] | B2;
  '&'?: C;
  E?: C;
  f?: _3[] | C[] | B2 | _3;
  I?: _3[] | B3 | _3;
  m?: _3[] | B2 | _3;
  V?: C[] | _3;
  Y?: _3[] | B2;
  u?: _3[] | B2[] | C[] | _3;
  v?: V[] | C[] | _3;
  w?: _3[] | C[] | B2;
  '^'?: _3;
  '{'?: C[] | B2;
  '}'?: B2;
  e?: B2[] | C[] | B2 | _3;
  O?: B2[] | C[] | B2 | _3 | B3[];
  p?: B2;
  Z?: B2[] | _3;
  z?: C[];
  F?: D | B2[] | B2 | _3;
  '@'?: _4;
  '?'?: B2;
  ','?: _3;
  M?: B2 | _3 | B3[];
  K?: B3 | C[] | B2 | _3;
  n?: C[] | B2 | _3;
  J?: C[] | _3 | B3[];
  '('?: B2[] | _3;
  ']'?: _3;
  '['?: _3;
  k?: C;
  P?: B2[] | B2 | _3;
  '≠'?: C[];
  _?: B3 | C[];
  '='?: B2;
  y?: C;
  ')'?: B2;
  '|'?: _3;
  g?: B2;
}

interface _4 {
  item: Item5 | string;
  chance: number;
  repeat?: number[];
}

interface Item5 {
  subtype: string;
  entries: Distribution[];
}

interface V {
  item: string;
  chance: number;
  repeat?: number[];
  ammo?: number;
  magazine?: number;
}

interface A3 {
  item: Item4;
  repeat: number[];
  chance: number;
}

interface Item4 {
  subtype: string;
  entries: Entry4[];
}

interface Entry4 {
  item?: string;
  prob: number;
  collection?: Collection[];
}

interface Collection {
  item: string;
  count?: number[];
}

interface U4 {
  item: string;
}

interface O3 {
  item: Item3;
  chance: number;
}

interface Item3 {
  subtype: string;
  entries: Entry3[];
}

interface Entry3 {
  group?: string;
  distribution?: Distribution[];
}

interface Distribution {
  group: string;
}

interface D {
  item: Item2;
  repeat: number[];
  chance: number;
}

interface Item2 {
  subtype: string;
  entries: Entry2[];
}

interface Entry2 {
  item: string;
  prob: number;
}

interface C {
  item: string;
  chance: number;
  repeat?: number[];
}

interface B3 {
  item: string;
  chance: number;
  repeat: number;
}

interface B {
  item: Item;
  repeat: number[];
  chance: number;
}

interface Item {
  subtype: string;
  entries: Entry[];
}

interface Entry {
  item: string;
  prob: number;
  count?: number[];
}

interface B2 {
  item: string;
  chance: number;
  repeat: number[];
}

interface _22 {
  item: string;
  chance: number;
  damage: number[];
}

interface _3 {
  item: string;
  chance: number;
}

interface Toilets {
  '&'?: _;
  ';'?: _2;
  t?: _2;
  T?: _2;
}

interface _2 {
}

interface _ {
  amount?: number[];
}

interface Terrain {
  '0'?: ((number | string)[] | string)[] | string;
  '1'?: string[] | ((number | string)[] | string)[] | string;
  '2'?: string[] | string;
  '3'?: string[] | string;
  '4'?: string;
  '5'?: string[] | string;
  '6'?: string;
  '7'?: string[] | ((number | string)[] | string)[] | string;
  '8'?: ((number | string)[] | string)[] | string;
  '9'?: string[] | string;
  ' '?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '!'?: string[] | ((number | string)[] | string)[] | string;
  '#'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  $?: string[] | ((number | string)[] | string)[] | string;
  '%'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '&'?: ((number | string)[] | string)[] | string;
  "'"?: ((number | string)[] | string)[] | string;
  '('?: string;
  ')'?: string[] | string;
  '*'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '+'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  ','?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '-'?: string[] | ((number | string)[] | string)[] | string;
  '.'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  ':'?: string[] | string;
  ';'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '<'?: string;
  '='?: string[] | ((number | string)[] | string)[] | string;
  '>'?: string;
  '?'?: string[] | string;
  '@'?: string[] | string;
  A?: string[] | string;
  B?: (number | string)[][] | string;
  C?: string;
  D?: string[] | ((number | string)[] | string)[] | string;
  E?: string;
  F?: string;
  G?: string;
  H?: string[] | string;
  I?: string[] | string;
  J?: string[] | string;
  K?: string;
  L?: ((number | string)[] | string)[] | (number | string)[][] | string;
  M?: string[] | string;
  N?: (number | string)[][] | string;
  O?: string;
  P?: string;
  Q?: string[] | string;
  R?: ((number | string)[] | string)[] | string;
  S?: string[] | ((number | string)[] | string)[] | string;
  T?: string[] | (number | string)[][] | string;
  U?: string;
  V?: string[] | string;
  W?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  X?: string[] | string;
  Y?: string;
  Z?: ((number | string)[] | string)[] | string;
  '^'?: string[] | string;
  _?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  a?: string;
  b?: ((number | string)[] | string)[] | string;
  c?: string;
  d?: string[] | string;
  e?: string;
  f?: string;
  g?: string;
  h?: string[] | string;
  i?: (number | string)[][] | string;
  j?: string;
  k?: string;
  l?: string[] | string;
  m?: ((number | string)[] | string)[] | string;
  n?: string[] | string;
  o?: string[] | ((number | string)[] | string)[] | string;
  p?: string[] | string;
  q?: string;
  r?: string[] | string;
  s?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  t?: string[] | string;
  u?: (number | string)[][] | string;
  v?: string[] | string;
  w?: string[] | ((number | string)[] | string)[] | string;
  x?: ((number | string)[] | string)[] | (number | string)[][] | string;
  y?: string;
  z?: string;
  '{'?: string;
  '|'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '}'?: string;
  '['?: ((number | string)[] | string)[] | string;
  ']'?: string;
  '/'?: ((number | string)[] | string)[] | (number | string)[][] | string;
  '~'?: string[] | ((number | string)[] | string)[] | string;
  '`'?: string[] | string;
  ó?: string;
  '˽'?: string;
  '°'?: string;
  ɔ?: string;
  Г?: string;
  ɱ?: string;
  ϻ?: ((number | string)[] | string)[];
  Я?: string;
  ւ?: string;
  Ŋ?: string;
  ȴ?: string;
  ȸ?: string;
  θ?: string;
  Ƨ?: string;
  '³'?: string;
  '§'?: string;
  Δ?: string;
  Ʌ?: string;
  Ŧ?: string;
  '±'?: string;
}

interface Furniture {
  '3'?: string;
  '4'?: string;
  '('?: string;
  ')'?: string;
  '*'?: string;
  '?'?: string;
  '@'?: string[] | string;
  A?: ((number | string)[] | string)[] | string;
  B?: string;
  C?: string[] | string;
  D?: string[] | string;
  F?: string;
  H?: string[] | string;
  K?: ((number | string)[] | string)[] | string;
  L?: ((number | string)[] | string)[] | string;
  O?: string[] | ((number | string)[] | string)[] | string;
  Q?: string;
  S?: (number | string)[][] | string;
  T?: ((number | string)[] | string)[] | string;
  W?: string[] | string;
  X?: string[] | ((number | string)[] | string)[] | string;
  b?: ((number | string)[] | string)[] | string;
  c?: string[] | string;
  d?: string[] | string;
  e?: string;
  f?: string;
  g?: string[] | string;
  h?: string[] | ((number | string)[] | string)[] | string;
  j?: string;
  k?: string[] | string;
  m?: string[] | string;
  o?: string;
  p?: string[] | ((number | string)[] | string)[] | string;
  q?: string[] | string;
  r?: string[] | string;
  s?: string[] | string;
  t?: string;
  u?: string[] | string;
  x?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  ']'?: string;
  '#'?: string;
  R?: string[] | string;
  V?: string[] | string;
  Y?: ((number | string)[] | string)[] | string;
  Z?: string[] | string;
  a?: string[] | string;
  i?: string[] | string;
  v?: string[] | (number | string)[][] | string;
  y?: string[] | string;
  z?: string[] | ((number | string)[] | string)[] | string;
  '~'?: string;
  I?: string[] | string;
  l?: string[] | ((number | string)[] | string)[] | string;
  M?: string;
  n?: string;
  N?: string[] | string;
  U?: string[] | string;
  $?: string;
  P?: ((number | string)[] | string)[] | string;
  '%'?: string;
  '0'?: ((number | string)[] | string)[] | string;
  '2'?: string[] | string;
  '5'?: string;
  '7'?: string[] | string;
  '8'?: string[] | string;
  '9'?: string;
  '='?: string;
  '!'?: string;
  '1'?: string[] | string;
  '6'?: string;
  '&'?: string;
  E?: string[] | string;
  '^'?: string[] | string;
  w?: string[] | string;
  '{'?: string;
  '}'?: string;
  '.'?: ((number | string)[] | number | string | string)[][];
  ';'?: ((number | string)[] | string)[] | (number | string)[][] | string;
  ','?: ((number | string)[] | string)[] | (number | string)[][] | string;
  G?: string;
  J?: string[] | string;
  ' '?: ((number | string)[] | number | string | string)[][];
  '['?: string;
  ':'?: string;
  '/'?: string;
  "'"?: ((number | string)[] | string)[] | string;
  '₸'?: string;
  '∞'?: string;
  '≠'?: string;
  Ø?: string;
  Æ?: string;
  ʭ?: string;
  '▤'?: string;
  ƃ?: string;
  Я?: string;
  ǝ?: string;
  Ħ?: string;
  Ʉ?: string;
  ȣ?: string;
  ȝ?: string;
  Ʃ?: string;
  '‡'?: string;
  Ŧ?: string;
  '♥'?: string;
  '♠'?: string;
  '♦'?: string;
  '♣'?: string;
  Δ?: string;
  Ʌ?: string;
  _?: string;
  '`'?: string;
  '|'?: ((number | string)[] | string)[];
  '+'?: string;
}

