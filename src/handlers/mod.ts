/* eslint-disable no-await-in-loop */
import { ipcMain } from 'electron';
import path from 'path';
import fs from 'fs-extra';
import { modFolder } from '../constants/paths';
import { Mod } from '../constants/handlerNames';
import type { IMap } from '../typings/map';

ipcMain.handle(Mod.loadModList, () => fs.readdir(modFolder));
ipcMain.handle(Mod.loadModMapList, (_, { modName }: { modName: string }) => fs.readdir(path.join(modFolder, modName, 'maps')));

ipcMain.handle(Mod.loadModInitializationScript, async (_, { modName }: { modName: string }) => {
  const modInitializationScriptLocation = path.join(modFolder, modName, 'scripts', 'init.js');
  const initializationScriptContent = await fs.readFile(modInitializationScriptLocation, 'utf-8');
  return initializationScriptContent;
});

ipcMain.handle(Mod.getTexture, async (_, { texturePath }: { texturePath: string }) => {
  const textureLocation = path.join(modFolder, texturePath);
  const result = await fs.readFile(textureLocation, 'base64');
  return `data:image/png;base64,${result}`;
});
ipcMain.handle(Mod.loadMap, async (_, { modName, mapName }: { modName: string; mapName: string }) => {
  const textureLocation = path.join(modFolder, modName, 'maps', mapName);
  const result = (await fs.readJSON(textureLocation)) as IMap;
  return result;
});
