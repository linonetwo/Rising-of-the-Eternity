import { Mod } from './constants/handlerNames';

export interface IGetTextureArgument {
  modName: string;
  texturePath: string;
}

declare global {
  interface Window {
    mod: {
      [Mod.getTexture]: (textureArgument: IGetTextureArgument) => Promise<string>;
      [Mod.loadModList]: () => Promise<Array<string>>;
      [Mod.loadModInitializationScript]: (argument: { modName: string }) => Promise<string>;
    };
  }
}
