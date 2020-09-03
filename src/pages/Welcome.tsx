import React from 'react';
import styled from 'styled-components';
import { Card, Button } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import ROUTE from '../constants/route';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const Menu = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: fit-content;
`;

export default function Welcome(): JSX.Element {
  return (
    <Container>
      <Menu>
        <Link to={ROUTE.sandbox}>
          <Button>Playground</Button>
        </Link>
      </Menu>
    </Container>
  );
}
