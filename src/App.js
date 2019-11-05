import React, { useState } from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from '~/styles/global';
import history from '~/services/History';

import '~/config/ReactotronConfig';

import { PokemonsProvider } from '~/contexts/PokemonsContext';

import Routes from '~/routes';
import Footer from '~/components/Footer';

function App() {
  const slug = history.location.pathname.replace('/', '');

  const [pokemons, setPokemons] = useState({
    previousPokemon: false,
    currentPokemon: slug || 'bulbasaur',
    nextPokemon: false,
  });

  return (
    <Router history={history}>
      <GlobalStyle />
      <PokemonsProvider value={{ pokemons, setPokemons }}>
        <Routes />
        <Footer />
      </PokemonsProvider>
    </Router>
  );
}

export default App;
