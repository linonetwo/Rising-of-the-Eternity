/* eslint-disable import/no-duplicates */
declare module '@pixi/unsafe-eval' {
  import * as PIXI from 'pixi.js';
  export function install(pixi: typeof PIXI): void;
}

declare module 'fast-fuzzy' {
  export function search<T>(term: string, candidates: T[], options?: { keySelector: (item: T) => string }): T[];
}

declare module 'i18next-electron-fs-backend' {
  import { IpcRenderer } from 'electron';
  export function preloadBindings(ipcRenderer: IpcRenderer): { onLanguageChange: (arguments_: { lng: string }) => void };
}
declare module 'secure-electron-store' {
  import { IpcRenderer } from 'electron';
  import * as fs from 'fs';

  export const readConfigRequest = 'readConfigRequest';
  export const writeConfigRequest = 'writeConfigRequest';
  export default class Store {
    public preloadBindings(
      ipcRenderer: IpcRenderer,
      fsProvider: typeof fs,
    ): {
      send(requestType: typeof readConfigRequest, key: string): string | void;
      send(requestType: typeof writeConfigRequest, key: string, value: string): void;
    };
  }
}
