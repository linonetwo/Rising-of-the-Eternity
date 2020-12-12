export interface IProfession {
  type: 'profession';
  id: string;
  name: Name | string;
  description: Description | string;
  points: number;
  skills?: Skill[] | Skill;
  items?: Items;
  proficiencies?: string[];
  flags?: string[];
  '//'?: string;
  traits?: string[];
  addictions?: Addiction[];
  pets?: Pet[];
  vehicle?: string;
  CBMs?: string[];
  no_bonus?: string;
  spells?: Spell[];
  'copy-from'?: string;
}

interface Spell {
  id: string;
  level: number;
}

interface Pet {
  name: string;
  amount: number;
}

interface Addiction {
  intensity: number;
  type: string;
}

interface Items {
  both:
    | Both
    | Both2
    | string[]
    | Both4
    | Both5
    | Both6
    | Both7
    | Both8
    | Both9
    | Both10
    | Both11
    | Both12
    | Both13
    | Both14
    | Both15
    | Both16
    | Both17
    | Both18
    | Both19
    | Both20
    | Both21
    | Both22
    | Both23
    | Both24
    | Both25
    | Both26
    | Both27
    | Both28
    | Both29
    | Both30
    | Both31
    | Both32
    | Both33
    | Both34
    | Both35
    | Both36
    | Both37
    | Both38
    | Both39
    | Both40
    | Both41
    | Both42
    | Both43
    | Both44
    | Both45
    | Both46
    | Both47
    | Both48
    | Both49
    | Both50
    | Both51
    | Both52
    | Both53
    | Both54
    | Both55
    | Both56
    | Both57
    | Both58
    | Both59
    | Both60
    | Both61
    | Both62
    | Both63;
  male?: string[] | Male2 | Male3;
  female?: string[] | Male2 | Male3;
}

interface Male3 {
  items: string[];
  entries: Entry58[];
}

interface Entry58 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string;
  'contents-group'?: string;
  'container-item'?: string;
}

interface Male2 {
  items: string[];
  entries: Entry57[];
}

interface Entry57 {
  item: string;
  'ammo-item'?: string;
  charges: number;
}

interface Both63 {
  items: string[];
  entries: Entry56[];
}

interface Entry56 {
  item: string;
  'custom-flags'?: string[];
  'container-item'?: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-group'?: string;
}

interface Both62 {
  items: string[];
  entries: Entry55[];
}

interface Entry55 {
  group?: string;
  item?: string;
  'custom-flags'?: string[];
  'container-item'?: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string;
}

interface Both61 {
  items: string[];
  entries: Entry16[];
}

interface Both60 {
  entries: Entry12[];
}

interface Both59 {
  items: string[];
  entries: Entry54[];
}

interface Entry54 {
  item: string;
  'container-item'?: string;
  'ammo-item'?: string;
  'contents-item'?: string;
  count?: number;
}

interface Both58 {
  ammo: number;
  items: string[];
  entries: Entry53[];
}

interface Entry53 {
  item: string;
  'custom-flags'?: string[];
  'container-item'?: string;
  'ammo-item'?: string;
  'contents-item'?: string;
  count?: number;
}

interface Both57 {
  items: string[];
  entries: Entry52[];
}

interface Entry52 {
  item: string;
  'contents-group'?: string;
  'custom-flags'?: string[];
}

interface Both56 {
  ammo: number;
  items: string[];
  entries: Entry51[];
}

interface Entry51 {
  item: string;
  'ammo-item'?: string;
  'container-item'?: string;
  count?: number;
}

interface Both55 {
  items: string[];
  entries: Entry50[];
}

interface Entry50 {
  item: string;
  charges: number;
  'container-item': string;
}

interface Both54 {
  ammo: number;
  items: string[];
  entries: Entry49[];
}

interface Entry49 {
  item: string;
  'custom-flags'?: string[];
  'container-item'?: string;
  'ammo-item'?: string;
  count?: number;
}

interface Both53 {
  items: string[];
  entries: Entry48[];
}

interface Entry48 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
  'container-item'?: string;
  'custom-flags'?: string[];
}

interface Both52 {
  items: string[];
  entries: Entry47[];
}

interface Entry47 {
  item: string;
  charges?: number;
}

interface Both51 {
  items: string[];
  entries: Entry4[];
}

interface Both50 {
  ammo: number;
  items: string[];
  entries: Entry46[];
}

interface Entry46 {
  item: string;
  'custom-flags'?: string[];
  'container-item'?: string;
  'ammo-item'?: string;
  'contents-item'?: string[];
  count?: number;
}

interface Both49 {
  items: string[];
}

