import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '~/styles/global';

import '~/config/ReactotronConfig';

import { PokemonsProvider } from '~/contexts/PokemonsContext';

import Routes from '~/routes';
import Footer from '~/components/Footer';

function App() {
  const [currentPokemon, setCurrentPokemon] = useState({
    find: 1,
    loading: true,
  });

  return (
    <BrowserRouter>
      <GlobalStyle />
      <PokemonsProvider value={{ currentPokemon, setCurrentPokemon }}>
        <Routes />
        <Footer />
      </PokemonsProvider>
    </BrowserRouter>
  );
}

export default App;
