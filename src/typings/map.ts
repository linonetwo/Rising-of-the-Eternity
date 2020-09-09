export interface IMapMaterial {
  '@type': string;
  '@id': string;
  texture: string;
  size?: number[];
}

export interface IMapBlock {
  name: string;
  tiles: [string | string[]][];
}

export interface IMap {
  materials: IMapMaterial[];
  maps: IMapBlock[];
}
