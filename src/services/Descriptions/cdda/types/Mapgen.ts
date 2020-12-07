import { CDDA_JSON_TYPES } from './names'

export interface IMapgen {
  type: CDDA_JSON_TYPES.mapgen;
  method: string;
  om_terrain?: string[] | string[][] | string;
  weight?: number;
  object: Object;
  update_mapgen_id?: string;
  '//'?: string;
  nested_mapgen_id?: string;
  '//2'?: string;
  '//3'?: string;
}

interface Object {
  fill_ter?: string;
  rows?: string[];
  palettes?: string[];
  items?: Items;
  place_monsters?: (Placemonster | Placemonsters2 | Placemonsters3 | Placemonsters4 | Placemonsters5 | Placemonsters6 | Placemonsters7 | Placemonsters8 | Placemonsters9 | Placemonsters10 | Placemonsters11 | Placemonsters12 | Placemonsters13 | Placemonsters14 | Placemonsters15 | Placemonsters16 | Placemonsters17 | Placemonsters18 | Placemonsters19 | Placemonsters20 | Placemonsters21 | Placemonsters22 | Placemonsters23 | Placemonsters24 | Placemonsters25 | Placemonsters26 | Placemonsters27 | Placemonsters28 | Placemonsters29 | Placemonsters30 | Placemonsters31 | Placemonsters32 | Placemonsters33 | Placemonsters34 | Placemonsters35 | Placemonsters36 | Placemonsters37 | Placemonsters38 | Placemonsters39 | Placemonsters40)[];
  toilets?: Toilets;
  terrain?: Terrain;
  furniture?: Furniture;
  place_vehicles?: Placevehicle[];
  place_items?: (Placeitem | Placeitems2 | Placeitems3 | Placeitems4 | Placeitems5 | Placeitems6 | Placeitems7 | Placeitems8 | Placeitems9 | Placeitems10 | Placeitems11 | Placeitems12 | Placeitems13 | Placeitems14 | Placeitems15 | Placeitems16 | Placeitems17 | Placeitems18 | Placeitems19 | Placeitems20 | Placeitems21 | Placeitems22 | Placeitems23 | Placeitems24 | Placeitems25 | Placeitems26 | Placeitems27 | Placeitems28 | Placeitems29 | Placeitems30 | Placeitems31 | Placeitems32)[];
  place_loot?: (Placeloot | Placeloot2 | Placeloot3 | Placeloot4 | Placeloot5 | Placeloot6 | Placeloot7 | Placeitems6 | Placeloot9 | Placeloot10 | Placeloot11 | Placeloot12 | Placeitems7 | Placeloot14 | Placeloot15 | Placeloot16 | Placeloot17 | Placeloot18 | Placeloot19 | Placeloot20 | Placeloot21 | Placeloot22 | Placeloot23 | Placeloot24 | Placeitems9 | Placeloot26 | Placeloot27 | Placeloot28 | Placeloot29 | Placeloot30 | Placeitems12 | Placeloot32 | Placeloot33 | Placeloot34 | Placeloot35 | Placeitems15 | Placeloot37 | Placeloot38 | Placeloot39 | Placeloot40 | Placeloot41 | Placeloot42 | Placeloot43 | Placeitems18 | Placeloot45 | Placeloot46 | Placeloot47 | Placeitems20 | Placeloot49 | Placeloot50 | Placeloot51 | Placeloot52 | Placeloot53 | Placeloot54 | Placeloot55 | Placeloot56 | Placeloot57 | Placeloot58 | Placeloot59 | Placeitems22 | Placeloot61 | Placeloot62 | Placeloot63 | Placeloot64 | Placeitems24 | Placeloot66 | Placeloot67 | Placeitems25 | Placeloot69 | Placeloot70 | Placeloot71 | Placeitems26 | Placeloot73 | Placeloot74 | Placeitems27 | Placeitems28 | Placeloot77 | Placeloot78 | Placeloot79 | Placeloot80 | Placeloot81 | Placeitems31 | Placeloot83 | Placeloot84 | Placeloot85 | Placeloot86 | Placeloot87 | Placeloot88)[];
  set?: (Set | Set2 | Set3 | Set4 | Set5 | Set6 | Set7 | Set8 | Set9 | Set10 | Set11 | Set12 | Set13 | Set14 | Set15 | Set16 | Set17 | Set18 | Set19 | Set20 | Set21 | Set22 | Set23 | Set24 | Set25)[];
  gaspumps?: Gaspumps;
  place_vendingmachines?: Placevendingmachine[];
  place_fields?: Placefield[];
  fields?: Fields;
  rotation?: number[] | number;
  vehicles?: Vehicles;
  monster?: Monster;
  signs?: Signs;
  npcs?: Npcs;
  item?: Item8;
  mapping?: Mapping;
  traps?: Traps;
  place_traps?: Placetrap[];
  place_signs?: Placesign[];
  vendingmachines?: Vendingmachines;
  predecessor_mapgen?: string;
  place_monster?: Placemonster2[];
  faction_owner?: Factionowner[];
  place_npcs?: (Placenpc | Placenpcs2)[];
  place_nested?: Placenested[];
  nested?: Nested;
  mapgensize?: number[];
  place_item?: (Placeitems2 | Placeitem2 | Placeitem3 | Placeitem4 | Placeitem5 | Placeloot12 | Placeitem7 | Placeitem8 | Placeitems8 | Placeitems9 | Placeitem11 | Placeitem12 | Placeitems10 | Placeitems11 | Placeitem15 | Placeitem16 | Placeitems12 | Placeitems14 | Placeitem19 | Placeitem20 | Placeitem21 | Placeitems18 | Placeloot45 | Placeitem24 | Placeitem25 | Placeitems20 | Placeitem27 | Placeitem28 | Placeitem29 | Placeitem30 | Placeitems24 | Placeitems25 | Placeloot74 | Placeitems27 | Placeitems28 | Placeitem36 | Placeloot80 | Placeitem38)[];
  place_terrain?: Placeterrain[];
  place_furniture?: Placefurniture[];
  place_graffiti?: Placegraffiti[];
  computers?: Computers;
  liquids?: Liquids;
  place_toilets?: Placetoilet[];
  sealed_item?: Sealeditem;
  monsters?: Monsters;
  '//'?: string;
  place_rubble?: Placerubble[];
  add?: Add[];
  place_liquids?: Placeliquid[];
  place_gaspumps?: Placegaspump[];
  place_ter_furn_transforms?: Placeterfurntransform[];
  ter_furn_transforms?: Terfurntransforms;
  place_zones?: Placezone[];
}

interface Placezone {
  type: string;
  faction: string;
  x: number[];
  y: number[];
}

interface Terfurntransforms {
  r: R4;
}

interface R4 {
  transform: string;
}

interface Placeterfurntransform {
  transform: string;
  x: number;
  y: number;
}

interface Placegaspump {
  x: number;
  y: number;
  amount: number[];
}

interface Placeliquid {
  liquid: string;
  chance?: number;
  amount?: (number[] | number)[];
  x: number[] | number;
  y: number[] | number[] | number | number;
  repeat?: number[] | number;
}

interface Add {
  item: string;
  x: number[] | number[] | number | number;
  y: number[] | number[] | number | number;
  chance: number;
  repeat?: number;
}

interface Placerubble {
  x: number[] | number[] | number | number;
  y: number[] | number[] | number | number;
  repeat?: number[];
  items?: boolean;
}

