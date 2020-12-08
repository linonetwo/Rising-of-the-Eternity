export interface IToolQuality {
  type: 'tool_quality';
  id: string;
  name: Name | string;
  usages?: Array<Array<string[] | number>>;
  '//'?: string;
  '//2'?: string;
  '//3'?: string;
}

interface Name {
  str: string;
}
