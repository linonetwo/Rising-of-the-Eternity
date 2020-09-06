import { World } from '@javelin/ecs';

import { VisibleItem } from '../components/VisibleItem';
import { spawnPawnTopic } from '../topics/spawn';

export const spawn = (world: World): void => {
  for (const command of spawnPawnTopic) {
    if (command[0] === 'spawnPawn') {
      world.spawn(world.component(VisibleItem, ...command[1]));
    }
  }
};
