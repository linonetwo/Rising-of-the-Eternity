// @flow
import React from 'react';
import { Sprite, Container, Text } from 'react-pixi-fiber';
import * as PIXI from 'pixi.js';

import { resources } from '../../../utils/resourcePool';

const centerAnchor = new PIXI.Point(0.5, 0.5);

export type PawnTextureFacing = 'north' | 'south' | 'east' | 'west';
export type PawnFacing = PawnTextureFacing | 'west';
export type IPawnProps = {
  facing: PawnFacing;
  texture: {
    body: {
      east: string;
      north: string;
      south: string;
    };
    hair: {
      east: string;
      north: string;
      south: string;
    };
    head: {
      east: string;
      north: string;
      south: string;
    };
  };
  collider: { type: string; width: number; height: number };
  position: [number, number];
};

function flipTexture(texture: PIXI.Texture) {
  return new PIXI.Texture((texture as unknown) as PIXI.BaseTexture, texture.frame, undefined, undefined, 12);
}

export default function Pawn(props: IPawnProps): JSX.Element {
  let { facing } = props;
  let flipLeftRight = false;
  if (facing === 'west') {
    facing = 'east';
    flipLeftRight = true;
  }
  const headHeight = 40;

  const headTexture = flipLeftRight
    ? resources.getTexture(`${props.texture.body[facing]}_flip`, flipTexture, props.texture.body[facing])
    : resources.getTexture(props.texture.body[facing]);
  if (!headTexture) return <Text text="No Body Texture" x={0} y={0} />;
  const bodyTexture = flipLeftRight
    ? resources.getTexture(`${props.texture.head[facing]}_flip`, flipTexture, props.texture.head[facing])
    : resources.getTexture(props.texture.head[facing]);
  if (!bodyTexture) return <Text text="No Head Texture" x={0} y={0} />;
  const hairTexture = flipLeftRight
    ? resources.getTexture(`${props.texture.hair[facing]}_flip`, flipTexture, props.texture.hair[facing])
    : resources.getTexture(props.texture.hair[facing]);
  if (!hairTexture) return <Text text="No Hair Texture" x={0} y={0} />;
  return (
    <Container>
      <Sprite
        width={props.collider.width}
        height={props.collider.height}
        anchor={centerAnchor}
        x={props.position[0]}
        y={props.position[1]}
        texture={headTexture}
      />
      <Sprite
        width={props.collider.width}
        height={props.collider.height}
        anchor={centerAnchor}
        x={props.position[0]}
        y={props.position[1] - headHeight}
        texture={bodyTexture}
      />
      <Sprite
        width={props.collider.width}
        height={props.collider.height}
        anchor={centerAnchor}
        x={props.position[0]}
        y={props.position[1] - headHeight}
        texture={hairTexture}
      />
    </Container>
  );
}
