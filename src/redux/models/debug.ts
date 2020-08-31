/* eslint-disable no-param-reassign */
const initialState = {
  inDebugMode: false,
};
type IState = typeof initialState;
export default {
  state: initialState,
  reducers: {
    toggleDebugMode(state: IState): void {
      state.inDebugMode = !state.inDebugMode;
    },
  },
};
