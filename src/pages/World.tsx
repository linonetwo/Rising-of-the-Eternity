import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { Stage } from 'react-pixi-fiber';
import { Provider, useDispatch } from 'react-redux';
import { query } from '@javelin/ecs';

import { WorldProvider, useMappedQuery, MappedComponentProps } from '../ecs/react-javelin-ecs';
import { world } from '../ecs';
import { store, Dispatch } from '../redux';
import HUD from './components/HUD';
import ContextMenu from './components/ContextMenu';
import Pawn from './sprites/pawn';
import Tiles from './sprites/tile/tiles';
import { VisibleItem } from '../ecs/components/VisibleItem';

const Container = styled.main``;

const containerID = 'game-container';

function PawnWithTexture(props: MappedComponentProps<[typeof VisibleItem]>): JSX.Element {
  const randomHeadName = 'Female_Narrow_Pointy';
  const randomHairName = 'Hubert';
  const randomBodyName = 'Naked_Thin';

  return (
    <Pawn
      key="testPawn"
      facing="south"
      collider={{ type: 'block', width: 160, height: 160 }}
      position={[props.components[0].x, props.components[0].y]}
      texture={{
        head: {
          north: `${randomHeadName}_north`,
          south: `${randomHeadName}_south`,
          east: `${randomHeadName}_east`,
        },
        hair: {
          north: `${randomHairName}_north`,
          south: `${randomHairName}_south`,
          east: `${randomHairName}_east`,
        },
        body: {
          north: `${randomBodyName}_north`,
          south: `${randomBodyName}_south`,
          east: `${randomBodyName}_east`,
        },
      }}
    />
  );
}

function Pawns(): JSX.Element {
  const positions = useMemo(() => query(VisibleItem), []);
  const pawns = useMappedQuery(positions, PawnWithTexture);

  return <>{pawns}</>;
}

export default function World(): JSX.Element {
  const dispatch = useDispatch<Dispatch>();
  const setMousePosition = useCallback(
    (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
      if (typeof event.clientX === 'number' && typeof event.clientY === 'number') {
        dispatch.cameraMouse.mouseMoveTo({ x: event.clientX, y: event.clientY });
      }
    },
    [dispatch],
  );
  const [contextMenuIsOpen, contextMenuIsOpenSetter] = useState(false);

  return (
    <Container id={containerID}>
      <HUD />
      <Stage
        // follow the camera
        pivot={{
          x: 0,
          y: 0,
        }}
        // center the camera
        position={{ x: window.innerWidth / 2, y: window.innerHeight / 2 }}
        options={{
          backgroundColor: 0x10bb99,
          height: window.innerHeight,
          width: window.innerWidth,
        }}
        onMouseMove={setMousePosition}
        onContextMenu={(event) => {
          event.preventDefault();
          // reopen the menu to refresh its props
          contextMenuIsOpenSetter(false);
          setImmediate(() => {
            contextMenuIsOpenSetter(true);
          });
        }}
        onClick={() => {
          contextMenuIsOpenSetter(false);
        }}>
        <Provider store={store}>
          <WorldProvider world={world}>
            <Tiles />
          </WorldProvider>
        </Provider>
      </Stage>

      <ContextMenu
        items={[
          {
            title: 'entity.name',
            type: 'entity[]',
            icon: 'people',
          },
        ]}
        open={contextMenuIsOpen}
        mountPoint={containerID}
      />
    </Container>
  );
}
