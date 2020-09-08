import React from 'react';
import { Sprite, Container, Text } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

import { tileWidthHeight } from '../../../constants/math';
import { resources } from '../../../utils/resourcePool';

const centerAnchor = new PIXI.Point(0.5, 0.5);

export type IPawnProps = {
  texture: string;
  x: number;
  y: number;
};

export default React.memo(function Tile(props: IPawnProps): JSX.Element {
  const tileTexture = resources.getTexture(props.texture);
  if (!tileTexture) return <Text text={`No Tile Texture "${props.texture}"`} x={0} y={0} />;

  return (
    <Container>
      <Sprite width={tileWidthHeight} height={tileWidthHeight} anchor={centerAnchor} x={props.x} y={props.y} texture={tileTexture} />
    </Container>
  );
});
