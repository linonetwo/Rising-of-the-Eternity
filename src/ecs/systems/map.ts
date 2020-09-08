import { World } from '@javelin/ecs';

import { VisibleItem } from '../components/VisibleItem';
import { Tile } from '../components/Tile';
import { MapCommandType, mapTopic } from '../topics/map';
import { IMap } from '../../typings/map';
import { tileWidthHeight } from '../../constants/math';
import { resources } from '../../utils/resourcePool';

export const mapManagement = (world: World): void => {
  for (const command of mapTopic) {
    if (command[0] === MapCommandType.load) {
      const [mapInfo] = command[1];
      window.mod
        .loadMap(mapInfo)
        .then((map: IMap) => {
          const { materials } = map;
          // load textures
          return Promise.all(materials.map((material) => resources.getTextureFromDisk(material.texture))).then(() => map);
        })
        .then((map: IMap) => {
          const { maps, materials } = map;

          const getTextureByMaterialType = (materialType: string) =>
            // TODO: add defaultTexture
            materials.find((material) => material['@id'] === materialType)?.texture || 'noTexture';
          // calculate tile x y based on rowIndex and columnIndex
          let blockIndex = 0;
          let rowIndex = 0;
          let columnIndex = 0;
          const getPosition = (): [number, number] => [columnIndex * tileWidthHeight, rowIndex * tileWidthHeight];
          // we will call this function on each tile
          const spawnTileWithType = (materialType: string) => {
            const [x, y] = getPosition();
            world.spawn(world.component(VisibleItem, x, y, getTextureByMaterialType(materialType)), world.component(Tile));
          };

          // process map content to create render-able map tiles
          for (const mapBlock of maps) {
            blockIndex += 1;
            rowIndex = 0;
            columnIndex = 0;
            const { name, tiles } = mapBlock;
            // TODO: render map name below this map block
            console.log(blockIndex, name);
            for (const mapRow of tiles) {
              rowIndex += 1;
              columnIndex = 0;
              for (const mapTileTypeName of mapRow) {
                columnIndex += 1;
                if (Array.isArray(mapTileTypeName)) {
                  // a tile may contains more than one thing
                  for (const mapTileTypeNameInArray of mapTileTypeName) {
                    spawnTileWithType(mapTileTypeNameInArray);
                  }
                } else {
                  // or just one thing
                  spawnTileWithType(mapTileTypeName);
                }
              }
            }
          }
        })
        .catch((error) => {
          // TODO: handle error using an error system here
          console.error(error);
        });
    }
  }
};
