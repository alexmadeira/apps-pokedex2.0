import React from 'react';

import Header from '~/components/Header';
import Pokemon from '~/components/Pokemon';
import PokemonInformation from '~/components/PokemonInformation';

import { Page, Container, PageContent, Region } from './styles';

function Pokedex() {
  return (
    <Page>
      <Container>
        <Header id={1} name="asdasd" />
        <PageContent>
          <Region>
            <p>Region: Kanto</p>
          </Region>
          <Pokemon />
          {/* <PokemonInformation /> */}
        </PageContent>
      </Container>
    </Page>
  );
}

export default Pokedex;
