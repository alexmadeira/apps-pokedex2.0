import React from 'react';

import Header from '~/components/Header';
import Pokemon from '~/components/Pokemon';
import PokemonInformation from '~/components/PokemonInformation';
import Region from '~/components/Region';

import { Page, Container, PageContent } from './styles';

function Pokedex() {
  return (
    <Page>
      <Container>
        <Header />
        <PageContent>
          <Region />
          <Pokemon />
          <PokemonInformation />
        </PageContent>
      </Container>
    </Page>
  );
}

export default Pokedex;
