import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, Card } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ROUTE from '../../../constants/route';
import { RootState, Dispatch } from '../../../redux';

const Menu = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: fit-content;
`;

export default function MapList(): JSX.Element {
  // load maps
  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    void dispatch.mod.loadMapList();
  }, []);
  const mapList = useSelector((state: RootState) => state.mod.mapList);

  return (
    <Menu>
      {mapList.map((mapName) => (
        <Link key={mapName} to={ROUTE.world}>
          <Button>{mapName}</Button>
        </Link>
      ))}
    </Menu>
  );
}
