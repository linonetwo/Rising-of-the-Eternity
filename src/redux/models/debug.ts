/* eslint-disable no-param-reassign */
import { createModel } from '@rematch/core';
import { RootModel } from '../rootModelType';

const initialState = {
  inDebugMode: false,
};
type IState = typeof initialState;
export const debug = createModel<RootModel>()({
  state: initialState,
  reducers: {
    toggleDebugMode(state: IState) {
      state.inDebugMode = !state.inDebugMode;
      return state;
    },
  },
});
