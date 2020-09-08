import { Mod } from './constants/handlerNames';
import type { IMap } from './typings/map';

declare global {
  interface Window {
    mod: {
      [Mod.getTexture]: (textureArgument: { texturePath: string }) => Promise<string>;
      [Mod.loadModList]: () => Promise<Array<string>>;
      [Mod.loadModInitializationScript]: (_arguments: { modName: string }) => Promise<string>;
      [Mod.loadModMapList]: (_arguments: { modName: string }) => Promise<Array<string>>;
      [Mod.loadMap]: (_arguments: { modName: string; mapName: string }) => Promise<IMap>;
    };
  }
}
