import React, { useMemo } from 'react';
import { query } from '@javelin/ecs';
import { useMappedQuery, MappedComponentProps } from '../../../ecs/react-javelin-ecs';

import { VisibleItem } from '../../../ecs/components/VisibleItem';
import { Tile as TileComponent } from '../../../ecs/components/Tile';
import Tile from '.';

export default function Tiles(): JSX.Element {
  const positions = useMemo(() => query(VisibleItem, TileComponent), []);
  const tiles = useMappedQuery(positions, (props: MappedComponentProps<[typeof VisibleItem, typeof TileComponent]>) => {
    const { x, y, texture } = props.components[0];
    return <Tile x={x} y={y} texture={texture} />;
  });

  return <>{tiles}</>;
}
