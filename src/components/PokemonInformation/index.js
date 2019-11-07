import React, { useContext } from 'react';

import PokemonsContext from '~/contexts/PokemonsContext';

import Types from '~/components/Types';
import Stats from '~/components/Stats';

import { Container, Title } from './styles';

export default function PokemonInformation() {
  const {
    pokemons: { currentPokemonData },
  } = useContext(PokemonsContext);

  const { types, stats } = currentPokemonData;

  return (
    <Container>
      <Types typeList={types} />
      <Title>Stats:</Title>
      <Stats statsList={stats} />
    </Container>
  );
}
