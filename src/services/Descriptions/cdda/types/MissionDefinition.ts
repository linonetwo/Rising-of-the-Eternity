import { CDDA_JSON_TYPES } from './names';

export interface IMissionDefinition {
  id: string;
  type: CDDA_JSON_TYPES.mission_definition;
  name: Name | string;
  goal: string;
  difficulty: number;
  value: number;
  item?: string;
  start?:
    | Start
    | Start2
    | Start3
    | Start4
    | Start5
    | Start6
    | Start7
    | Start8
    | Start9
    | Start10
    | Start11
    | Start12
    | Start13
    | Start14
    | Start15
    | Start16
    | Start17
    | Start18
    | Start19
    | Start20
    | Start21
    | Start22
    | Start23
    | Start24
    | Start25
    | Start26
    | Start27
    | Start28
    | Start29
    | Start30
    | Start31
    | Start32
    | Start33
    | Start34
    | Start35
    | Start36
    | Start37
    | Start38
    | Start39
    | Start40
    | string;
  end?:
    | End
    | End2
    | End3
    | End4
    | End5
    | End6
    | End7
    | End8
    | End9
    | End10
    | End11
    | End12
    | End13
    | End14
    | End15
    | End16
    | Start14
    | End18
    | End19
    | End20
    | End21
    | End22
    | End23
    | End24
    | End25
    | End26
    | End27
    | End28
    | End29
    | End30
    | End31
    | End32
    | End33
    | End34
    | End35
    | End36
    | End37
    | End38
    | End39
    | End40
    | End41
    | End42
    | End43
    | End44
    | End45
    | End46
    | End47
    | End48
    | End49
    | End50
    | End51
    | End52
    | string;
  origins?: string[];
  dialogue?: Dialogue;
  monster_species?: string;
  monster_kill_goal?: number;
  followup?: string;
  count?: number;
  description?: string;
  '//'?: string;
  has_generic_rewards?: boolean;
  destination?: string;
  goal_condition?: Goalcondition;
  urgent?: boolean;
  deadline_low?: number;
  deadline_high?: number;
  fail?: Start14;
  place?: string;
  monster_type?: string;
}

interface Goalcondition {
  u_has_item?: string;
  days_since_cataclysm?: number;
  and?: And[];
  or?: Or[];
  u_compare_var?: string;
  type?: string;
  context?: string;
  op?: string;
  value?: number;
}

interface Or {
  u_has_items: Uhasitems;
}

interface And {
  u_has_item?: string;
  u_has_items?: Uhasitems;
  u_has_skill?: Uhasskill;
}

interface Uhasskill {
  skill: string;
  level: number;
}

interface Uhasitems {
  item: string;
  count: number;
}

interface Dialogue {
  describe: string;
  offer: string;
  accepted: string;
  rejected: string;
  advice: string;
  inquire: string;
  success: string;
  success_lie: string;
  failure: string;
}

interface End52 {
  effect: Effect32[];
}

interface Effect32 {
  npc_add_var?: string;
  type: string;
  context: string;
  value: string;
  u_add_var?: string;
}

interface End51 {
  effect: Effect31[];
}

interface Effect31 {
  u_add_var?: string;
  type: string;
  context: string;
  value?: string;
  npc_add_var?: string;
  u_adjust_var?: string;
  adjustment?: number;
}

interface End50 {
  opinion: Opinion;
  effect: Effect2[];
  update_mapgen: Updatemapgen20[];
}

interface End49 {
  opinion: Opinion;
}

interface End48 {
  effect: Effect30[];
}

interface Effect30 {
  u_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
  u_adjust_var?: string;
  adjustment?: number;
  npc_add_effect?: string;
  duration?: string;
}

interface End47 {
  update_mapgen: Updatemapgen30[];
}

interface Updatemapgen30 {
  om_terrain: string;
  place_vehicles?: Placevehicle2[];
  place_nested?: Placenested[];
  set?: Set3[];
  place_npcs?: Placenpc5[];
}

