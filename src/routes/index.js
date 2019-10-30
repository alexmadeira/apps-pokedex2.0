import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokemon from '~/pages/Pokemon';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Pokemon} />
      <Route path="/:slug" component={Pokemon} />
    </Switch>
  );
}
