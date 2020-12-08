export interface INpc {
  type: 'npc';
  id: string;
  name_suffix?: string;
  '//'?: string;
  class: number | string;
  attitude: number;
  mission: number;
  chat: string;
  faction: string;
  name_unique?: string;
  mission_offered?: string[] | string;
  gender?: string;
  '//2'?: string;
}
