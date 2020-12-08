export interface IGate {
  type: 'gate';
  id: string;
  alias?: string[];
  door: string;
  floor: string;
  walls: string[] | string;
  messages: Messages;
  moves: number;
  bashing_damage: number;
  '//'?: string;
}

interface Messages {
  pull: string;
  open: string;
  close: string;
  fail: string;
}