interface Monsters {
  z?: _15;
  W?: W3;
  ' '?: O2;
  '.'?: _34;
  '~'?: W3;
  h?: O2;
  o?: O2;
  '#'?: O2 | W3[];
  _?: _34;
  '%'?: O2;
  g?: O2;
  B?: W3;
  S?: W3;
  '''?: O2;
  b?: O2;
  '$'?: O2;
  ','?: _34;
  s?: O2;
  ':'?: O2;
  '!'?: _34;
  u?: W3;
  m?: _15;
  '/'?: W3[];
}

interface _34 {
  monster: string;
  chance: number;
  density?: number;
}

interface W3 {
  monster: string;
  chance: number;
  density: number;
}

interface Sealeditem {
  '^'?: _29;
  Q?: Q4;
  p?: Q4;
  P?: Q4;
  '1'?: _110;
  '2'?: _110;
  '3'?: _110;
  '4'?: _110;
  '5'?: _110;
  '6'?: _110;
  '8'?: _110;
  D?: D6;
  '♥'?: _30;
  '♠'?: _30;
  '♦'?: _30;
  '♣'?: _30;
  'Ʌ'?: _31;
  'Δ'?: _31;
  '‡'?: _31;
  '%'?: _31;
  '#'?: _32;
  ')'?: _31;
  M?: _29;
  '='?: O3;
  '{'?: _29;
  '°'?: _29;
  e?: _29;
  I?: _29;
  j?: _29;
  z?: _29;
  u?: _29;
  m?: _29;
  '0'?: _02;
  '7'?: _29;
  '9'?: _29;
  '$'?: _29;
  '~'?: _29;
  '&'?: _29;
  '!'?: _33;
}

interface _33 {
  items: _;
  furniture: string;
  chance: number;
}

interface _02 {
  item?: W2;
  furniture: string;
  items?: _;
  chance?: number;
}

interface _32 {
  item?: _;
  furniture: string;
  items?: _;
  chance?: number;
}

interface _31 {
  item: W2;
  furniture: string;
  chance: number;
}

interface _30 {
  item: C2;
  furniture: string;
  chance?: number;
}

interface D6 {
  item?: W2;
  furniture: string;
  chance: number;
  items?: _;
}

interface _110 {
  item: W2;
  furniture: string;
  chance?: number;
}

interface Q4 {
  items?: _;
  furniture: string;
  item?: W2;
}

interface _29 {
  item: W2;
  furniture: string;
}

interface Placetoilet {
  x: number;
  y: number;
  amount?: number[];
}

interface Liquids {
  E?: E2;
  H?: E2;
  W?: E2;
  O?: E2;
  t?: E2;
  X?: E2;
  '6'?: E2;
  Y?: E2;
  T?: E2;
  '!'?: E2;
  w?: E2;
  h?: E2;
  '4'?: E2;
  ' '?: _28[];
  '.'?: _28[];
  ','?: E2;
  Z?: E2;
  ';'?: E2;
  K?: E2;
  '0'?: E2;
  o?: E2;
  l?: E2;
  ')'?: E2;
}

interface _28 {
  liquid: string;
  amount: number[];
  chance: number;
}

interface E2 {
  liquid: string;
  amount: number[];
}

interface Computers {
  '6'?: _63;
  '7'?: _72;
  '5'?: _52;
  '0'?: _52;
  a?: A2;
  '8'?: A2;
}

interface A2 {
  name: string;
  security: number;
  options: Option3[];
  failures: Failure[];
}

interface Option3 {
  name: string;
  action: string;
}

interface _52 {
  name: string;
  security: number;
  options: Option[];
  failures: Failure[];
}

interface _72 {
  name: string;
  security: number;
  options: Option2[];
  failures: Failure[];
  access_denied?: string;
}

interface Option2 {
  name: string;
  action: string;
  security: number;
}

interface _63 {
  name: string;
  security?: number;
  options: Option[];
  failures?: Failure[];
  access_denied?: string;
}

interface Failure {
  action: string;
}

interface Option {
  name: string;
  action: string;
  security?: number;
}

interface Placegraffiti {
  x: number;
  y: number;
  snippet?: string;
  text?: string;
}

interface Placefurniture {
  furn: string;
  x: number[] | number[] | number | number;
  y: number[] | number[] | number | number;
  repeat?: number[];
}

interface Placeterrain {
  ter: string;
  x: number[] | number;
  y: number;
}

interface Placeitem38 {
  item: string;
  x: number[];
  y: number;
  chance: number;
  repeat: number;
}

interface Placeitem36 {
  item: string;
  repeat: number;
  x: number;
  y: number;
}

interface Placeitem30 {
  item: string;
  x: number;
  y: number;
  amount: number;
}

interface Placeitem29 {
  item: string;
  x: number[] | number;
  y: number[] | number;
  amount: number[] | number;
  repeat?: number[];
}

interface Placeitem28 {
  item: string;
  x: number[];
  y: number;
  chance: number;
  amount: number;
}

interface Placeitem27 {
  item: string;
  repeat: number[] | number;
  x: number;
  y: number;
}

interface Placeitem25 {
  item: string;
  x: number[];
  y: number[];
  amount: number[];
}

interface Placeitem24 {
  item: string;
  repeat: number[] | number;
  x: number;
  y: number[] | number;
}

interface Placeitem21 {
  item: string;
  x: number[] | number;
  y: number[] | number;
  amount?: number[];
  repeat?: number[];
}

interface Placeitem20 {
  item: string;
  repeat: number;
  x: number;
  y: number;
  'custom-flags'?: string[];
}

interface Placeitem19 {
  item: string;
  x: number;
  y: number[] | number;
  amount?: number[];
  chance?: number;
}

interface Placeitem16 {
  item: string;
  repeat?: number[] | number;
  x: number[] | number;
  y: number;
  chance?: number;
}

interface Placeitem15 {
  item: string;
  x: number;
  y: number;
  amount: number[];
}

interface Placeitem12 {
  item: string;
  repeat: number;
  x: number;
  y: number;
  chance?: number;
}

interface Placeitem11 {
  item: string;
  x: number[] | number;
  y: number[] | number;
  amount: number[];
  repeat?: number[];
  chance?: number;
}

interface Placeitem8 {
  item: string;
  repeat: number[];
  x: number;
  y: number;
}

interface Placeitem7 {
  item: string;
  x: number;
  y: number;
  amount?: number[];
}

interface Placeitem5 {
  item: string;
  x: number;
  y: number;
  chance?: number;
  repeat?: number[];
}

interface Placeitem4 {
  item: string;
  chance: number;
  x: number[];
  y: number;
  repeat?: number[];
}

interface Placeitem3 {
  item: string;
  x: number[];
  y: number[];
  amount: number[];
  repeat: number[];
  chance: number;
}

interface Placeitem2 {
  item: string;
  x: number;
  y: number[] | number;
  chance?: number;
  repeat?: number;
}

interface Nested {
  '1'?: _1;
  '0'?: _0;
  '|'?: _0;
  U?: _1;
  Z?: _1;
  J?: _0;
  '2'?: _1;
  '3'?: _1;
  '4'?: _1;
  R?: _1;
  G?: _1;
  '-'?: _0;
  'А'?: _0;
  'Б'?: _0;
  'В'?: _0;
  'Г'?: _0;
  'Д'?: _0;
  'Е'?: _0;
  '!'?: _0;
  T?: _0;
  S?: _0;
  '{'?: _0;
  D?: _0;
  M?: M2;
  '7'?: _0;
  r?: _0;
  ']'?: _0;
  t?: _0;
  '['?: _0;
  '='?: _0;
  f?: _0;
  '&'?: _0;
  '.'?: _0;
  '#'?: _0;
  '}'?: _0;
  '5'?: _1;
  '6'?: _0;
  '8'?: _0;
  'Ƨ'?: _0;
  'ϻ'?: _0;
  '9'?: _0;
  E?: _0;
  B?: _0;
}

interface M2 {
  chunks: string[];
}

interface _0 {
  chunks: (number | string)[][];
}

interface _1 {
  chunks: ((number | string)[] | string)[];
}

interface Placenested {
  chunks?: string[];
  x: number[] | number[] | number | number;
  y: number[] | number[] | number | number;
  neighbors?: Neighbors;
  repeat?: number[] | number;
  else_chunks?: string[];
}

interface Neighbors {
  above?: string[];
  north?: string[];
  west?: string[];
  east?: string[];
  south?: string[];
}

interface Placenpcs2 {
  class: string;
  x: number[];
  y: number;
}

interface Placenpc {
  class: string;
  x: number;
  y: number;
}

interface Factionowner {
  id: string;
  x: number[];
  y: number[];
}

interface Placemonster2 {
  monster?: string[] | string[] | ((number | string)[] | string)[] | (number | string)[][] | string | string | string;
  x: number[] | number[] | number | number;
  y: number[] | number[] | number | number;
  repeat?: number[] | number[] | number | number;
  chance?: number;
  group?: string;
  friendly?: boolean;
  name?: string;
  spawn_data?: Spawndata;
  pack_size?: number[];
  one_or_none?: boolean;
}

interface Spawndata {
  ammo: Ammo[];
}

interface Ammo {
  ammo_id: string;
  qty: number[] | number;
}

interface Vendingmachines {
  v?: V4;
  V?: V5;
  '6'?: _62;
  '7'?: _62;
  '8'?: _62;
  '9'?: _62;
  'ñ'?: _27;
  D?: _62;
  F?: _62;
  '1'?: _62;
  '2'?: _62;
  U?: _62;
  K?: _62;
  l?: _62;
  m?: _62;
  '%'?: _62;
  M?: _62;
  W?: _62;
  J?: _62;
  C?: _62;
  '('?: _62;
  ')'?: _62;
  '['?: _62;
}

interface _27 {
  item_group: string;
  reinforced: boolean;
}

interface _62 {
  item_group: string;
}

interface V5 {
  item?: string;
  item_group?: string;
  reinforced?: boolean;
}

interface V4 {
  item?: string;
  item_group?: string;
}

interface Placesign {
  signage?: string;
  x: number;
  y: number;
  snippet?: string;
}

interface Placetrap {
  x: number[] | number;
  y: number[] | number;
  trap: string;
  chance?: number;
  repeat?: number[] | number;
  '//'?: string;
}

interface Traps {
  _?: string[] | _26 | string;
  '='?: string;
  '2'?: _26 | string;
  '3'?: string;
  '4'?: string;
  '5'?: string;
  '6'?: string;
  F?: string;
  q?: string;
  f?: _26;
  g?: _26;
  p?: _26;
  '1'?: _26;
  c?: string;
  v?: string;
  T?: string;
  'Я'?: string;
}

interface _26 {
  trap: string;
}

interface Mapping {
  y?: Y4;
  X?: X3;
  '9'?: _93;
  W?: W;
  H?: H;
  B?: B2;
  h?: H2;
  e?: E;
  Y?: Y5;
  '$'?: _19;
  r?: R2;
  c?: C3;
  d?: D4;
  b?: B3;
  l?: L3;
  ']'?: _20;
  t?: _20;
  '*'?: _20;
  '.'?: _21;
  L?: D4;
  o?: O3;
  u?: U2;
  S?: S2;
  R?: R3;
  ' '?: _24;
  C?: _20;
  D?: D5;
  s?: _21;
  x?: _20;
  N?: _21;
  n?: _21;
  '!'?: _25;
  f?: _20;
  F?: F2;
  O?: _20;
  V?: V3;
  '~'?: _20;
  ','?: _24;
  U?: F2;
  '#'?: _20;
  M?: M;
}

interface M {
  items: _2[];
}

interface V3 {
  item: W2[];
}

interface F2 {
  items: D3[];
}

interface _25 {
  item: X2[];
}

interface D5 {
  items?: _;
  item?: W2[];
}

interface _24 {
  item: _[];
}

interface R3 {
  item?: W2 | W2[];
  items?: _[];
}

interface S2 {
  item?: W2;
  furniture?: string;
  items?: _[];
}

interface U2 {
  items: D3[] | _;
  furniture?: string;
}

interface O3 {
  items: _;
  furniture: string;
}

interface _21 {
  items: _;
}

interface _20 {
  items: _[];
}

interface L3 {
  items?: _[] | _ | D2[];
  item?: Item12[];
}

interface Item12 {
  item: string;
  amount: number[] | number;
}

interface B3 {
  furniture?: string;
  items?: _[] | _;
}

interface D4 {
  items: _[] | _;
  furniture?: string;
}

interface C3 {
  items?: _[] | _;
  furniture?: string;
  item?: _[];
}

interface R2 {
  items?: _[] | D3[] | _;
  furniture?: string;
  item?: _[] | W2;
}

interface _19 {
  furniture: string;
  item: X2;
}

interface Y5 {
  terrain: string;
  furniture: string;
  fields: Fields2;
  items: _[];
  item: X2;
}

interface Fields2 {
  field: string;
  chance: number;
}

interface E {
  items: _;
  fields?: _11;
  furniture?: string;
}

interface H2 {
  item: X2 | _[];
  fields?: _11;
}

interface B2 {
  item?: W2;
  fields?: _11;
  items?: D3[];
}

interface H {
  item: Item11;
  furniture?: string;
  fields?: _11;
}

interface Item11 {
  item: string;
  count?: number;
  amount?: number[];
}

interface W {
  item: W2;
  furniture: string;
  fields: _11;
}

interface _93 {
  item: X2;
  fields: _11;
}

interface X3 {
  furniture?: string;
  item?: Item10;
  fields?: _11;
  items?: _[] | _;
  terrain?: string;
  traps?: string;
}

interface Item10 {
  item: string;
  count?: number;
}

interface Y4 {
  furniture: string;
  item: Item9;
  fields: _11;
}

interface Item9 {
  item: string;
  count: number;
}

interface Item8 {
  x?: X2 | X22 | _[] | X2[];
  X?: X2 | X23[] | X2[];
  V?: X2;
  I?: W2;
  H?: Collection;
  Y?: _[];
  y?: X22;
  k?: K;
  K?: K2;
  v?: V2;
  '.'?: _[] | _;
  l?: _[] | W2 | D2[];
  L?: W2;
  R?: X2;
  c?: C2;
  '~'?: _17;
  '$'?: X2 | V2[];
  D?: C2[];
  J?: _[] | W2;
  T?: X2 | W2 | _ | W2[];
  d?: W2;
  '#'?: _[] | F6 | _;
  '@'?: _ | W2[];
  W?: _;
  '!'?: _18;
  C?: R7;
  f?: X2;
  '1'?: _;
  _?: _[] | _2;
  i?: D2;
  S?: S;
  '&'?: _[];
  '?'?: D2;
  '^'?: _[];
  A?: _2[] | W2 | _;
  j?: _;
  h?: D2;
  o?: _2;
  q?: _;
  U?: _;
  'Ы'?: _2;
  r?: R | _[] | _;
  t?: C2;
  u?: _[] | W2;
  e?: _;
  '3'?: D2;
  '8'?: _2;
  ' '?: _[];
  M?: _;
  F?: _;
  B?: B;
  n?: _[];
  '*'?: _;
  '0'?: W2;
  m?: _;
  s?: _;
  'ü'?: _;
  a?: A[] | _;
}

interface A {
  item: string;
  amount: number[] | number;
  chance: number;
}

interface B {
  item: string;
  chance?: number;
  amount: number[];
  'custom-flags': string[];
}

interface R {
  item: string;
  chance: number;
  amount: number[];
}

interface S {
  item: string;
  chance: number;
  repeat?: number[];
  amount?: number[];
}

interface _18 {
  item: string;
  chance: number;
  amount?: number[];
}

interface _17 {
  item: string;
  amount?: number[];
  chance?: number;
  repeat?: number[];
}

interface C2 {
  item: string;
  chance?: number;
}

interface V2 {
  item: string;
  amount?: number[];
  chance?: number;
}

interface K2 {
  item: string;
  amount?: number[];
}

interface K {
  item: string;
  amount?: number;
}

interface X23 {
  item: string;
  amount?: number;
  chance?: number;
}

interface X22 {
  item: string;
  count: number[];
}

interface X2 {
  item: string;
  amount: number[];
}

interface Npcs {
  z?: Z2;
  Z?: Z2;
  '@'?: Z2;
  v?: Z2;
  T?: Z2;
  G?: Z2;
  Q?: Z2;
  '1'?: Z2;
  '2'?: Z2;
  '3'?: Z2;
  '4'?: Z2;
  '5'?: Z2;
  '6'?: Z2;
  '7'?: Z2;
}

interface Z2 {
  class: string;
}

interface Signs {
  Y?: Y3;
  P?: P;
  p?: P;
  s?: P;
  S?: P;
  i?: P;
}

interface P {
  signage: string;
}

interface Y3 {
  snippet: string;
}

interface Monster {
  z?: Z;
  y?: Y;
  '@'?: _15;
  t?: _15;
  Z?: _15;
  H?: _15;
  v?: _15;
  G?: _15;
  g?: _15;
  O?: O2;
  q?: Q2;
  r?: _15;
  '7'?: _15;
  '8'?: _15;
  'ö'?: _15;
  X?: Q2;
  Y?: Y2;
  M?: _15;
  T?: _15;
  o?: _15;
  '~'?: _15 | O2[];
  B?: _15;
  ' '?: O2;
  K?: _15;
  Q?: Q3;
  u?: Q2;
  '('?: _15 | O2[];
  '!'?: O2;
  S?: _15;
  '.'?: O2 | O2[];
  ','?: O2 | _15 | O2[];
  C?: _15;
  _?: _15 | O2[];
  '#'?: O2[];
  '`'?: O2;
  '^'?: O2;
  U?: O2;
  ':'?: _16;
  '<'?: _15;
  A?: _15;
  k?: _15;
  i?: O2;
  'ü'?: _15;
}

interface _16 {
  monster: string;
  chance?: number;
}

interface Q3 {
  monster: string;
  name: string;
}

interface Y2 {
  monster: string;
  name?: string;
  friendly?: boolean;
}

interface Q2 {
  monster: string;
  name?: string;
}

interface O2 {
  monster: string;
  chance: number;
}

interface _15 {
  monster: string;
}

interface Y {
  monster: string;
  friendly: boolean;
}

interface Z {
  monster: string;
  friendly?: boolean;
  chance?: number;
}

interface Vehicles {
  v?: V;
  V?: V;
  '$'?: _12;
  '.'?: _13;
  G?: G2;
  J?: J;
  U?: U;
  Q?: U;
  o?: J;
  s?: _13;
  C?: U;
  W?: _12;
  '''?: U;
  p?: U;
  '>'?: U;
  '<'?: _14;
  c?: _12;
  T?: _12;
  '*'?: _14;
  ')'?: _14;
  ']'?: _14;
}

