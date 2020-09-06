import { createWorld } from '@javelin/ecs';
import { VisibleItem } from './components/VisibleItem';
import componentTypes from './components';
import systems from './systems';
import { spawnPawnTopic } from './topics/spawn';

interface ISystemData {
  deltaTime: number;
}

export const world = createWorld<ISystemData>({
  systems,
  componentTypes,
});

let previousTime = 0;

function loop(time = 0) {
  const deltaTime = time - (previousTime || time);
  spawnPawnTopic.flush();
  world.tick({ deltaTime });

  previousTime = time;
  requestAnimationFrame(loop);
}

export function startGameLoop(): void {
  world.spawn(world.component(VisibleItem, 100, 100));
  loop();
}
