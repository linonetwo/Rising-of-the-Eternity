export interface IJsonFlag {
  id: string;
  type: 'json_flag';
  context: string[];
  info?: string;
  '//'?: string;
  conflicts?: string[];
  restriction?: string;
  inherit?: boolean;
  craft_inherit?: boolean;
  taste_mod?: number;
  requires_flag?: string;
}