interface _14 {
  vehicle: string;
  chance: number;
  rotation: number;
}

interface U {
  vehicle: string;
  chance: number;
}

interface J {
  vehicle: string;
  chance: number;
  fuel: number;
  status: number;
}

interface G2 {
  vehicle: string;
  chance: number;
  fuel: number;
  status: number;
  rotation: number;
}

interface _13 {
  vehicle: string;
  chance: number;
  status?: number;
}

interface _12 {
  vehicle: string;
  chance: number;
  status: number;
}

interface V {
  vehicle: string;
  chance: number;
  status?: number;
  fuel?: number;
  rotation?: number;
}

interface Fields {
  '!'?: _10;
  l?: _10;
  L?: _10;
  W?: _10;
  '?'?: _10;
  '#'?: _10;
  '1'?: _10;
  '2'?: _10;
  '3'?: _10;
  '4'?: _10;
  '5'?: _10;
  '6'?: _10;
  f?: _10;
  u?: _10;
  i?: _10;
  I?: _10;
  M?: _10;
  q?: _10;
  '`'?: _10;
  '('?: _10;
  U?: _10;
  '/'?: _11;
  B?: _10;
  T?: _10;
  S?: _10;
  '='?: _10;
  Q?: Q;
}

interface Q {
  field: string;
  intensity: number;
}

