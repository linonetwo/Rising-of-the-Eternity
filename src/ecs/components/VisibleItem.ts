import { createComponentType, string, number } from '@javelin/ecs';

export const VisibleItem = createComponentType({
  name: 'VisibleItem',
  type: 1,
  schema: {
    x: number,
    y: number,
    texture: string,
  },
  initialize: (_this, x = 0, y = 0, textureName = 'noTexture') => {
    _this.x = x;
    _this.y = y;
    _this.texture = textureName;
  },
});
