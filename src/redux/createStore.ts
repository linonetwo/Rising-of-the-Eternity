import { init, RematchStore } from '@rematch/core';
import createLoadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import immerPlugin from '@rematch/immer';
import { RootModel } from './rootModelType';

const immer = immerPlugin<RootModel>();

type FullModel = ExtraModelsFromLoading<RootModel>;
export default (models: RootModel): RematchStore<RootModel> =>
  init<RootModel, FullModel>({
    redux: {
      devtoolOptions: {},
    },
    models,
    plugins: [createLoadingPlugin(), immer],
  });
