import { createComponentType, string, number } from '@javelin/ecs';

export const VisibleItem = createComponentType({
  name: 'VisibleItem',
  type: 1,
  schema: {
    x: number,
    y: number,
    texture: string,
  },
});
