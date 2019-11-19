import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from '~/pages/Pokedex';
import Teste from '~/pages/Teste';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Pokedex} />
      <Route path="/teste" component={Teste} />
    </Switch>
  );
}