interface _11 {
  field: string;
}

interface _10 {
  field: string;
  intensity: number;
  age: number;
}

interface Placefield {
  field: string;
  x: number[] | number[] | number | number;
  y: number[] | number[] | number | number;
  age?: number;
  intensity?: number;
  repeat?: number[] | number;
}

interface Placevendingmachine {
  x: number;
  y: number;
  item_group?: string;
}

interface Gaspumps {
  '&'?: _9;
  G?: G;
  '$'?: _9;
  O?: O;
  J?: _9;
  D?: D;
  '1'?: _9;
}

interface D {
  fuel: string;
}

interface O {
  amount: number[];
}

interface G {
  fuel?: string;
}

interface Set25 {
  point: string;
  id: string;
  x: number[];
  y: number[];
  chance: number;
  repeat: number[];
}

interface Set24 {
  point: string;
  id: string;
  x: number;
  y: number[];
  chance: number;
  repeat: number[];
}

interface Set23 {
  point: string;
  x: number[] | number;
  y: number[] | number;
  repeat?: number[];
  id?: string;
}

interface Set22 {
  line?: string;
  id: string;
  x: number;
  x2?: number;
  y: number;
  y2?: number;
  point?: string;
}

interface Set21 {
  point: string;
  id: string;
  x: number[];
  y: number[];
  chance: number;
}

interface Set20 {
  point: string;
  id: string;
  x: number[];
  y: number;
  repeat: number[];
}

interface Set19 {
  line?: string;
  id: string;
  x: number[] | number;
  x2?: number;
  y: number[] | number;
  y2?: number;
  point?: string;
}

interface Set18 {
  point: string;
  id: string;
  x: number;
  y: number;
}

interface Set17 {
  point: string;
  id: string;
  x: number[];
  y: number;
}

interface Set16 {
  square: string;
  x: number;
  y: number;
  x2: number;
  y2: number;
  id: string;
  chance: number;
}

interface Set15 {
  point: string;
  id: string;
  x: number[] | number;
  y: number[];
  repeat: number[];
}

interface Set14 {
  point: string;
  id: string;
  x: number;
  y: number[];
  repeat: number[];
}

interface Set13 {
  point: string;
  x: number[];
  y: number[];
  repeat: number[];
}

interface Set12 {
  point: string;
  x: number[] | number;
  y: number[];
  repeat: number[];
  id?: string;
}

interface Set11 {
  point?: string;
  id: string;
  x: number[] | number;
  y: number;
  repeat?: number[];
  line?: string;
  x2?: number;
  y2?: number;
  chance?: number;
}

interface Set10 {
  point: string;
  id: string;
  x: number[];
  y: number;
  repeat?: number[];
  chance?: number;
}

interface Set9 {
  point: string;
  x: number[] | number;
  y: number[] | number;
  repeat?: number[];
}

interface Set8 {
  point: string;
  id: string;
  x: number[];
  y: number[];
  repeat: number[];
}

interface Set7 {
  point: string;
  id: string;
  x: number[] | number;
  y: number[] | number;
  repeat: number[];
}

interface Set6 {
  square: string;
  amount: number;
  x: number;
  y: number;
  x2: number;
  y2: number;
}

interface Set5 {
  point: string;
  id: string;
  x: number[] | number;
  y: number[] | number;
  repeat?: number[];
}

interface Set4 {
  square: string;
  amount: number[];
  x: number;
  y: number;
  x2: number;
  y2: number;
}

interface Set3 {
  square: string;
  x: number;
  y: number;
  x2: number;
  y2: number;
  id: string;
}

interface Set2 {
  point: string;
  id: string;
  x: number[];
  y: number[] | number;
  repeat: number[];
}

interface Set {
  line: string;
  id: string;
  x: number;
  x2: number;
  y: number;
  y2: number;
}

interface Placeloot88 {
  group: string;
  x: number;
  y: number;
  chance: number;
  repeat: number[];
}

interface Placeloot87 {
  group?: string;
  x: number[];
  y: number[];
  chance: number;
  ammo?: number;
  magazine?: number;
  item?: string;
}

interface Placeloot86 {
  group?: string;
  x: number;
  y: number[] | number;
  chance: number;
  ammo?: number;
  magazine?: number;
  item?: string;
}

interface Placeloot85 {
  group: string;
  x: number[];
  y: number[] | number;
  chance: number;
  repeat?: number[];
}

interface Placeloot84 {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number[];
  magazine?: number;
  item?: string;
}

interface Placeloot83 {
  group?: string;
  x: number[];
  y: number[];
  chance: number;
  item?: string;
}

interface Placeloot81 {
  group: string;
  x: number;
  y: number[];
  chance: number;
  repeat: number[];
}

interface Placeloot80 {
  item: string;
  x: number;
  y: number;
  chance?: number;
}

interface Placeloot79 {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number[];
  ammo?: number;
  magazine?: number;
  item?: string;
}

interface Placeloot78 {
  group: string;
  chance: number;
  repeat: number;
  x: number[] | number;
  y: number[] | number;
}

interface Placeloot77 {
  group?: string;
  x: number;
  y: number;
  chance?: number;
  repeat?: number[];
  item?: string;
}

interface Placeloot74 {
  item: string;
  x: number[] | number;
  y: number[] | number;
  chance?: number;
  repeat?: number[];
}

