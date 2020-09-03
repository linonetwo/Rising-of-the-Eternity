import React from 'react';
import styled from 'styled-components';
import { Alignment, Button, Classes, Navbar, NavbarGroup } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import ROUTE from '../constants/route';

import LevelList from './components/MapList';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Nav = styled(Navbar)`
  position: absolute;
  top: 0;
`;

export default function Welcome(): JSX.Element {
  return (
    <Container>
      <Nav>
        <NavbarGroup align={Alignment.LEFT}>
          <Link to={ROUTE.welcome}>
            <Button className={Classes.MINIMAL} icon="step-backward" text="Back To Menu" />
          </Link>
        </NavbarGroup>
      </Nav>

      <LevelList />
    </Container>
  );
}
