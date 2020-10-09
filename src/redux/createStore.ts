import { init, RematchStore } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';
import immerPlugin from '@rematch/immer';
import { RootModel } from './rootModelType';

const loadingOptions = {};
const loading = createLoadingPlugin<RootModel>(loadingOptions);
const immer = immerPlugin<RootModel>();

export default (models: RootModel): RematchStore<RootModel> =>
  init<RootModel>({
    redux: {
      devtoolOptions: {},
    },
    models,
    plugins: [loading, immer],
  });