interface Placeloot73 {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  chance?: number;
  repeat?: number[] | number;
  item?: string;
  ammo?: number;
}

interface Placeloot71 {
  item?: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number[];
  group?: string;
}

interface Placeloot70 {
  group: string;
  x: number[];
  y: number[];
  chance: number;
  ammo: number;
  magazine: number;
}

interface Placeloot69 {
  group?: string;
  repeat?: number[];
  x: number[] | number;
  y: number[] | number;
  chance?: number;
  item?: string;
}

interface Placeloot67 {
  group: string;
  x: number[] | number;
  y: number;
  chance: number;
  repeat?: number[];
}

interface Placeloot66 {
  item: string;
  repeat: number[];
  x: number[];
  y: number;
}

interface Placeloot64 {
  group: string;
  x: number[] | number;
  y: number[] | number;
  repeat?: number[];
  chance?: number;
}

interface Placeloot63 {
  group?: string;
  x: number[];
  y: number;
  chance?: number;
  repeat?: number[];
  item?: string;
}

interface Placeloot62 {
  item: string;
  x: number;
  y: number;
  ammo: number;
}

interface Placeloot61 {
  group?: string;
  x: number;
  y: number;
  item?: string;
  repeat?: number;
  chance?: number;
}

interface Placeloot59 {
  group: string;
  chance: number;
  repeat: number[] | number;
  x: number[] | number;
  y: number[] | number;
}

interface Placeloot58 {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  magazine?: number;
  repeat?: number[] | number;
  item?: string;
  ammo?: number;
}

interface Placeloot57 {
  group: string;
  x: number[] | number;
  y: number;
  chance: number;
  ammo?: number;
  magazine?: number;
  repeat?: number[];
}

interface Placeloot56 {
  group?: string;
  chance: number;
  repeat?: number[];
  x: number[];
  y: number[];
  item?: string;
}

interface Placeloot55 {
  group?: string;
  x: number[] | number;
  y: number;
  chance: number;
  repeat?: number[];
  item?: string;
}

interface Placeloot54 {
  group: string;
  chance: number;
  repeat?: number[];
  x: number[];
  y: number[];
}

interface Placeloot53 {
  group?: string;
  x: number;
  y: number[] | number;
  chance: number;
  repeat?: number[];
  item?: string;
}

interface Placeloot52 {
  group: string;
  x: number[];
  y: number[];
  chance?: number;
  repeat?: number[];
}

interface Placeloot51 {
  item?: string;
  repeat: number[];
  x: number[];
  y: number[] | number;
  group?: string;
}

interface Placeloot50 {
  group: string;
  x: number;
  y: number;
  chance: number;
}

interface Placeloot49 {
  group: string;
  x: number;
  y: number;
  repeat?: number[];
}

interface Placeloot47 {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number[];
  item?: string;
  ammo?: number;
}

interface Placeloot46 {
  group?: string;
  chance: number;
  repeat?: number[] | number;
  x: number[] | number;
  y: number[] | number;
  item?: string;
}

interface Placeloot45 {
  item: string;
  x: number;
  y: number[];
  chance: number;
  repeat: number;
}

interface Placeloot43 {
  group: string;
  chance: number;
  repeat: number;
  x: number[] | number;
  y: number[] | number;
  magazine?: number;
}

interface Placeloot42 {
  item?: string;
  x: number[] | number;
  y: number[] | number;
  group?: string;
  chance?: number;
  ammo?: number;
  magazine?: number;
  repeat?: number[];
}

interface Placeloot41 {
  group?: string;
  x: number;
  y: number;
  item?: string;
}

interface Placeloot40 {
  item: string;
  x: number;
  y: number[];
  chance: number;
  ammo: number;
}

interface Placeloot39 {
  group: string;
  x: number;
  y: number;
  chance: number;
  ammo: number;
  magazine: number;
}

interface Placeloot38 {
  group: string;
  x: number;
  y: number;
  chance: number;
  magazine: number;
}

interface Placeloot37 {
  group: string;
  x: number;
  y: number;
  chance: number;
  ammo?: number;
  magazine?: number;
}

interface Placeloot35 {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  chance?: number;
  repeat?: number[];
  item?: string;
  ammo?: number;
}

interface Placeloot34 {
  group?: string;
  x: number;
  y: number;
  chance: number;
  ammo?: number;
  magazine?: number;
  item?: string;
}

interface Placeloot33 {
  item?: string;
  x: number;
  y: number[] | number;
  group?: string;
  chance?: number;
  repeat?: number[];
  ammo?: number;
}

interface Placeloot32 {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  repeat?: number[];
  item?: string;
}

interface Placeloot30 {
  group: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number[];
}

interface Placeloot29 {
  group: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number[];
  magazine?: number;
  ammo?: number;
}

interface Placeloot28 {
  group: string;
  x: number;
  y: number;
  chance: number;
  ammo?: number;
  magazine?: number;
  repeat: number[];
}

interface Placeloot27 {
  group: string;
  x: number;
  y: number;
  chance: number;
  magazine?: number;
}

interface Placeloot26 {
  item: string;
  x: number;
  y: number;
  repeat?: number[];
  ammo?: number;
  chance?: number;
}

interface Placeloot24 {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  item?: string;
  ammo?: number;
}

interface Placeloot23 {
  group: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number;
}

interface Placeloot22 {
  group?: string;
  chance: number;
  repeat?: number[];
  x: number[] | number;
  y: number[];
  item?: string;
}

interface Placeloot21 {
  group: string;
  x: number[] | number;
  y: number;
  chance?: number;
}

interface Placeloot20 {
  group: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
}

interface Placeloot19 {
  group: string;
  x: number[];
  y: number;
  chance: number;
  repeat?: number[];
}

interface Placeloot18 {
  group: string;
  x: number;
  y: number[] | number;
  chance: number;
  magazine?: number;
  repeat?: number[];
  ammo?: number;
}

interface Placeloot17 {
  group: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat: number[];
}

interface Placeloot16 {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number[] | number;
  item?: string;
  magazine?: number;
}

interface Placeloot15 {
  item?: string;
  x: number;
  y: number;
  chance: number;
  group?: string;
  repeat?: number[];
}

interface Placeloot14 {
  group: string;
  chance: number;
  repeat?: number[];
  x: number[];
  y: number[];
  ammo?: number;
  magazine?: number;
}

interface Placeloot12 {
  item: string;
  repeat?: number;
  x: number;
  y: number;
}

interface Placeloot11 {
  group: string;
  x: number[];
  y: number;
  chance: number;
  repeat: number[];
}

interface Placeloot10 {
  group: string;
  x: number[];
  y: number[];
  repeat: number;
}

interface Placeloot9 {
  group: string;
  chance: number;
  repeat: number[];
  x: number[];
  y: number[];
}

interface Placeloot7 {
  group: string;
  chance: number;
  x: number[] | number;
  y: number[];
  magazine?: number;
  ammo?: number;
  repeat: number[];
}

interface Placeloot6 {
  group: string;
  x: number;
  y: number;
}

interface Placeloot5 {
  group: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number[];
  magazine?: number;
}

interface Placeloot4 {
  item: string;
  x: number[] | number;
  y: number;
  chance: number;
  repeat: number;
}

interface Placeloot3 {
  group?: string;
  chance: number;
  repeat: number[];
  x: number[];
  y: number[];
  item?: string;
}

interface Placeloot2 {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  chance?: number;
  magazine?: number;
  repeat?: number[] | number;
  item?: string;
  ammo?: number;
}

interface Placeloot {
  item: string;
  x: number[];
  y: number;
}

interface Placeitems32 {
  item: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat: number[] | number;
}

interface Placeitems31 {
  item: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat: number[];
}

interface Placeitems30 {
  item: string;
  x: number[] | number;
  y: number;
  chance: number;
  repeat?: number;
}

interface Placeitems29 {
  item: string;
  x: number[];
  y: number;
  chance: number;
  repeat: number[];
}

interface Placeitems28 {
  item: string;
  x: number;
  y: number;
}

interface Placeitems27 {
  item: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number[];
}

interface Placeitems26 {
  item: string;
  chance: number;
  x: number[];
  y: number;
}

interface Placeitems25 {
  item: string;
  chance: number;
  x: number;
  y: number[];
}