interface Both48 {
  items: string[];
  entries: Entry45[];
}

interface Entry45 {
  group?: string;
  item?: string;
  'ammo-item'?: string;
  'container-item'?: string;
  'contents-group'?: string;
}

interface Both47 {
  items: string[];
  entries: Entry44[];
}

interface Entry44 {
  group?: string;
  item?: string;
  'contents-item'?: string;
}

interface Both46 {
  items: string[];
  entries: Entry43[];
}

interface Entry43 {
  group?: string;
  item?: string;
  charges?: number;
  'container-item'?: string;
}

interface Both45 {
  items: string[];
  entries: Entry42[];
}

interface Entry42 {
  group?: string;
  item?: string;
  charges?: number;
}

interface Both44 {
  items: string[];
  entries: Entry41[];
}

interface Entry41 {
  item: string;
  'custom-flags': string[];
}

interface Both43 {
  items: string[];
  entries: Entry40[];
}

interface Entry40 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
  'container-item'?: string;
  'custom-flags'?: string[];
  'contents-item'?: string[];
  'contents-group'?: string[];
}

interface Both42 {
  items: string[];
  entries: Entry39[];
}

interface Entry39 {
  group?: string;
  item?: string;
  'ammo-item'?: string;
  charges?: number;
  'container-item'?: string;
}

interface Both41 {
  items: string[];
  entries: Entry38[];
}

interface Entry38 {
  item: string;
  'custom-flags'?: string[];
  'container-item'?: string;
}

interface Both40 {
  items: string[];
  entries: Entry37[];
}

interface Entry37 {
  group?: string;
  item?: string;
  'custom-flags'?: string[];
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string;
  'contents-group'?: string;
}

interface Both39 {
  items: string[];
  entries: Entry36[];
}

interface Entry36 {
  item: string;
  'custom-flags'?: string[];
  'container-item'?: string;
  'contents-group'?: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string[];
}

interface Both38 {
  items: string[];
  entries: Entry35[];
}

interface Entry35 {
  group?: string;
  item?: string;
  'custom-flags'?: string[];
  charges?: number;
  'container-item'?: string;
}

interface Both37 {
  items: string[];
  entries: Entry5[];
}

interface Both36 {
  items: string[];
  entries: Entry34[];
}

interface Entry34 {
  group?: string;
  item?: string;
  'ammo-item'?: string;
  charges?: number;
}

interface Both35 {
  items: string[];
  entries: Entry33[];
}

interface Entry33 {
  item?: string;
  charges?: number;
  'container-item'?: string;
  'custom-flags'?: string[];
  count?: number;
  group?: string;
}

interface Both34 {
  items: string[];
  entries: Entry32[];
}

interface Entry32 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string[];
  'custom-flags'?: string[];
  'container-item'?: string;
}

interface Both33 {
  items: string[];
  entries: Entry11[];
}

interface Both32 {
  items: string[];
  entries: Entry31[];
}

interface Entry31 {
  item: string;
  'contents-group': string;
}

interface Both31 {
  items: string[];
  entries: Entry30[];
}

interface Entry30 {
  item?: string;
  'custom-flags'?: string[];
  group?: string;
  'container-item'?: string;
  'ammo-item'?: string;
  charges?: number;
}

interface Both30 {
  items: string[];
  entries: Entry29[];
}

interface Entry29 {
  group?: string;
  item?: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string[];
  'container-item'?: string;
}

interface Both29 {
  items: string[];
  entries: Entry28[];
}

interface Entry28 {
  group?: string;
  item?: string;
  'contents-group'?: string;
  'contents-item'?: string;
}

interface Both28 {
  ammo: number;
  items: string[];
  entries: Entry27[];
}

interface Entry27 {
  item: string;
  'ammo-item': string;
  'container-item': string;
}

interface Both27 {
  items: string[];
  entries: Entry26[];
}

interface Entry26 {
  item: string;
  'custom-flags'?: string[];
  'ammo-item'?: string;
  charges?: number;
  'container-item'?: string;
  'contents-item'?: string;
}

interface Both26 {
  items: string[];
  entries: Entry25[];
}

interface Entry25 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
  'container-item'?: string;
  'contents-group'?: string;
}

interface Both25 {
  ammo: number;
  items: string[];
  entries: Entry24[];
}

interface Entry24 {
  item?: string;
  'custom-flags'?: string[];
  'container-item'?: string;
  'ammo-item'?: string;
  'contents-item'?: string;
  charges?: number;
  group?: string;
  'contents-group'?: string;
}

interface Both24 {
  items: string[];
  entries: Entry23[];
}

