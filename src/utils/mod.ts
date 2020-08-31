/* eslint-disable @typescript-eslint/no-implied-eval */
/* eslint-disable no-new-func */
import { useState, useEffect } from 'react';
import path from 'path';

import { resources } from './resourcePool';

function initializeMod(modName: string, modInitializationScriptContent: string) {
  const modInitializationFunction = new Function(
    'resources',
    `
    ${modInitializationScriptContent}
  `,
  );
  Object.defineProperty(modInitializationFunction, 'name', {
    value: `${path.join(modName, 'scripts', 'init.js')}`,
    writable: false,
  });
  try {
    modInitializationFunction(resources);
  } catch (error) {
    throw new Error(`Mod ${modName} failed to initialize:\n${(error as Error).message}\n${(error as Error).stack || ''} `);
  }
}

export enum MOD_LOADING_STATE {
  notStarted,
  prepare,
  loading,
  ready,
  failed,
}
export function useMods(): [MOD_LOADING_STATE] {
  const [modList, modListSetter] = useState<Array<string>>([]);
  const [modLoadingState, modLoadingStateSetter] = useState<MOD_LOADING_STATE>(MOD_LOADING_STATE.notStarted);

  // load mod list first
  useEffect(() => {
    (async () => {
      modLoadingStateSetter(MOD_LOADING_STATE.prepare);
      modListSetter(await window.mod.loadModList());
    })().catch(() => {
      modLoadingStateSetter(MOD_LOADING_STATE.failed);
    });
  }, []);
  // then load mods by execute their initialization scripts
  useEffect(() => {
    (async () => {
      modLoadingStateSetter(MOD_LOADING_STATE.loading);
      const loadModTasks = modList.map(async (modName) => {
        const scriptContent = await window.mod.loadModInitializationScript({ modName });
        initializeMod(modName, scriptContent);
      });
      await Promise.all(loadModTasks);
    })().then(
      () => {
        modLoadingStateSetter(MOD_LOADING_STATE.ready);
      },
      (error: Error) => {
        // TODO: log to winston here
        console.error(error);
        modLoadingStateSetter(MOD_LOADING_STATE.failed);
      },
    );
  }, [modList]);

  return [modLoadingState];
}
