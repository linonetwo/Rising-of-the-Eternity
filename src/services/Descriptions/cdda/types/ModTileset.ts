export interface IModTileset {
  type: 'mod_tileset';
  compatibility: string[];
  'tiles-new': Tilesnew[];
}

interface Tilesnew {
  file: string;
  tiles: Tile[];
  '//'?: string;
  sprite_width?: number;
  sprite_height?: number;
  sprite_offset_x?: number;
  sprite_offset_y?: number;
}

interface Tile {
  id: string[] | string | string | string;
  fg: Fg[] | any[] | number[] | number[] | number | number | number | number;
  bg?: any[];
  rotates?: boolean;
}

interface Fg {
  weight: number;
  sprite: number;
}
