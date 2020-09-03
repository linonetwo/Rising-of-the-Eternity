/* eslint-disable @typescript-eslint/no-implied-eval */
/* eslint-disable no-new-func */
import path from 'path';

import { resources } from './resourcePool';

export function initializeMod(modName: string, modInitializationScriptContent: string): void {
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
