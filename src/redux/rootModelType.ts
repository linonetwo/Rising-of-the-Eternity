import { Models } from '@rematch/core';

import { debug } from './models/debug';
import { mod } from './models/mod';

export interface RootModel extends Models<RootModel> {
  debug: typeof debug;
  mod: typeof mod;
}
