import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import './preload.type';
import { store, history } from './redux';
import GlobalStyle from './globalStyles';

import ROUTE from './constants/route';
import Welcome from './pages/Welcome';
import World from './pages/World';

import { useMods } from './utils/mod';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export function App(): JSX.Element {
  // load mods
  useMods();

  return (
    <>
      <GlobalStyle />
      <Container>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path={ROUTE.welcome} component={Welcome} />
              <Route path={ROUTE.world} component={World} />
            </Switch>
          </ConnectedRouter>
        </Provider>
      </Container>
    </>
  );
}
