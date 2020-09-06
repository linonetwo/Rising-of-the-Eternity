import { createComponentType, string, number } from '@javelin/ecs';

export const VisibleItem = createComponentType({
  name: 'VisibleItem',
  type: 1,
  schema: {
    x: number,
    y: number,
    texture: string,
  },
  initialize: (position, x = 0, y = 0) => {
    position.x = x;
    position.y = y;
  },
});
