export interface IModInfo {
  type: 'MOD_INFO';
  id: string;
  name: string;
  description: string;
  dependencies?: string[];
  authors?: string[] | string;
  category?: string;
  core?: boolean;
  path?: string;
  legacy?: string;
  maintainers?: string[];
  obsolete?: boolean;
  '//'?: string;
}