interface Placeitems24 {
  item: string;
  chance: number;
  repeat: number;
  x: number;
  y: number;
}

interface Placeitems23 {
  item: string;
  chance: number;
  x: number[] | number;
  y: number[] | number;
  repeat?: number;
}

interface Placeitems22 {
  item: string;
  x: number[];
  y: number[];
  chance: number;
}

interface Placeitems21 {
  item: string;
  x: number[] | number;
  y: number;
  chance: number;
  repeat: number[];
}

interface Placeitems20 {
  item: string;
  chance: number;
  x: number[] | number;
  y: number[] | number;
}

interface Placeitems19 {
  item: string;
  x: number[];
  y: number[];
  chance: number;
  repeat?: number[];
}

interface Placeitems18 {
  item: string;
  x: number;
  y: number;
  chance: number;
}

interface Placeitems17 {
  item: string;
  chance: number;
  x: number[];
  y: number[] | number;
}

interface Placeitems16 {
  item: string;
  x: number;
  y: number[] | number;
  chance: number;
}

interface Placeitems15 {
  item: string;
  x: number;
  y: number[] | number;
  chance: number;
  repeat?: number[];
}

interface Placeitems14 {
  item: string;
  chance: number;
  repeat?: number[] | number;
  x: number;
  y: number;
}

interface Placeitems13 {
  item: string;
  x: number[];
  y: number[] | number;
  chance: number;
  repeat: number[];
}

interface Placeitems12 {
  item: string;
  x: number;
  y: number;
  chance: number;
  repeat: number[];
}

interface Placeitems11 {
  item: string;
  x: number;
  y: number;
  chance: number;
  repeat?: number;
}

interface Placeitems10 {
  chance: number;
  repeat: number;
  item: string;
  x: number[];
  y: number[];
}

interface Placeitems9 {
  item: string;
  x: number;
  y: number[];
  chance: number;
  repeat: number[];
}

interface Placeitems8 {
  item: string;
  x: number;
  y: number;
  chance: number;
  repeat?: number[];
}

interface Placeitems7 {
  item: string;
  x: number[] | number;
  y: number;
  chance: number;
  repeat?: number[];
}

interface Placeitems6 {
  item: string;
  x: number[];
  y: number[];
  chance: number;
  repeat: number[];
}

interface Placeitems5 {
  item: string;
  x: number;
  y: number[] | number;
  chance: number;
  repeat: number[];
}

interface Placeitems4 {
  item: string;
  x: number[];
  y: number[] | number;
  chance: number;
  repeat?: number[];
}

interface Placeitems3 {
  item: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number[] | number;
}

interface Placeitems2 {
  item: string;
  x: number[] | number;
  y: number;
  chance: number;
}

interface Placeitem {
  item: string;
  x: number[] | number;
  y: number[];
  chance: number;
  repeat: number[];
}

interface Placevehicle {
  vehicle: string;
  x: number[] | number[] | number | number;
  y: number[] | number[] | number | number;
  chance: number;
  rotation?: number[] | number;
  status?: number;
  fuel?: number;
  repeat?: number[] | number;
}

interface Furniture {
  '7'?: string[] | string;
  '3'?: string[] | string;
  '2'?: string[] | string;
  '!'?: string[] | ((number | string)[] | string)[] | string;
  R?: string[] | (number | string)[][] | string;
  Q?: string[] | (number | string)[][] | string;
  '0'?: string[] | string;
  v?: string;
  c?: string[] | string;
  t?: string[] | string;
  Y?: string[] | (number | string)[][] | string;
  Z?: string[] | string;
  z?: string[] | ((number | string)[] | string)[] | string;
  x?: string[] | string;
  X?: string[] | ((number | string)[] | string)[] | string;
  y?: string[] | string;
  H?: string[] | string;
  i?: string[] | string;
  I?: string[] | string;
  '9'?: string[] | string;
  h?: string[] | string;
  V?: string;
  q?: string[] | string;
  '%'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '8'?: string[] | string;
  '^'?: string[] | string;
  p?: string[] | string;
  j?: string[] | string;
  K?: string[] | string;
  k?: string[] | string;
  J?: string[] | string;
  N?: string[] | string;
  '$'?: string[] | string;
  ','?: string[] | ((number | string)[] | string)[] | string;
  '1'?: string[] | string;
  '4'?: string[] | string;
  '|'?: string;
  b?: string[] | (number | string)[][] | string;
  d?: string[] | string;
  f?: string[] | string;
  a?: string[] | (number | string)[][] | string;
  '}'?: string[] | string;
  A?: string[] | string;
  s?: string[] | string;
  C?: string[] | (number | string)[][] | string;
  g?: string[] | string;
  r?: string[] | (number | string)[][] | string;
  u?: string[] | string;
  W?: string[] | string;
  m?: string[] | string;
  U?: string[] | string;
  M?: string[] | string;
  w?: string;
  ')'?: string;
  '&'?: string[] | ((number | string)[] | string)[] | string;
  '`'?: string;
  '='?: string[] | string;
  '-'?: string[] | (_23 | string)[] | string;
  '?'?: string[] | string;
  B?: string[] | string;
  '@'?: string[] | string;
  S?: string[] | string;
  D?: string[] | string;
  G?: string[] | string;
  O?: string[] | ((number | string)[] | string)[] | string;
  F?: string[] | string;
  L?: string[] | string;
  P?: string[] | string;
  T?: string[] | string;
  l?: string[] | ((number | string)[] | string)[] | string;
  n?: string[] | string;
  o?: string[] | ((number | string)[] | string)[] | string;
  E?: string[] | string;
  e?: string[] | string;
  '/'?: string[] | string;
  '5'?: string[] | string;
  '#'?: string[] | ((number | string)[] | string)[] | string;
  '{'?: string[] | string;
  'Á'?: string;
  ':'?: string[] | string;
  '*'?: string[] | ((number | string)[] | string)[] | string;
  _?: ((number | string)[] | string)[] | string;
  ' '?: ((number | string)[] | string)[] | string;
  '.'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '6'?: string[] | string;
  '>'?: string[] | string;
  '+'?: string;
  ']'?: string[] | string;
  '''?: string;
  '~'?: (number | string)[][] | string;
  ';'?: string;
  'Δ'?: string;
  '('?: string;
  '['?: string[] | string;
  '±'?: string[] | string;
  '‡'?: string[] | string;
  'Ŧ'?: string[] | string;
  '<'?: string[];
  'А'?: string;
  'Б'?: string;
  'В'?: string;
  'Г'?: string;
  'Д'?: string;
  'Е'?: string;
  'Ю'?: string;
  'Т'?: string;
  'х'?: string;
  '³'?: string;
  'ƃ'?: string;
  '♦'?: string;
  '♣'?: string;
  'Я'?: string;
  'Ʌ'?: string;
  '♥'?: string;
  '♠'?: string;
  'Ŋ'?: string;
  '˽'?: string;
}

interface _23 {
  furn: string;
}

interface Terrain {
  '7'?: string[] | string;
  K?: string[] | string;
  T?: string[] | ((number | string)[] | string)[] | string;
  b?: string[] | string;
  c?: string[] | string;
  r?: string[] | string;
  '('?: string[] | string;
  L?: string[] | string;
  d?: string[] | string;
  t?: string[] | string;
  u?: string[] | string;
  f?: string[] | string;
  o?: string[] | ((number | string)[] | string)[] | string;
  S?: string[] | string;
  h?: string[] | string;
  O?: string[] | string;
  '3'?: string[] | string;
  ')'?: string[] | string;
  x?: string[] | string;
  '2'?: string[] | string;
  ' '?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '!'?: string[] | ((number | string)[] | string)[] | string;
  '?'?: string[] | string;
  M?: string[] | string;
  '.'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '''?: string[] | (number | string)[][] | string;
  ':'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '#'?: string[] | string;
  R?: string[] | string;
  W?: string[] | string;
  Q?: string[] | string;
  ','?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  g?: string[] | string;
  '='?: string[] | string;
  j?: string;
  P?: string[] | ((number | string)[] | string)[] | string;
  y?: string[] | string;
  '9'?: string[] | ((number | string)[] | string)[] | string;
  p?: string[] | (number | string)[][] | string;
  '%'?: string[] | ((number | string)[] | string)[] | string;
  '5'?: string[] | string;
  I?: string[] | string;
  l?: string[] | string;
  v?: string[] | string;
  Y?: string[] | string;
  '1'?: string[] | string;
  '-'?: string[] | string;
  '|'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '+'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  s?: string[] | string;
  w?: string[] | string;
  q?: string[] | string;
  B?: string[] | string;
  m?: string[] | string;
  J?: string[] | string;
  H?: string[] | string;
  C?: string[] | string;
  G?: string[] | string;
  k?: string[] | string;
  '^'?: string[] | string;
  '*'?: string[] | ((number | string)[] | string)[] | string;
  E?: string[] | string;
  '$'?: string[] | ((number | string)[] | string)[] | string;
  F?: string[] | string;
  z?: string[] | ((number | string)[] | string)[] | string;
  Z?: string[] | string;
  '0'?: string[] | (number | string)[][] | string;
  '8'?: string[] | string;
  X?: string[] | (number | string)[][] | string;
  '~'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  _?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  e?: string[] | string;
  a?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  '>'?: string[] | string;
  '<'?: string[] | string;
  i?: string[] | ((number | string)[] | string)[] | string;
  '4'?: string[] | string;
  '6'?: string[] | string;
  '['?: string[] | ((number | string)[] | string)[] | string;
  N?: string[] | (number | string)[][] | string;
  U?: string[] | string;
  A?: string[] | string;
  '`'?: string[] | ((number | string)[] | string)[] | (number | string)[][] | string;
  n?: string;
  '}'?: string[] | string;
  '&'?: string[] | string;
  'Ŧ'?: string[] | string;
  '±'?: string[] | string;
  'Δ'?: string;
  'Ʌ'?: string;
  '/'?: string[] | string;
  ']'?: string[] | string;
  D?: string[] | string;
  '{'?: string[] | string;
  '@'?: string[] | string;
  ';'?: string[] | (_22 | string)[] | (number | string)[][] | string;
  V?: string[] | string;
  '♥'?: string;
  '♠'?: string[] | string;
  '♦'?: string;
  '♣'?: string;
  '‡'?: string[] | string;
  'Ы'?: string;
  '₸'?: string;
  '≠'?: string;
  '³'?: string;
  '°'?: string;
  'Ю'?: string[] | string;
  'х'?: string;
  'Т'?: string;
  'ƃ'?: string;
  '˽'?: string;
  'Я'?: string;
  'ó'?: string;
  'Ħ'?: string;
  'Ʃ'?: string;
  'Ʉ'?: string;
  'ǝ'?: string;
  'ȴ'?: string;
  'Ŋ'?: string;
}

