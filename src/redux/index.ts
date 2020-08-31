import { RematchDispatch, RematchRootState, Models } from '@rematch/core';

import createStore from './createStore';
import debug from './models/debug';

export { history } from './createStore';

export interface RootModel extends Models<RootModel> {
  debug: typeof debug;
}
const models: RootModel = { debug };
export const store = createStore((models as unknown) as Models);

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
