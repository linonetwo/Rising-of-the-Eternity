import React from 'react';
import { Menu, MenuItem, MenuDivider } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import ROUTES from '../../../constants/route';

export default function getDebugMenu() {
  return (
    <Menu>
      <Link to={ROUTES.welcome}>
        <MenuItem icon="home" text="Back To Menu" />
      </Link>
      <MenuDivider />
    </Menu>
  );
}