interface _22 {
  ter: string;
}

interface Toilets {
  T?: T;
  t?: T2;
  '&'?: T;
  ';'?: _9;
  '%'?: _9;
  a?: _9;
  '<'?: _9;
  i?: _9;
  U?: _9;
  L?: _9;
  '?'?: _9;
  '9'?: _92;
  '@'?: _9;
  B?: _9;
  '$'?: _9;
  P?: _9;
  '7'?: _9;
  j?: _9;
  '4'?: _9;
  q?: _9;
  p?: _9;
}

interface _92 {
  amount?: number;
}

interface _9 {
}

interface T2 {
  '//'?: string;
}

interface T {
  amount?: number[];
}

interface Placemonsters40 {
  monster: string;
  x: number[];
  y: number[] | number;
}

interface Placemonsters39 {
  monster: string;
  x: number[] | number;
  y: number[] | number;
  repeat: number[];
}

interface Placemonsters38 {
  monster: string;
  x: number[];
  y: number[];
  density?: number;
  chance?: number;
  repeat?: number[];
}

interface Placemonsters37 {
  monster: string;
  x: number[];
  y: number[];
  density: number;
  chance: number;
}

interface Placemonsters36 {
  monster: string;
  x: number[] | number;
  y: number[] | number;
  density: number;
}

interface Placemonsters35 {
  monster: string;
  x: number[];
  y: number[];
  repeat: number[];
  chance?: number;
}

interface Placemonsters34 {
  monster: string;
  x: number[] | number;
  y: number[];
  density: number;
}

interface Placemonsters33 {
  monster: string;
  x: number;
  y: number;
  density: number;
}

interface Placemonsters32 {
  monster: string;
  x: number[];
  y: number[];
  chance?: number;
}

interface Placemonsters31 {
  chance: number;
  density: number;
  monster: string;
  x: number[] | number;
  y: number[] | number;
  repeat?: number[];
}

interface Placemonsters30 {
  monster: string;
  x: number[];
  y: number[];
  chance: number;
}

interface Placemonsters29 {
  monster: string;
  x: number[];
  y: number[] | number;
  chance: number;
}

interface Placemonsters28 {
  monster: string;
  x: number[] | number;
  y: number[] | number;
  chance?: number;
  repeat?: number;
}

interface Placemonsters27 {
  chance: number;
  density: number;
  monster: string;
  x: number;
  y: number[];
}

interface Placemonsters26 {
  monster: string;
  x: number[];
  y: number[];
  density: number;
  repeat: number[];
}

interface Placemonsters25 {
  monster: string;
  x: number[];
  y: number[];
  density: number;
  repeat?: number[];
}

interface Placemonsters24 {
  chance: number;
  density: number;
  monster: string;
  x: number;
  y: number;
}

interface Placemonsters23 {
  monster: string;
  x: number;
  y: number;
  density?: number;
}

interface Placemonsters22 {
  monster: string;
  x: number[];
  y: number[];
  repeat?: number[];
  chance: number;
}

interface Placemonsters21 {
  monster: string;
  x: number;
  y: number;
  repeat: number[];
  chance: number;
}

interface Placemonsters20 {
  monster: string;
  x: number[] | number;
  y: number[] | number;
  density: number;
  repeat?: number[];
}

interface Placemonsters19 {
  monster: string;
  x: number;
  y: number;
  chance: number;
}

interface Placemonsters18 {
  monster: string;
  x: number[];
  y: number;
  chance: number;
}

interface Placemonsters17 {
  monster: string;
  x: number[];
  y: number[];
}

interface Placemonsters16 {
  monster: string;
  x: number;
  y: number;
}

interface Placemonsters15 {
  monster: string;
  x: number;
  y: number;
  density: number;
  repeat: number[];
}

interface Placemonsters14 {
  monster: string;
  x: number[];
  y: number[];
  chance: number;
  repeat: number;
}

interface Placemonsters13 {
  monster: string;
  x: number[] | number;
  y: number[] | number;
  repeat?: number[];
}

interface Placemonsters12 {
  monster: string;
  x: number[];
  y: number[] | number;
  density: number;
  chance: number;
}

interface Placemonsters11 {
  monster: string;
  x: number[];
  y: number[];
  repeat?: number[];
  chance?: number;
}

interface Placemonsters10 {
  monster: string;
  x: number[];
  y: number[];
  chance?: number;
  repeat: number;
}

interface Placemonsters9 {
  monster: string;
  x: number[];
  y: number[];
  density: number;
}

interface Placemonsters8 {
  monster: string;
  x: number[];
  y: number[];
  density: number;
  chance?: number;
}

interface Placemonsters7 {
  monster: string;
  x: number[];
  y: number[];
  repeat: number;
}

interface Placemonsters6 {
  monster: string;
  x: number[];
  y: number[];
  repeat: number[];
  chance: number;
}

interface Placemonsters5 {
  monster: string;
  x: number[];
  y: number[];
  repeat?: number;
}

interface Placemonsters4 {
  monster: string;
  x: number[] | number;
  y: number;
  chance: number;
}

interface Placemonsters3 {
  monster: string;
  x: number[];
  y: number;
  density: number;
  repeat: number[];
}

interface Placemonsters2 {
  monster: string;
  x: number[];
  y: number[];
  repeat: number[];
}

interface Placemonster {
  monster: string;
  x: number[];
  y: number;
  repeat: number[];
  chance: number;
}

