import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '~/styles/global';

import '~/config/ReactotronConfig';

import { PokemonsProvider } from '~/contexts/PokemonsContext';

import Routes from '~/routes';
import Footer from '~/components/Footer';

function App() {
  const [pokemons, setPokemons] = useState({
    find: 1,
    previousPokemonData: {},
    currentPokemonData: { types: [], stats: [] },
    nextPokemonData: {},
  });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <PokemonsProvider value={{ pokemons, setPokemons }}>
        <Routes />
        <Footer />
      </PokemonsProvider>
    </BrowserRouter>
  );
}

export default App;
