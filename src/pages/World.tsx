import React, { useState } from 'react';
import styled from 'styled-components';
import { Stage } from 'react-pixi-fiber';
import { Provider } from 'react-redux';

import { store } from '../redux';
import HUD from './components/HUD';
import ContextMenu from './components/ContextMenu';
import Pawn from './sprites/pawn';

const Container = styled.main``;

const containerID = 'game-container';

export default function World(): JSX.Element {
  const [contextMenuIsOpen, contextMenuIsOpenSetter] = useState(false);
  const [mouseEntity, mouseEntitySetter] = useState({ position: [0, 0] });

  const randomHeadName = 'Female_Narrow_Pointy';
  const randomHairName = 'Hubert';
  const randomBodyName = 'Naked_Thin';
  const renderedEntities = [
    <Pawn
      key="testPawn"
      facing="south"
      collider={{ type: 'block', width: 160, height: 160 }}
      position={[0, 0]}
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
    />,
  ];
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
        onMouseMove={(event) => {
          // should send to game system instead
          mouseEntitySetter({ position: [event.clientX, event.clientY] });
        }}
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
        <Provider store={store}>{renderedEntities}</Provider>
      </Stage>

      <ContextMenu
        items={[
          {
            title: 'entity.name',
            type: 'entity[]',
            icon: 'people',
          },
        ]}
        position={mouseEntity ? mouseEntity.position : [0, 0]}
        open={contextMenuIsOpen}
        mountPoint={containerID}
      />
    </Container>
  );
}