interface Items {
  '''?: _;
  ':'?: _[] | _2[] | _2 | _;
  D?: _[] | D2 | D3[] | _2 | _;
  W?: _[] | W2 | _2 | _;
  c?: _[] | _2[] | D3[] | _2 | _;
  r?: _[] | D2 | _2[] | D3[] | _2 | _ | R7[] | R8;
  u?: _[] | _2[] | D3[] | _2 | _;
  L?: _[] | _2[] | D3[] | _2 | _ | L6[];
  ' '?: _2[] | D3[] | W2 | _;
  A?: D3[] | _2 | _;
  C?: C | _[] | D2 | _2[] | _2 | _;
  f?: _[] | D2 | _2[] | D3[] | _2 | F6 | _;
  j?: _2[] | D3[] | _2 | _;
  o?: _[] | D3[] | _2 | _;
  t?: _[] | _2[] | D3[] | _2 | _ | R7[];
  '2'?: D2 | _2[] | _2 | _;
  O?: _[] | _2[] | D3[] | O4 | _2 | _;
  d?: _[] | _2[] | D3[] | _2 | _;
  q?: _2[] | D3[] | _2 | _ | R7[];
  b?: _[] | D2 | _2[] | D3[] | _2 | _;
  e?: _[] | D3[] | _2 | _;
  g?: D3[] | _2 | _;
  '@'?: D3;
  '%'?: _3[] | _[] | _2[] | _2 | _ | _6[];
  '4'?: _[] | _2[] | _2 | _ | R7[];
  '3'?: _[] | _2[] | _2 | _;
  ';'?: _[] | _2[] | D3[] | _2 | _;
  H?: _[] | _2[] | D3[] | _2 | _;
  Q?: _[] | _2[] | D3[] | _2 | _;
  '*'?: _2 | _ | W2[];
  K?: _[] | _2[] | D3[] | W2 | _2 | _;
  X?: X | _[] | _2[] | D3[] | _2 | F6 | _;
  _?: _[] | W2 | _ | R7[];
  '('?: D3;
  '?'?: _[] | D3[] | _;
  h?: _[] | _2 | _;
  R?: _[] | _2[] | D3[] | _2 | _;
  ']'?: _[] | _2[] | _;
  '#'?: _[] | D2 | _2[] | _2 | _ | R7[];
  p?: _[] | D3[] | _2 | _;
  '8'?: _[] | _2[] | D3[] | _2 | _;
  Y?: _[] | D2 | _2[] | _2 | _;
  z?: _[] | _2[] | _2 | _;
  B?: _[] | D2 | _2[] | D3[] | _2 | _ | B7;
  T?: _[] | D2 | _2[] | _2 | _;
  F?: F | _[] | _2[] | D3[] | _2 | _;
  '`'?: _[] | _2[] | D3[] | W2 | _2 | _;
  k?: _[] | _2[] | _2 | _;
  Z?: D3;
  l?: L[] | L2 | _[] | D2 | _2[] | D3[] | _2 | _ | L6[] | D2[];
  v?: _2[] | _2 | F6 | _;
  x?: _[] | _2[] | _2 | _;
  '$'?: L[] | _[] | D2 | _2[] | _2 | _ | _7[];
  i?: _[] | _2[] | _2 | _;
  V?: _2[] | _2 | _;
  U?: _[] | _2[] | _2 | _;
  J?: _[] | _2[] | _2 | _;
  '.'?: _[] | _2[] | W2 | _2 | _;
  '}'?: _2[] | _2 | _;
  N?: _[] | _2[] | D3[] | _2 | _;
  s?: _[] | _2[] | D3[] | _2 | _;
  I?: _[] | D2 | D3[] | _2 | _;
  a?: _[] | D2 | _2[] | _2 | _;
  m?: _[] | _2[] | _2 | _;
  w?: D2 | _2[] | _2 | F6 | _;
  M?: _[] | _2[] | _2 | _;
  '0'?: _[] | _2[] | D3[] | _2 | _;
  '&'?: _[] | D2 | _2[] | D3[] | _2 | _ | R7[];
  '='?: _[] | _2[] | D3[] | _2 | _;
  '~'?: _[] | _2[] | D3[] | _2 | _;
  '!'?: _4 | _[] | D2 | _2[] | D3[] | _2 | _;
  S?: _[] | _2[] | D3[] | _2 | _;
  G?: _[] | _2[] | _2 | _;
  y?: D3;
  P?: _[] | _2[] | _2 | _;
  E?: _[] | _2[] | _2 | _;
  '9'?: _2[] | _2 | _;
  '^'?: _[] | _2[] | _2 | _ | R7[];
  '{'?: _[] | D2 | _2[] | _2 | _ | R7[] | R8;
  ','?: _2[] | D3[] | _;
  '7'?: _[] | D2 | _2[] | D3[] | _2 | _;
  '1'?: _[] | _2[] | _2 | _;
  '5'?: D2 | _2[] | _2 | _;
  '6'?: D2 | _2[] | _2 | _;
  n?: _[] | _2[] | D3[] | _2 | _;
  ')'?: D2 | _2[] | _2 | _;
  '/'?: _[] | _;
  '['?: _[] | _2[] | _2 | _;
  '-'?: _[] | W2 | _;
  '‡'?: _[] | _2;
  '♠'?: _[] | _;
  '∞'?: D3;
  'А'?: _5;
  'Б'?: _8;
  'В'?: _2;
  'Г'?: F;
  'Д'?: _;
  '>'?: _;
  '|'?: _;
  'Ʌ'?: _2[] | _2;
  '♣'?: _[];
  '♦'?: _;
  '♥'?: _;
  '±'?: _[] | _2 | _;
  'Ŧ'?: _[] | _2[] | _2;
  '³'?: _2[];
  'ɱ'?: _2;
  '▤'?: _[] | _2;
  'Ħ'?: D3;
  'Δ'?: _[] | _2[] | _2;
  'Ʉ'?: _2;
  'ǝ'?: _2[] | _2;
}

interface _8 {
  item: Item7;
  repeat: number[];
  chance: number;
}

interface Item7 {
  subtype: string;
  entries: Entry7[];
}

interface Entry7 {
  item: string;
  prob: number;
  count?: number[];
}

interface _5 {
  item: Item6;
  repeat: number[];
  chance: number;
}

interface Item6 {
  subtype: string;
  entries: Entry6[];
}

interface Entry6 {
  item?: string;
  prob: number;
  collection?: Collection[];
}

interface Collection {
  item: string;
  count?: number[];
}

interface _4 {
  item: Item3;
  chance: number;
}

interface _7 {
  item: string;
  chance: number;
  magazine: number;
  repeat: number[];
  ammo?: number;
}

interface L2 {
  item: Item;
  chance: number;
  repeat: number[];
}

interface L {
  item: string;
  chance?: number;
  repeat?: number[];
}

interface F {
  item: Item5;
  repeat: number[];
  chance: number;
}

interface Item5 {
  subtype: string;
  entries: Entry5[];
}

interface Entry5 {
  item: string;
  prob: number;
}

interface B7 {
  item: Item4;
  chance: number;
}

interface Item4 {
  subtype: string;
  entries: Entry4[];
}

interface Entry4 {
  group?: string;
  prob: number;
  item?: string;
}

interface X {
  item: string;
  chance: number;
  count: number;
}

interface _6 {
  item: string;
  chance: number;
  ammo: number;
  magazine: number;
  repeat: number[];
}

interface _3 {
  item: string;
  chance: number;
  magazine: number;
  repeat: number[];
}

interface O4 {
  item: Item3;
}

interface Item3 {
  subtype: string;
  entries: Entry3[];
}

interface Entry3 {
  group: string;
}

interface F6 {
  item: string;
  repeat: number[];
}

interface C {
  item: Item2;
  chance: number;
}

interface Item2 {
  subtype: string;
  entries: Entry2[];
}

interface Entry2 {
  group: string;
  prob: number;
  count: number[];
}

interface L6 {
  item: string;
  chance: number;
  repeat: number[] | number;
}

interface R8 {
  item: Item;
  chance: number;
}

interface Item {
  subtype: string;
  entries: Entry[];
}

interface Entry {
  group: string;
  prob: number;
}

interface R7 {
  item: string;
  chance: number;
  repeat?: number;
}

interface W2 {
  item: string;
}

interface D3 {
  item: string;
  chance: number;
  repeat?: number[];
}

interface D2 {
  item: string;
  chance: number;
  repeat: number;
}

interface _2 {
  item: string;
  chance: number;
  repeat: number[];
}

interface _ {
  item: string;
  chance: number;
}

