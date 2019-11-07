import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Pokedex from '~/pages/Pokedex';

export default function Routes() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={800} classNames="page">
            <Switch location={location}>
              <Route path="/" exact component={Pokedex} />
              <Route path="/:slug" component={Pokedex} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}
