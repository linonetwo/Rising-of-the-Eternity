import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider, useDispatch } from 'react-redux';

import './preload.type';
import { store, history, Dispatch } from './redux';
import GlobalStyle from './globalStyles';

import ROUTE from './constants/route';
import Welcome from './pages/Welcome';
import Sandbox from './pages/Sandbox';
import World from './pages/World';

import { startGameLoop } from './ecs';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export function App(): JSX.Element {
  // load mods
  const dispatch = useDispatch<Dispatch>();
  useEffect(() => {
    void dispatch.mod.loadModList().then(() => dispatch.mod.initializeMods());
  }, []);
  // start ECS
  useEffect(() => {
    startGameLoop();
  }, []);

  return (
    <Switch>
      <Route exact path={ROUTE.welcome} component={Welcome} />
      <Route exact path={ROUTE.sandbox} component={Sandbox} />
      <Route path={ROUTE.world} component={World} />
    </Switch>
  );
}

export function AppWithProvider(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>
      </Container>
    </>
  );
}
