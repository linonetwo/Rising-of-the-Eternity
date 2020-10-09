/* eslint-disable no-param-reassign */
import { createModel } from '@rematch/core';
import { RootModel } from '../rootModelType';
import { Direction } from '@typings/move';

const initialState = {
  cameraX: 0,
  cameraY: 0,
  mouseX: 0,
  mouseY: 0,
};
type IState = typeof initialState;
export const cameraMouse = createModel<RootModel>()({
  state: initialState,
  reducers: {
    centerViewTo(
      state: IState,
      newLocation: {
        x: number;
        y: number;
      },
    ) {
      state.cameraX = newLocation.x;
      state.cameraY = newLocation.y;
      return state;
    },
    mouseMoveTo(
      state: IState,
      newLocation: {
        x: number;
        y: number;
      },
    ) {
      state.mouseX = newLocation.x;
      state.mouseY = newLocation.y;
      return state;
    },
    cameraMove(state: IState, direction: Direction, distance = 10) {
      switch (direction) {
        case Direction.up:
          state.cameraY += distance;
          break;
        case Direction.down:
          state.cameraY -= distance;
          break;
        case Direction.left:
          state.cameraX -= distance;
          break;
        case Direction.right:
          state.cameraX += distance;
          break;

        default:
          break;
      }
      return state;
    },
  },
});
