export interface ITalkTopic {
  type: 'talk_topic';
  id: string[] | string;
  '//'?: string[] | string;
  dynamic_line?:
    | Dynamicline
    | string[]
    | Dynamicline3
    | Dynamicline4
    | Dynamicline5
    | Dynamicline6
    | Dynamicline7
    | Yes
    | Dynamicline9
    | Dynamicline10
    | Dynamicline11
    | Yes4
    | Dynamicline13
    | Dynamicline14
    | Dynamicline15
    | Dynamicline16
    | Dynamicline17
    | Dynamicline18
    | Dynamicline19
    | Dynamicline20
    | Dynamicline21
    | Dynamicline22
    | Dynamicline23
    | Dynamicline24
    | Array<Dynamicline25 | Dynamicline252 | string>
    | Dynamicline26
    | Dynamicline27
    | Dynamicline28
    | Dynamicline29
    | Dynamicline30
    | Dynamicline31
    | Dynamicline32
    | Dynamicline33
    | Dynamicline34
    | Dynamicline35
    | Dynamicline36
    | Dynamicline37
    | Dynamicline38
    | Dynamicline39
    | Dynamicline40[]
    | Dynamicline41
    | No3
    | Dynamicline43
    | Dynamicline44
    | Dynamicline45
    | Dynamicline46
    | Dynamicline29[]
    | Yes3
    | Array<Dynamicline252 | string>
    | Dynamicline50
    | No4
    | Dynamicline52
    | Dynamicline53
    | Dynamicline54
    | Dynamicline55
    | No33
    | Dynamicline57
    | Dynamicline58
    | Dynamicline59
    | No5
    | string;
  responses?: Response[];
  speaker_effect?:
    | Speakereffect
    | Speakereffect2
    | Speakereffect3
    | Speakereffect4
    | Speakereffect5
    | Speakereffect6
    | Speakereffect7[]
    | Speakereffect8
    | Speakereffect[]
    | Speakereffect10
    | Speakereffect11
    | Speakereffect3[]
    | Speakereffect13
    | Speakereffect14
    | Speakereffect15[]
    | Speakereffect16[]
    | Speakereffect17
    | Speakereffect18
    | Speakereffect19[]
    | Speakereffect15
    | Speakereffect21[]
    | Speakereffect21
    | Speakereffect23
    | Speakereffect24[]
    | Speakereffect25
    | Speakereffect26[]
    | Speakereffect27[]
    | Speakereffect28
    | Speakereffect26;
  '//2'?: string;
  repeat_responses?: Repeatresponse | Repeatresponses2[] | Repeatresponses3 | Repeatresponses4[] | Repeatresponses5[];
  '//3'?: string;
}

interface Repeatresponses5 {
  for_item?: string[];
  response: Response2;
  for_category?: string[] | string;
}

interface Repeatresponses4 {
  for_category: string[];
  response: Response3;
}

interface Response3 {
  text: string;
  topic: string;
  opinion: Opinion4;
}

interface Opinion4 {
  trust: number;
  fear: number;
  value: number;
  anger: number;
  owed: number;
}

interface Repeatresponses3 {
  for_item: string[];
  response: Response2;
}

interface Repeatresponses2 {
  for_category: string[];
  response: Response2;
}

interface Repeatresponse {
  for_item: string;
  response: Response2;
}

interface Response2 {
  text: string;
  topic: string;
}

interface Speakereffect28 {
  effect: Effect6[];
}

interface Speakereffect27 {
  effect: Effect22[];
}

