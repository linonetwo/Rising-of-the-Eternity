import { connectRouter, routerMiddleware } from 'connected-react-router';
import { init, RematchStore } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import immerPlugin from '@rematch/immer';
import { createHashHistory } from 'history';

import { RootModel } from './rootModelType';

const loadingOptions = {};
const loading = createLoadingPlugin<RootModel>(loadingOptions);
const immer = immerPlugin<RootModel>();

export const history = createHashHistory();

const reducers = { router: connectRouter(history) };

export default (models: RootModel): RematchStore<RootModel> =>
  init<RootModel>({
    redux: {
      reducers,
      middlewares: [routerMiddleware(history)],
      devtoolOptions: {},
    },
    models,
    plugins: [loading, immer],
  });
