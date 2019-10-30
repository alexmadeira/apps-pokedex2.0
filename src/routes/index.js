import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Pokemon from '~/pages/Pokemon';

export default function Routes() {
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={500} classNames="page">
            <Switch location={location}>
              <Route path="/" exact component={Pokemon} />
              <Route path="/:slug" component={Pokemon} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}