interface Effect22 {
  npc_add_effect?: string;
  duration?: number;
  npc_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface Speakereffect26 {
  sentinel: string;
  condition: Condition12;
  effect: Effect17;
}

interface Speakereffect25 {
  opinion: Missionopinion;
}

interface Speakereffect24 {
  effect: Effect;
}

interface Speakereffect23 {
  effect: Effect21;
}

interface Effect21 {
  u_add_var: string;
  type: string;
  context: string;
  time: boolean;
}

interface Speakereffect21 {
  effect: Effect17;
}

interface Speakereffect19 {
  condition: Condition12;
  effect: Effect17;
}

interface Condition12 {
  u_are_owed: number;
}

interface Speakereffect18 {
  effect: Effect20;
}

interface Effect20 {
  u_buy_item: string;
  count: number;
}

interface Speakereffect17 {
  effect: Effect2;
  sentinel: string;
}

interface Speakereffect16 {
  effect: Effect2[];
}

interface Speakereffect15 {
  effect: Effect2;
}

interface Speakereffect14 {
  sentinel: string;
  effect: Effect17;
}

interface Speakereffect13 {
  condition: Condition9;
  effect: Effect17;
}

interface Condition9 {
  u_has_cash: number;
}

interface Speakereffect11 {
  sentinel: string;
  effect: Effect19[];
}

interface Effect19 {
  u_add_effect?: string;
  duration?: number;
  u_consume_item?: string;
}

interface Speakereffect10 {
  effect: Effect14;
  sentinel: string;
}

interface Speakereffect8 {
  effect: Effect18[];
}

interface Effect18 {
  npc_add_var?: string;
  type: string;
  context: string;
  value?: string;
  u_adjust_var?: string;
  adjustment?: number;
}

interface Speakereffect7 {
  sentinel?: string;
  effect: Effect17;
}

interface Effect17 {
  u_spend_cash: number;
}

interface Speakereffect6 {
  effect: Effect9;
}

interface Effect9 {
  npc_add_var: string;
  type: string;
  context: string;
  time: boolean;
}

interface Speakereffect5 {
  effect: Effect3[];
}

interface Speakereffect4 {
  effect: Effect8[];
}

interface Effect8 {
  u_add_var?: string;
  type?: string;
  context?: string;
  value?: string;
  npc_first_topic?: string;
}

interface Speakereffect3 {
  effect: Effect6;
}

interface Speakereffect2 {
  opinion: Opinion3;
}

interface Opinion3 {
  fear: number;
}

interface Speakereffect {
  effect: Effect14;
}

interface Response {
  text?: string;
  topic?: string;
  success?: Success;
  effect?:
    | Effect
    | Array<Effect2 | string | string>
    | Effect3[]
    | Effect4
    | Effect5
    | Effect6
    | Effect7[]
    | Array<Effect | string>
    | Effect2
    | Effect10
    | Effect11[]
    | Effect12[]
    | Effect13[]
    | Effect14
    | Array<Effect15 | string>
    | Effect16
    | string;
  condition?:
    | Condition
    | Condition2
    | Condition3
    | Condition4
    | Condition5
    | Condition6
    | Condition7
    | Not2
    | Not2
    | Condition10
    | Condition11
    | And16
    | Condition13
    | Condition14
    | Condition15
    | Condition16
    | Condition17
    | Condition17
    | Condition19
    | Condition20
    | Condition21
    | Condition22
    | Condition23
    | Condition24
    | Condition25
    | Condition26
    | Condition27
    | string
    | string
    | string
    | string
    | string;
  opinion?: Opinion2;
  switch?: boolean;
  default?: boolean;
  trial?: Trial;
  failure?: Failure;
  truefalsetext?: Truefalsetext;
  '//'?: string;
  '//2'?: string;
  mission_opinion?: Missionopinion;
}

interface Missionopinion {
  trust: number;
  value: number;
}

interface Truefalsetext {
  condition: Condition8;
  true: string;
  false: string;
}

interface Condition8 {
  npc_rule?: string;
  mission_goal?: string;
  u_has_cash?: number;
  npc_has_effect?: string;
  npc_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface Failure {
  topic: string;
  effect: string;
}

interface Trial {
  type: string;
  difficulty: number;
}

interface Opinion2 {
  trust?: number;
  fear?: number;
  anger?: number;
  value?: number;
  owed?: number;
}

interface Condition27 {
  and: And22[];
}

interface And22 {
  not?: Not8;
  u_has_items?: Uhasitems;
  npc_has_effect?: string;
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface Not8 {
  npc_has_effect?: string;
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface Condition26 {
  not?: Not2;
  and?: And21[];
  or?: Not2[];
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface And21 {
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
  not?: Not7;
}

interface Not7 {
  or: Not2[];
}

interface Condition25 {
  u_has_items: Uhasitems;
}

interface Uhasitems {
  item: string;
  count: number;
}

interface Condition24 {
  npc_has_trait?: string;
  and?: And20[];
}

interface And20 {
  npc_has_trait?: string;
  not?: Not3;
  npc_has_effect?: string;
}

interface Condition23 {
  and?: And19[];
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface And19 {
  not?: Not6;
  u_has_trait?: string;
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface Not6 {
  u_has_trait?: string;
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface Condition22 {
  and: Array<Condition17 | string>;
}

interface Condition21 {
  and: Array<And18 | string>;
}

interface And18 {
  or: string[];
}

interface Condition20 {
  not?: Not5;
  u_has_trait?: string;
}

interface Not5 {
  u_has_trait: string;
}

interface Condition19 {
  npc_has_trait: string;
}

interface Condition17 {
  not: string;
}

interface Condition16 {
  not: Not2;
}

interface Condition15 {
  u_has_intelligence: number;
}

interface Condition14 {
  u_has_skill: Uhasskill;
}

interface Uhasskill {
  skill: string;
  level: number;
}

interface Condition13 {
  or: And16[];
}

interface Condition11 {
  u_is_wearing?: string;
  and?: And17[];
  not?: Not4;
}

interface And17 {
  not?: Not4;
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface Not4 {
  u_is_wearing: string;
}

interface Condition10 {
  not?: Not2;
  and?: Not2[];
}

interface Condition7 {
  not?: Not2;
  and?: And16[];
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface And16 {
  not?: Not2;
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface Condition6 {
  and: Array<Or | string>;
}

interface Condition5 {
  and: And15[];
}

interface And15 {
  u_has_trait?: string;
  npc_has_trait?: string;
}

interface Condition4 {
  not?: Not3;
  npc_has_effect?: string;
}

interface Not3 {
  npc_has_effect: string;
}

interface Condition3 {
  and: Array<And14 | string>;
}

interface And14 {
  or: Or[];
}

interface Or {
  mission_goal: string;
}

interface Condition2 {
  not?: Not2;
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
  and?: And13[];
}

interface And13 {
  not?: string;
  u_has_var?: string;
  type?: string;
  context?: string;
  value?: string;
}

interface Not2 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
}

interface Condition {
  not: Not;
}

interface Not {
  npc_aim_rule: string;
}

interface Effect16 {
  mapgen_update: string;
  origin_npc: boolean;
}

interface Effect15 {
  u_add_effect: string;
  duration: number;
}

interface Effect14 {
  npc_add_var: string;
  type: string;
  context: string;
  value: string;
}

interface Effect13 {
  npc_add_effect?: string;
  duration?: string;
  u_buy_item?: string;
}

interface Effect12 {
  mapgen_update: string;
  origin_npc: boolean;
  offset_y?: number;
  offset_x?: number;
}

interface Effect11 {
  u_buy_item?: string;
  u_add_effect?: string;
  duration?: string;
}

interface Effect10 {
  set_npc_aim_rule: string;
}

interface Effect7 {
  u_sell_item?: string;
  count?: number;
  u_buy_item?: string;
}

interface Effect6 {
  npc_add_effect: string;
  duration: string;
}

interface Effect5 {
  u_adjust_var: string;
  type: string;
  context: string;
  adjustment: number;
}

interface Effect4 {
  mapgen_update: string[];
  origin_npc: boolean;
  offset_y: number;
}

interface Effect3 {
  u_lose_var?: string;
  type: string;
  context: string;
  u_add_var?: string;
  value?: string;
}

interface Effect2 {
  u_add_var: string;
  type: string;
  context: string;
  value: string;
}

interface Effect {
  npc_add_effect: string;
  duration: number;
}

interface Success {
  topic: string;
  effect: string;
  opinion?: Opinion;
}

interface Opinion {
  trust: number;
  value: number;
  fear?: number;
  anger?: number;
}

interface Dynamicline59 {
  npc_has_effect: string;
  no: Yes3;
  yes: string;
}

interface Dynamicline58 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  yes: string;
  no: Yes3;
}

interface Dynamicline57 {
  and: And12[];
}

interface And12 {
  and: And11[];
}

interface And11 {
  npc_override?: string;
  yes: Yes16 | string | string;
  npc_rule?: string;
  no?: string;
}

interface Yes16 {
  has_pickup_list: string;
  no: string;
}

interface Dynamicline55 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  no: No33;
  yes: Yes15;
}

interface Yes15 {
  u_has_trait: string;
  no: Yes3;
  yes: Yes3;
}

interface No33 {
  u_has_trait: string;
  no: string;
  yes: string;
}

interface Dynamicline54 {
  npc_compare_time_since_var: string;
  type: string;
  context: string;
  op: string;
  time: string;
  no: string;
  yes: Yes14;
}

interface Yes14 {
  npc_compare_time_since_var: string;
  type: string;
  context: string;
  op: string;
  time: string;
  no: string;
  yes: string;
}

interface Dynamicline53 {
  and: Array<And10 | string>;
}

interface And10 {
  npc_cbm_recharge_rule: string;
  no: No32;
  yes: string;
}

interface No32 {
  npc_cbm_recharge_rule: string;
  no: No31;
  yes: string;
}

interface No31 {
  npc_cbm_recharge_rule: string;
  no: No30;
  yes: string;
}

interface No30 {
  npc_cbm_recharge_rule: string;
  no: string;
  yes: string;
}

interface Dynamicline52 {
  list_faction_camp_sites: boolean;
}

interface Dynamicline50 {
  has_no_available_mission: Hasnoavailablemission;
  no: string;
}

interface Hasnoavailablemission {
  has_no_assigned_mission: string;
  no: string;
}

interface Dynamicline46 {
  days_since_cataclysm: number;
  no: string;
  yes: Dynamicline9;
}

interface Dynamicline45 {
  u_compare_var: string;
  type: string;
  context: string;
  op: string;
  value: number;
  no: string;
  yes: Yes13;
}

interface Yes13 {
  u_compare_var: string;
  type: string;
  context: string;
  op: string;
  value: number;
  no: string;
  yes: Yes12;
}

interface Yes12 {
  u_compare_var: string;
  type: string;
  context: string;
  op: string;
  value: number;
  no: string;
  yes: string;
}

interface Dynamicline44 {
  npc_has_effect: string;
  yes: string;
  no: No29;
}

interface No29 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  yes: string;
  no: No28;
}

interface No28 {
  npc_has_var: string;
  type: string;
  context: string;
  value: string;
  yes: Yes11;
  no: No3;
}

interface Yes11 {
  npc_has_var: string;
  type: string;
  context: string;
  value: string;
  yes: No3;
  no: string;
}

interface Dynamicline43 {
  u_has_mission: string;
  yes: string;
  no: string;
}

interface Dynamicline41 {
  has_no_available_mission: Dynamicline24;
  no: No27;
}

interface No27 {
  has_many_available_missions: Dynamicline24;
  no: Dynamicline24;
}

interface Dynamicline40 {
  days_since_cataclysm: number;
  yes: Yes10[];
  no: Yes10[];
}

interface Yes10 {
  u_has_item?: string;
  yes: string;
  no: string;
  is_season?: string;
  npc_has_effect?: string;
  npc_has_intelligence?: number;
  npc_has_perception?: number;
}

interface Dynamicline39 {
  and: Array<And32 | string>;
}

interface Dynamicline38 {
  and: Array<And9 | string>;
}

interface And9 {
  npc_has_trait: string;
  yes: string;
  no: string;
}

interface Dynamicline37 {
  is_by_radio: string;
  no: No26;
}

interface No26 {
  has_reason: Hasreason;
  no: string;
}

interface Hasreason {
  use_reason: boolean;
}

interface Dynamicline36 {
  npc_has_effect: string;
  yes: Yes9;
  no: string;
}

interface Yes9 {
  npc_need: string;
  level: string;
  no: No25;
  yes: string;
}

interface No25 {
  npc_need: string;
  level: string;
  no: No24;
  yes: string;
}

interface No24 {
  npc_need: string;
  level: string;
  no: string;
  yes: string;
}

interface Dynamicline35 {
  u_driving: string;
  no: No23;
}

interface No23 {
  npc_driving: string;
  no: No22;
}

interface No22 {
  npc_need: string;
  amount: number;
  no: No21;
  yes: string;
}

interface No21 {
  npc_need: string;
  amount: number;
  no: No20;
  yes: string;
}

interface No20 {
  npc_need: string;
  level: string;
  no: No3;
  yes: string;
}

interface Dynamicline34 {
  and: Array<And8 | string>;
}

interface And8 {
  is_by_radio: string;
}

interface Dynamicline33 {
  u_has_effect: string;
  yes: string[];
  no: string;
}

interface Dynamicline32 {
  gendered_line: string;
  relevant_genders: string[];
}

interface Dynamicline31 {
  npc_has_var: string;
  type: string;
  context: string;
  value: string;
  yes: string[];
  no: Yes3;
}

interface Dynamicline30 {
  is_by_radio: string;
  no: string;
}

interface Dynamicline29 {
  npc_female: boolean;
  yes: string;
  no: string;
}

interface Dynamicline28 {
  and: Array<And7 | string>;
}

interface And7 {
  npc_aim_rule: string;
  no: No19;
  yes: string;
}

interface No19 {
  npc_aim_rule: string;
  no: No18;
  yes: string;
}

interface No18 {
  npc_aim_rule: string;
  no: string;
  yes: string;
}

interface Dynamicline27 {
  and: Array<And6 | string>;
}

interface And6 {
  npc_cbm_reserve_rule: string;
  no: No17;
  yes: string;
}

interface No17 {
  npc_cbm_reserve_rule: string;
  no: No16;
  yes: string;
}

interface No16 {
  npc_cbm_reserve_rule: string;
  no: No15;
  yes: string;
}

interface No15 {
  npc_cbm_reserve_rule: string;
  no: string;
  yes: string;
}

interface Dynamicline26 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  yes: string[];
  no: string;
}

interface Dynamicline252 {
  u_male: string[];
  no: string[];
}

interface Dynamicline25 {
  is_day: string[];
  no: string[];
}

interface Dynamicline24 {
  has_no_assigned_mission: string;
  no: No14;
}

interface No14 {
  has_many_assigned_missions: string;
  no: string;
}

interface Dynamicline23 {
  and: Array<And5 | Yes8 | And32 | string>;
}

interface And32 {
  npc_engagement_rule: string;
  no: No13;
  yes: string;
}

interface No13 {
  npc_engagement_rule: string;
  no: No12;
  yes: string;
}

interface No12 {
  npc_engagement_rule: string;
  no: No11;
  yes: string;
}

interface No11 {
  npc_engagement_rule: string;
  no: No10;
  yes: string;
}

interface No10 {
  npc_engagement_rule: string;
  no: No9;
  yes: string;
}

interface No9 {
  npc_engagement_rule: string;
  no: string;
  yes: string;
}

interface And5 {
  and: And4[];
}

interface And4 {
  npc_override?: string;
  yes: Yes8 | string;
  no: string;
  npc_rule?: string;
}

interface Yes8 {
  and: And3[];
}

interface And3 {
  npc_override?: string;
  yes: string;
  no: string;
  npc_rule?: string;
}

interface Dynamicline22 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  no: string[];
  yes: string[];
}

interface Dynamicline21 {
  u_is_wearing: string;
  yes: string[];
  no: Array<No8 | string>;
}

interface No8 {
  u_male: boolean;
  yes: string[];
  no: string[];
}

interface Dynamicline20 {
  npc_has_var: string;
  type: string;
  context: string;
  value: string;
  yes: string[];
  no: string[];
}

interface Dynamicline19 {
  u_is_wearing: string;
  yes: string;
  no: No4;
}

interface Dynamicline18 {
  u_is_wearing: string;
  yes: string;
  no: No7;
}

interface No7 {
  u_male: string;
  no: string;
}

interface Dynamicline17 {
  give_hint: boolean;
}

interface Dynamicline16 {
  and: Array<And | And2 | string>;
}

interface And2 {
  at_safe_space: boolean;
  no: string;
  yes: string;
}

interface And {
  npc_at_om_location: string;
  no: string;
  yes: string;
}

interface Dynamicline15 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  yes: No3;
  no: No6;
}

interface No6 {
  npc_has_effect: string;
  yes: string;
  no: No5;
}

interface No5 {
  u_is_wearing: string;
  yes: string;
  no: string;
}

interface Dynamicline14 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  no: string;
  yes: Yes7;
}

interface Yes7 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  no: string;
  yes: Yes6;
}

interface Yes6 {
  u_has_trait: string;
  no: string;
  yes: Yes5;
}

interface Yes5 {
  u_female: boolean;
  yes: string;
  no: string;
}

interface Dynamicline13 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  yes: string;
  no: No4;
}

interface No4 {
  u_male: boolean;
  yes: string;
  no: string;
}

interface Dynamicline11 {
  u_is_wearing: string;
  yes: string[];
  no: string[];
}

interface Dynamicline10 {
  npc_has_effect: string;
  no: No3;
  yes: string;
}

interface No3 {
  npc_has_effect: string;
  no: string;
  yes: string;
}

interface Dynamicline9 {
  days_since_cataclysm: number;
  yes: Yes4;
  no: string;
}

interface Yes4 {
  days_since_cataclysm: number;
  yes: string;
  no: string;
}

interface Dynamicline7 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  no: string;
  yes: Yes3;
}

interface Yes3 {
  u_has_var: string;
  type: string;
  context: string;
  value: string;
  no: string;
  yes: string;
}

interface Dynamicline6 {
  u_has_any_trait: string[];
  yes: string;
  no: string;
}

interface Dynamicline5 {
  npc_male: string;
  no: string;
}

interface Dynamicline4 {
  u_is_wearing: string;
  yes: Yes2;
  no: No2;
}

interface No2 {
  u_is_wearing: string;
  yes: string;
  no: No;
}

interface No {
  npc_has_var: string;
  type: string;
  context: string;
  value: string;
  yes: string;
  no: Yes;
}

interface Yes2 {
  npc_has_var: string;
  type: string;
  context: string;
  value: string;
  no: string;
  yes: Yes;
}

interface Yes {
  npc_has_var: string;
  type: string;
  context: string;
  value: string;
  no: string;
  yes: string;
}

interface Dynamicline3 {
  u_has_weapon: string;
  no: string;
}

interface Dynamicline {
  npc_has_activity: string;
  no: string;
}
