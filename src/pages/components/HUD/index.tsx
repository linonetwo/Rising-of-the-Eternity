// @flow
import React from 'react';
import styled from 'styled-components';
import { Alignment, Button, Classes, Navbar, NavbarDivider, NavbarGroup, Position, Switch, Popover } from '@blueprintjs/core';
import { useDispatch, useSelector } from 'react-redux';

import { RootState, Dispatch } from '../../../redux';
import getMainMenu from './getMainMenu';

const Nav = styled(Navbar)`
  position: absolute;
`;
const DebugSwitch = styled(Switch)`
  margin-bottom: 0;
  margin-left: 10px;
`;

export default function HUD(): JSX.Element {
  const inDebugMode: boolean = useSelector((state: RootState) => state.debug.inDebugMode);
  const dispatch = useDispatch<Dispatch>();

  return (
    <>
      <Nav>
        <NavbarGroup align={Alignment.LEFT}>
          <Popover content={getMainMenu()} position={Position.BOTTOM} minimal>
            <Button className={Classes.MINIMAL} icon="menu" />
          </Popover>
          <NavbarDivider />
          <Button className={Classes.MINIMAL} icon="user" text="Spawn Protagonist" />
          <DebugSwitch checked={inDebugMode} label="Debug" onChange={dispatch.debug.toggleDebugMode} />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button className={Classes.MINIMAL} icon="cog" />
        </NavbarGroup>
      </Nav>
    </>
  );
}
