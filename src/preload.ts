import { contextBridge, ipcRenderer } from 'electron';
import fs from 'fs';
import * as i18nextBackend from 'i18next-electron-fs-backend';
import Store from 'secure-electron-store';

import { Mod } from './constants/handlerNames';
import { IGetTextureArgument } from './preload.type';

contextBridge.exposeInMainWorld('mod', {
  [Mod.getTexture]: ({ modName, texturePath }: IGetTextureArgument) => ipcRenderer.invoke(Mod.getTexture, { modName, texturePath }),
  [Mod.loadModList]: () => ipcRenderer.invoke(Mod.loadModList),
  [Mod.loadModInitializationScript]: ({ modName }: { modName: string }) => ipcRenderer.invoke(Mod.loadModInitializationScript, { modName }),
  [Mod.loadModMapList]: ({ modName }: { modName: string }) => ipcRenderer.invoke(Mod.loadModMapList, { modName }),
});

const store = new Store();

contextBridge.exposeInMainWorld('api', {
  i18nextElectronBackend: i18nextBackend.preloadBindings(ipcRenderer),
  store: store.preloadBindings(ipcRenderer, fs),
});
