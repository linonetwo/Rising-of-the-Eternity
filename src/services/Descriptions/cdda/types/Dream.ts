export interface IDream {
  type: 'dream';
  messages: string[];
  category: string;
  strength: number;
  '//'?: string;
}
