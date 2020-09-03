import { createWorld } from '@javelin/ecs';
import componentTypes from './components';
import systems from './systems';

export const world = createWorld<ISystemData>({
  systems,
  componentTypes,
});

let previousTime = 0;
const reactConnectData = {};

function loop(time = 0) {
  const deltaTime = time - (previousTime || time);
  world.tick({ deltaTime, reactConnectData });

  previousTime = time;
  requestAnimationFrame(loop);
}

export function startGameLoop(): void {
  loop();
}
