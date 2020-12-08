export interface IModInfo {
  type: 'MOD_INFO';
  id: string;
  name: string;
  description: string;
  dependencies?: string[];
  authors?: string[] | string;
  maintainers?: string[];
  category?: string;
  version?: string;
  obsolete?: boolean;
  core?: boolean;
  path?: string;
  legacy?: string;
  '//'?: string;
}
