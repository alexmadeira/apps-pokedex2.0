import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from '~/pages/Pokedex';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Pokedex} />
    </Switch>
  );
}
