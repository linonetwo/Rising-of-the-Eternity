/* eslint-disable @typescript-eslint/no-use-before-define */
import { createTopic } from '@javelin/ecs';

export enum MapCommandType {
  load,
}
type MapCommands = ILoadMapCommand;

// ("spawnPawn", entity: number, position: [x: number, y: number])
type ILoadMapCommand = [MapCommandType.load, [{ modName: string; mapName: string }]];
export const loadMap = (mapInfo: { modName: string; mapName: string }): void =>
  mapTopic.push([MapCommandType.load, [mapInfo]] as ILoadMapCommand);

export const mapTopic = createTopic<MapCommands>();
