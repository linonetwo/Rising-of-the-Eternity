export interface IEventTransformation {
  id: string;
  type: 'event_transformation';
  event_type?: string;
  value_constraints?: Valueconstraints;
  drop_fields?: string[];
  event_transformation?: string;
  new_fields?: Newfields;
}

interface Newfields {
  species?: Species2;
  terrain_flag?: Terrainflag;
  swimming?: Swimming;
  mounted?: Mounted2;
  flag?: Flag;
  oter_type_id?: Otertypeid;
}

interface Otertypeid {
  oter_type_of_oter: string;
}

interface Flag {
  flags_of_itype: string;
}

interface Mounted2 {
  is_mounted: string;
}

interface Swimming {
  is_swimming_terrain: string;
}

interface Terrainflag {
  flags_of_terrain: string;
}

interface Species2 {
  species_of_monster: string;
}

interface Valueconstraints {
  character?: Character;
  killer?: Character;
  species?: Species;
  attacker?: Character;
  movement_mode?: Species;
  mounted?: Mounted;
  swimming?: Mounted;
  underwater?: Mounted;
  terrain_flag?: Species;
  itype?: Species;
  flag?: Species;
  pos?: Character;
  part?: Species;
  skill?: Species;
  new_level?: Species;
}

interface Mounted {
  equals: boolean;
}

interface Species {
  equals: string[];
}

interface Character {
  equals_statistic: string;
}