interface End46 {
  effect: Effect2[];
}

interface End45 {
  update_mapgen: Updatemapgen18[];
  effect: Effect14[];
}

interface End44 {
  effect: Effect7[];
}

interface End43 {
  update_mapgen: Updatemapgen29[];
}

interface Updatemapgen29 {
  om_terrain: string;
  '//': string;
  set: Set3[];
  place_nested?: Placenested[];
}

interface Set3 {
  point?: string;
  id: string;
  x: number;
  y: number;
  square?: string;
  x2?: number;
  y2?: number;
}

interface End42 {
  update_mapgen: Updatemapgen28[];
}

interface Updatemapgen28 {
  om_terrain: string;
  place_nested?: Placenested[];
  place_npcs?: Placenpc5[];
  translate_ter?: Translateter[];
  place_vehicles?: Placevehicle2[];
}

interface End41 {
  opinion: Opinion;
  effect: Effect2[];
}

interface End40 {
  effect: Effect29[];
}

interface Effect29 {
  add_mission: string;
}

interface End39 {
  opinion: Opinion;
  effect: Effect27[];
}

interface End38 {
  effect: Effect16[];
}

interface End37 {
  update_mapgen: Updatemapgen18;
}

interface End36 {
  effect: Effect28[];
}

interface Effect28 {
  u_sell_item?: string;
  count?: number;
  u_buy_item?: string;
  u_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface End35 {
  update_mapgen: Updatemapgen18[];
}

interface End34 {
  update_mapgen: Updatemapgen27[];
}

interface Updatemapgen27 {
  om_terrain: string;
  '//'?: string;
  translate_ter?: Translateter[];
  set?: Set2[];
  place_vehicles?: Placevehicle2[];
  place_furniture?: Placefurniture[];
  place_npcs?: Placenpc5[];
}

interface Placefurniture {
  furn: string;
  x: number;
  y: number;
}

interface End33 {
  opinion: Opinion;
  effect: Effect27[];
  update_mapgen: Updatemapgen26[];
}

interface Updatemapgen26 {
  om_terrain: string;
  place_nested: Placenested[];
  set: Set[];
}

interface Effect27 {
  u_buy_item: string;
  container?: string;
  count: number;
}

interface End32 {
  update_mapgen: Updatemapgen25[];
}

interface Updatemapgen25 {
  om_terrain: string;
  '//'?: string;
  set?: Set2[];
  place_nested?: Placenested[];
}

interface End31 {
  opinion: Opinion;
  effect: Effect21[];
}

interface Effect21 {
  u_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
  u_buy_item?: string;
  count?: number;
  u_buy_monster?: string;
  name?: string;
}

interface End30 {
  effect: Effect20[];
}

interface Effect20 {
  u_sell_item?: string;
  count?: number;
  npc_consume_item?: string;
  u_learn_recipe?: string;
  u_buy_item?: string;
  container?: string;
}

interface End29 {
  opinion: Opinion;
  effect: Effect13;
}

interface End28 {
  opinion: Opinion;
  effect: Effect14[];
}

interface End27 {
  effect: Effect9[];
  update_mapgen: Updatemapgen24;
}

interface Updatemapgen24 {
  om_terrain: string;
  set: Set2[];
}

interface End26 {
  update_mapgen: Updatemapgen23[];
}

interface Updatemapgen23 {
  om_terrain: string;
  translate_ter: Translateter[];
  place_nested: Placenested[];
}

interface End25 {
  effect: Effect19[];
}

interface Effect19 {
  u_buy_item?: string;
  count?: number;
  u_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
  npc_add_var?: string;
  time?: boolean;
  u_adjust_var?: string;
  adjustment?: number;
}

interface End24 {
  opinion: Opinion;
  effect: (Effect4 | Effect2 | string)[];
}

interface End23 {
  effect: Effect6;
  update_mapgen: Updatemapgen18;
}

interface End22 {
  effect: Effect18[];
}

interface Effect18 {
  u_add_var?: string;
  type: string;
  context: string;
  value?: string;
  u_adjust_var?: string;
  adjustment?: number;
}

interface End21 {
  update_mapgen: Updatemapgen22[];
}

interface Updatemapgen22 {
  om_terrain: string;
  '//'?: string;
  set?: Set2[];
  place_vehicles?: Placevehicle2[];
  translate_ter?: Translateter[];
  place_npcs?: Placenpc5[];
  place_nested?: Placenested[];
}

interface Set2 {
  square: string;
  id: string;
  x: number;
  y: number;
  x2: number;
  y2: number;
}

interface End20 {
  opinion: Opinion;
  effect: Effect13[];
}

interface End19 {
  effect: Effect2[];
  opinion: Opinion2;
}

interface Opinion2 {
  trust: number;
}

interface End18 {
  effect: Effect14[];
}

interface End16 {
  effect: Effect17[];
}

interface Effect17 {
  u_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
  u_add_trait?: string;
}

interface End15 {
  update_mapgen: Updatemapgen21[];
}

interface Updatemapgen21 {
  om_terrain: string;
  place_nested?: Placenested[];
  set: Set[];
  place_item?: Placeitem[];
}

interface End14 {
  opinion: Opinion;
  effect: Effect16[];
}

interface Effect16 {
  u_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
  u_buy_monster?: string;
  count?: number;
  name?: string;
}

interface End13 {
  opinion: Opinion;
  effect: Effect4;
}

interface End12 {
  effect: (Effect15 | Effect4 | string)[];
}

interface Effect15 {
  u_add_effect: string;
  duration: number;
}

interface End11 {
  effect: (Effect12 | Effect26 | string)[];
}

interface Effect26 {
  npc_lose_effect: string;
}

interface End10 {
  effect: Effect14[];
  update_mapgen: Updatemapgen20;
}

interface Updatemapgen20 {
  om_terrain: string;
  set: Set[];
}

interface Effect14 {
  u_buy_item?: string;
  count?: number;
  u_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface End9 {
  effect: Effect13[];
}

interface Effect13 {
  u_buy_item: string;
  container: string;
  count: number;
}

interface End8 {
  update_mapgen: Updatemapgen19[];
}

interface Updatemapgen19 {
  om_terrain: string;
  place_nested?: Placenested[];
  place_vehicles?: Placevehicle2[];
  translate_ter?: Translateter[];
}

interface Translateter {
  from: string;
  to: string;
  x: number;
  y: number;
}

interface Placevehicle2 {
  vehicle: string;
  x: number;
  y: number;
  rotation: number;
  chance: number;
}

interface End7 {
  effect: (Effect12 | Effect25 | string)[];
}

interface Effect25 {
  u_sell_item: string;
}

interface Effect12 {
  set_npc_rule: string;
}

interface End6 {
  opinion: Opinion;
  update_mapgen: Updatemapgen18[];
}

interface Updatemapgen18 {
  om_terrain: string;
  place_nested: Placenested[];
}

interface End5 {
  opinion: Opinion;
  effect: Effect11[];
}

interface Effect11 {
  u_buy_monster: string;
  count: number;
  name: string;
}

interface Opinion {
  trust: number;
  value: number;
}

interface End4 {
  effect: Effect10[];
}

interface Effect10 {
  npc_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
  u_buy_item?: string;
}

interface End3 {
  update_mapgen: Updatemapgen17[];
}

interface Updatemapgen17 {
  om_terrain: string;
  '//': string;
  place_nested: Placenested[];
  place_npcs?: Placenpc5[];
}

interface Placenpc5 {
  class: string;
  x: number;
  y: number;
}

interface End2 {
  effect: Effect9[];
}

interface Effect9 {
  u_buy_item?: string;
  count?: number;
  u_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
  u_adjust_var?: string;
  adjustment?: number;
}

interface End {
  effect: (Effect8 | Effect24 | Effect4 | string)[];
}

interface Effect24 {
  u_adjust_var: string;
  type: string;
  context: string;
  adjustment: number;
}

interface Effect8 {
  npc_lose_var: string;
  type: string;
  context: string;
}

interface Start40 {
  effect: Effect2[];
  assign_mission_target: Assignmissiontarget;
  update_mapgen: Updatemapgen16;
}

interface Updatemapgen16 {
  rows: string[];
  terrain: Terrain3;
  monster: Monster;
}

interface Terrain3 {
  M: string;
}

interface Start39 {
  assign_mission_target: Assignmissiontarget16;
  effect: string;
  update_mapgen: Updatemapgen4;
}

interface Assignmissiontarget16 {
  om_terrain: string;
  reveal_radius: number;
  random: boolean;
  search_range: number;
  z: number;
}

interface Start38 {
  effect: (Effect7 | string)[];
  assign_mission_target: Assignmissiontarget15;
  update_mapgen: Updatemapgen15[];
}

interface Updatemapgen15 {
  place_monster?: Placemonster6[];
  place_nested?: Placenested[];
}

interface Assignmissiontarget15 {
  om_terrain: string;
  om_special: string;
  reveal_radius: number;
  random: boolean;
  search_range: number;
}

interface Effect7 {
  npc_add_var: string;
  type: string;
  context: string;
  value: string;
}

interface Start37 {
  effect: (Effect6 | Effect3 | Effect22 | string)[];
}

interface Effect6 {
  npc_add_trait: string;
}

interface Start36 {
  assign_mission_target: Assignmissiontarget3;
  update_mapgen: Updatemapgen4;
}

interface Start35 {
  assign_mission_target: Assignmissiontarget;
  update_mapgen: Updatemapgen14;
}

interface Updatemapgen14 {
  rows: string[];
  terrain: Terrain2;
  fields: Fields;
  items: Items;
  item: Item;
  monster: Monster;
}

interface Monster {
  M: M;
}

interface M {
  monster: string;
}

interface Item {
  '@': _2[];
}

interface _2 {
  item: string;
  amount?: number;
}

interface Items {
  '@': _;
}

interface _ {
  item: string;
  chance: number;
}

interface Terrain2 {
  '@': string;
  b: string;
  M: string;
}

interface Start34 {
  assign_mission_target: Assignmissiontarget14;
}

interface Assignmissiontarget14 {
  om_terrain: string;
  om_special: string;
  z: number;
}

interface Start33 {
  assign_mission_target: Assignmissiontarget13;
  update_mapgen: Updatemapgen4;
}

interface Assignmissiontarget13 {
  om_terrain: string;
  om_special: string;
  z: number;
  reveal_radius: number;
  must_see: boolean;
  random: boolean;
  search_range: number;
}

interface Start32 {
  assign_mission_target: Assignmissiontarget12;
  update_mapgen: Updatemapgen4;
  effect: Effect5[];
}

interface Effect5 {
  u_buy_item?: string;
  count?: number;
  u_add_trait?: string;
}

interface Assignmissiontarget12 {
  om_terrain: string;
  om_special: string;
  om_terrain_replace: string;
  reveal_radius: number;
  min_distance: number;
  search_range: number;
}

interface Start31 {
  assign_mission_target: Assignmissiontarget4;
  update_mapgen: Updatemapgen13;
  effect: Effect4[];
}

interface Updatemapgen13 {
  place_npcs: Placenpc4[];
}

interface Placenpc4 {
  class: string;
  x: number;
  y: number;
  target?: boolean;
  add_trait?: string;
}

interface Start30 {
  assign_mission_target: Assignmissiontarget;
  update_mapgen: Updatemapgen12;
}

interface Updatemapgen12 {
  rows: string[];
  terrain: Terrain;
  furniture: Furniture;
  traps: Traps;
  fields: Fields;
  place_loot: Placeloot[];
  place_npcs: Placenpc3[];
  place_vehicles: Placevehicle[];
}

interface Placevehicle {
  vehicle: string;
  x: number;
  y: number;
  rotation?: number;
  fuel?: number;
  status?: number;
  chance?: number;
}

interface Placenpc3 {
  class: string;
  x: number;
  y: number;
  target?: boolean;
}

interface Placeloot {
  group?: string;
  x: number[] | number;
  y: number[] | number;
  chance: number;
  repeat?: number;
  item?: string;
}

interface Fields {
  b: B;
}

interface B {
  field: string;
  intensity: number;
}

interface Traps {
  F: string;
  R: string;
}

interface Furniture {
  a: string;
}

interface Terrain {
  g: string;
  '.': string;
  a: string;
  b: string;
  R: string;
  F: string;
}

interface Start29 {
  assign_mission_target: Assignmissiontarget3;
  update_mapgen: Updatemapgen6;
}

interface Start28 {
  assign_mission_target: Assignmissiontarget11;
  update_mapgen: Updatemapgen11;
  effect: Effect[];
}

interface Assignmissiontarget11 {
  om_terrain: string;
  om_terrain_match_type: string;
  reveal_radius: number;
  random: boolean;
  search_range: number;
}

interface Start27 {
  assign_mission_target: Assignmissiontarget10;
}

interface Assignmissiontarget10 {
  om_terrain: string;
  om_special: string;
  reveal_radius: number;
  search_range: number;
  z: number;
}

interface Start26 {
  assign_mission_target: Assignmissiontarget9;
  update_mapgen: Updatemapgen11[];
}

interface Updatemapgen11 {
  place_nested: Placenested[];
}

interface Placenested {
  chunks: string[];
  x: number;
  y: number;
}

interface Assignmissiontarget9 {
  om_terrain: string;
  om_special: string;
  reveal_radius: number;
  random: boolean;
  search_range: number;
  z: number;
}

interface Start25 {
  assign_mission_target: Assignmissiontarget8;
}

interface Assignmissiontarget8 {
  om_terrain: string;
  reveal_radius: number;
  om_special: string;
  search_range: number;
}

interface Start24 {
  effect: Effect;
  assign_mission_target: Assignmissiontarget7;
}

interface Assignmissiontarget7 {
  om_terrain: string;
  om_special: string;
  reveal_radius: number;
  z: number;
}

interface Start23 {
  assign_mission_target: Assignmissiontarget6;
  update_mapgen: Updatemapgen10;
}

interface Updatemapgen10 {
  place_monster: Placemonster6[];
}

interface Placemonster6 {
  monster: string;
  x: number;
  y: number;
  target: boolean;
}

interface Start22 {
  effect: Effect4[];
  assign_mission_target: Assignmissiontarget4;
}

interface Start21 {
  reveal_om_ter: string;
}

interface Start20 {
  assign_mission_target: Assignmissiontarget6;
  update_mapgen: Updatemapgen9;
}

interface Updatemapgen9 {
  place_monster: Placemonster5[];
}

interface Placemonster5 {
  monster: string;
  x: number;
  y: number;
  target: boolean;
  name: string;
}

interface Assignmissiontarget6 {
  om_terrain: string;
  reveal_radius: number;
  random: boolean;
  search_range: number;
  min_distance: number;
  z: number;
}

interface Start19 {
  effect: Effect[];
  assign_mission_target: Assignmissiontarget4;
}

interface Start18 {
  effect: (Effect3 | Effect23 | Effect22 | string)[];
}

interface Effect23 {
  npc_add_effect: string;
  duration: string;
}

interface Start17 {
  assign_mission_target: Assignmissiontarget5;
}

interface Assignmissiontarget5 {
  om_terrain: string;
  om_special: string;
  search_range: number;
}

interface Start16 {
  effect: (Effect | string)[];
  assign_mission_target: Assignmissiontarget2;
}

interface Start15 {
  assign_mission_target: Assignmissiontarget2;
}

interface Start14 {
  effect: string;
}

interface Start13 {
  assign_mission_target: Assignmissiontarget;
  update_mapgen: Updatemapgen2;
  effect: Effect4;
}

interface Effect4 {
  u_add_var: string;
  type: string;
  context: string;
  value: string;
}

interface Start12 {
  effect: Effect;
  assign_mission_target: Assignmissiontarget4;
}

interface Start11 {
  effect: (Effect3 | Effect22 | string)[];
}

interface Effect22 {
  clear_npc_rule: string;
}

interface Effect3 {
  npc_remove_item_with: string;
}

interface Start10 {
  assign_mission_target: Assignmissiontarget4;
  update_mapgen: Updatemapgen8;
}

interface Updatemapgen8 {
  om_terrain: string;
  place_monster: Placemonster4[];
}

interface Placemonster4 {
  group: string;
  name: string;
  x: number;
  y: number;
  target: boolean;
}

interface Assignmissiontarget4 {
  om_terrain: string;
  reveal_radius: number;
}

interface Start9 {
  assign_mission_target: Assignmissiontarget;
  update_mapgen: Updatemapgen7;
}

interface Updatemapgen7 {
  place_monster: Placemonster3[];
}

interface Placemonster3 {
  monster: string;
  x: number[] | number;
  y: number[] | number;
  target?: boolean;
  name?: string;
}

interface Start8 {
  assign_mission_target: Assignmissiontarget3;
  update_mapgen: Updatemapgen6;
  effect: Effect2[];
}

interface Effect2 {
  u_buy_item: string;
  count: number;
}

interface Updatemapgen6 {
  place_monster: Placemonster2[];
}

interface Placemonster2 {
  monster: string;
  pack_size: number[];
  x: number;
  y: number;
  target: boolean;
}

interface Assignmissiontarget3 {
  om_terrain: string;
  reveal_radius: number;
  random: boolean;
  search_range: number;
  min_distance: number;
}

interface Start7 {
  reveal_om_ter: string[];
}

interface Start6 {
  assign_mission_target: Assignmissiontarget;
  update_mapgen: Updatemapgen5;
}

interface Updatemapgen5 {
  place_monster: Placemonster[];
}

interface Placemonster {
  group: string;
  x: number;
  y: number;
  target: boolean;
}

interface Start5 {
  effect: string;
  assign_mission_target: Assignmissiontarget2;
  update_mapgen: Updatemapgen4;
}

interface Updatemapgen4 {
  place_npcs: Placenpc2[];
}

interface Start4 {
  assign_mission_target: Assignmissiontarget2;
  update_mapgen: Updatemapgen3;
}

interface Updatemapgen3 {
  set: Set[];
  place_npcs: Placenpc2[];
}

interface Placenpc2 {
  class: string;
  x: number;
  y: number;
  target: boolean;
}

interface Set {
  point: string;
  id: string;
  x: number;
  y: number;
}

interface Start3 {
  effect: Effect[];
  assign_mission_target: Assignmissiontarget2;
}

interface Assignmissiontarget2 {
  om_terrain: string;
  om_special: string;
  reveal_radius: number;
}

interface Effect {
  u_buy_item: string;
}

interface Start2 {
  assign_mission_target: Assignmissiontarget;
  update_mapgen: Updatemapgen2;
}

interface Updatemapgen2 {
  om_terrain: string;
  place_item: Placeitem[];
}

interface Placeitem {
  item: string;
  x: number;
  y: number;
}

interface Assignmissiontarget {
  om_terrain: string;
  reveal_radius: number;
  random: boolean;
  search_range: number;
}

interface Start {
  update_mapgen: Updatemapgen[];
}

interface Updatemapgen {
  om_terrain: string;
  place_npcs: Placenpc[];
}

interface Placenpc {
  class: string;
  x: number[] | number;
  y: number[] | number;
  target?: boolean;
}

interface Name {
  str: string;
}
