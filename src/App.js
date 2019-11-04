import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '~/styles/global';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import { PokemonsProvider } from '~/contexts/PokemonsContext';
import Footer from '~/components/Footer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <PokemonsProvider
        value={{
          actualPokemon: {},
        }}
      >
        <Routes />
      </PokemonsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
