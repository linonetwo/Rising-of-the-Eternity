import { contextBridge, ipcRenderer } from 'electron';
import fs from 'fs';
import * as i18nextBackend from 'i18next-electron-fs-backend';
import Store from 'secure-electron-store';

import { Mod } from './constants/handlerNames';

contextBridge.exposeInMainWorld('mod', {
  [Mod.getTexture]: ({ texturePath }: { texturePath: string }) => ipcRenderer.invoke(Mod.getTexture, { texturePath }),
  [Mod.loadModList]: () => ipcRenderer.invoke(Mod.loadModList),
  [Mod.loadModInitializationScript]: ({ modName }: { modName: string }) => ipcRenderer.invoke(Mod.loadModInitializationScript, { modName }),
  [Mod.loadModMapList]: ({ modName }: { modName: string }) => ipcRenderer.invoke(Mod.loadModMapList, { modName }),
  [Mod.loadMap]: ({ modName, mapName }: { modName: string; mapName: string }) => ipcRenderer.invoke(Mod.loadMap, { modName, mapName }),
});

const store = new Store();

contextBridge.exposeInMainWorld('api', {
  i18nextElectronBackend: i18nextBackend.preloadBindings(ipcRenderer),
  store: store.preloadBindings(ipcRenderer, fs),
});
