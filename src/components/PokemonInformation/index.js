import React, { useContext } from 'react';

import PokemonsContext from '~/contexts/PokemonsContext';

import Types from '~/components/Types';
import Stats from '~/components/Stats';

import { Container, Title } from './styles';

export default function PokemonInformation() {
  const { currentPokemon } = useContext(PokemonsContext);

  const { types, stats } = currentPokemon;

  return (
    <Container>
      <Types typeList={types} />
      <Title>Stats:</Title>
      <Stats statsList={stats} />
    </Container>
  );
}
