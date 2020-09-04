/* eslint-disable no-param-reassign */
import { createModel } from '@rematch/core';
import { RootModel } from '../rootModelType';

import { initializeMod } from '../../utils/mod';

export enum MOD_LOADING_STATE {
  notStarted = 'notStarted',
  prepare = 'prepare',
  loading = 'loading',
  ready = 'ready',
  failed = 'failed',
}

const initialState = {
  modList: [],
  modLoadingState: MOD_LOADING_STATE.notStarted,
  mapList: [],
};
export type IState = {
  modList: string[];
  modLoadingState: MOD_LOADING_STATE;
  mapList: string[];
};
export const mod = createModel<RootModel>()({
  state: initialState as IState,
  reducers: {
    setModList(state: IState, newModList: string[]) {
      state.modList = newModList;
      return state;
    },
    setModLoadingState(state: IState, newLoadingState: MOD_LOADING_STATE) {
      state.modLoadingState = newLoadingState;
      return state;
    },
    setMapList(state: IState, newMapList: string[]) {
      state.mapList = newMapList;
      return state;
    },
  },
  effects: (dispatch) => ({
    async loadModList() {
      try {
        dispatch.mod.setModLoadingState(MOD_LOADING_STATE.prepare);
        const modList = await window.mod.loadModList();
        dispatch.mod.setModList(modList);
      } catch (error) {
        dispatch.mod.setModLoadingState(MOD_LOADING_STATE.failed);
        console.error(error);
      }
    },
    async initializeMods(_, rootState) {
      try {
        dispatch.mod.setModLoadingState(MOD_LOADING_STATE.loading);
        const loadModTasks: Promise<void>[] = rootState.mod.modList.map(async (modName) => {
          const scriptContent = await window.mod.loadModInitializationScript({ modName });
          initializeMod(modName, scriptContent);
        });
        await Promise.all(loadModTasks);
        dispatch.mod.setModLoadingState(MOD_LOADING_STATE.ready);
      } catch (error) {
        dispatch.mod.setModLoadingState(MOD_LOADING_STATE.failed);
        console.error(error);
      }
    },
    async loadMapList(_, rootState) {
      try {
        let mapList: string[] = [];
        for (const modName of rootState.mod.modList) {
          const mapListOfMod = await window.mod.loadModMapList({ modName });
          mapList = [...mapList, ...mapListOfMod];
        }
        dispatch.mod.setMapList(mapList);
      } catch (error) {
        console.error(error);
      }
    },
  }),
});
