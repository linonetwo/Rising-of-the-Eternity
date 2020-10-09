// @flow
import React from 'react';
import styled from 'styled-components';
import { Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, Position, Switch, Popover } from '@blueprintjs/core';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, StoreDispatch } from '../../../redux';
import getMainMenu from './getMainMenu';
import { spawnPawnTopic } from '../../../ecs/topics/spawn';

const Nav = styled(Navbar)`
  position: absolute;
`;
const DebugSwitch = styled(Switch)`
  margin-bottom: 0;
  margin-left: 10px;
`;

export default function HUD(): JSX.Element {
  const inDebugMode: boolean = useSelector((state: RootState) => state.debug.inDebugMode);
  const dispatch = useDispatch<StoreDispatch>();

  return (
    <>
      <Nav>
        <NavbarGroup align={Alignment.LEFT}>
          <Popover content={getMainMenu()} position={Position.BOTTOM} minimal>
            <Button className={Classes.MINIMAL} icon="menu" />
          </Popover>
          <NavbarDivider />
          <Button
            className={Classes.MINIMAL}
            icon="user"
            text="Spawn Protagonist"
            onClick={() => {
              spawnPawnTopic.push(['spawnPawn', [100 * Math.random(), 100 * Math.random()]]);
            }}
          />
          <DebugSwitch checked={inDebugMode} label="Debug" onChange={dispatch.debug.toggleDebugMode} />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button className={Classes.MINIMAL} icon="cog" />
        </NavbarGroup>
      </Nav>
    </>
  );
}