interface Entry23 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
  'container-item'?: string;
}

interface Both23 {
  items: string[];
  entries: Entry22[];
}

interface Entry22 {
  group?: string;
  item?: string;
  'custom-flags'?: string[];
  'contents-item'?: string[] | string;
  'ammo-item'?: string;
  charges?: number;
  'contents-group'?: string;
}

interface Both22 {
  items: string[];
  entries: Entry21[];
}

interface Entry21 {
  group?: string;
  item?: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string;
}

interface Both21 {
  items: string[];
  entries: Entry20[];
}

interface Entry20 {
  item: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string[];
  'custom-flags'?: string[];
  'contents-group'?: string;
}

interface Both20 {
  items: string[];
  entries: Entry19[];
}

interface Entry19 {
  group?: string;
  item?: string;
  'ammo-item'?: string;
  charges?: number;
  'container-item'?: string;
  'contents-group'?: string;
}

interface Both19 {
  ammo: number;
  magazine: number;
  items: string[];
  entries: Entry18[];
}

interface Entry18 {
  group?: string;
  item?: string;
}

interface Both18 {
  items: string[];
  entries: Entry17[];
}

interface Entry17 {
  item: string;
  'container-item'?: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string;
}

interface Both17 {
  ammo: number;
  magazine: number;
  items: string[];
  entries: Entry16[];
}

interface Entry16 {
  group?: string;
  item?: string;
  'custom-flags'?: string[];
}

interface Both16 {
  items: string[];
  entries: Entry15[];
}

interface Entry15 {
  group?: string;
  item?: string;
  'custom-flags'?: string[];
  count?: number;
}

interface Both15 {
  items: string[];
  entries: Entry14[];
}

interface Entry14 {
  item: string;
  charges: number;
}

interface Both14 {
  items: string[];
  entries: Entry13[];
}

interface Entry13 {
  group?: string;
  item?: string;
  'container-item'?: string;
}

interface Both13 {
  items: string[];
  entries: Entry12[];
}

interface Entry12 {
  item: string;
  'ammo-item': string;
  charges: number;
}

interface Both12 {
  items: any[];
  entries: Entry11[];
}

interface Entry11 {
  group: string;
}

interface Both11 {
  items: string[];
  entries: Entry10[];
}

interface Entry10 {
  group?: string;
  item?: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string;
  'contents-group'?: string;
}

interface Both10 {
  ammo: number;
  items: string[];
  entries: Entry9[];
}

interface Entry9 {
  item: string;
  'ammo-item'?: string;
  'container-item': string;
}

interface Both9 {
  items: string[];
  entries: Entry8[];
}

interface Entry8 {
  group?: string;
  item?: string;
  'ammo-item'?: string;
  charges?: number;
  'container-item'?: string;
  'contents-group'?: string;
  'contents-item'?: string;
}

interface Both8 {
  ammo: number;
  items: string[];
  entries: Entry7[];
}

interface Entry7 {
  item: string;
  'ammo-item'?: string;
  'contents-item'?: string;
  'container-item'?: string;
}

interface Both7 {
  items: string[];
  entries: Entry6[];
}

interface Entry6 {
  group?: string;
  item?: string;
  'custom-flags'?: string[];
  'contents-group'?: string[];
  'contents-item'?: string[];
  'ammo-item'?: string;
  charges?: number;
  'container-item'?: string;
}

interface Both6 {
  ammo: number;
  items: string[];
  entries: Entry5[];
}

interface Entry5 {
  group?: string;
  item?: string;
  'custom-flags'?: string[];
  'container-item'?: string;
}

interface Both5 {
  ammo: number;
  items: string[];
  entries: Entry4[];
}

interface Entry4 {
  item: string;
  'container-item': string;
}

interface Both4 {
  items: string[];
  entries: Entry3[];
}

interface Entry3 {
  item: string;
  'contents-item'?: string;
}

interface Both2 {
  items: string[];
  entries: Entry2[];
}

interface Entry2 {
  group?: string;
  item?: string;
  'contents-group'?: string;
  'custom-flags'?: string[];
  'container-item'?: string;
  'ammo-item'?: string;
  charges?: number;
  'contents-item'?: string[];
}

interface Both {
  items: string[];
  entries: Entry[];
}

interface Entry {
  group?: string;
  item?: string;
  'custom-flags'?: string[];
  'ammo-item'?: string;
  charges?: number;
  'container-item'?: string;
  'contents-group'?: string;
}

interface Skill {
  level: number;
  name: string;
}

interface Description {
  str: string;
  '//NOLINT(cata-text-style)': string;
}

interface Name {
  male: string;
  female: string;
}
