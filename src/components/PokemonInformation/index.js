import React from 'react';

import { usePokemon } from '~/services/hooks/Pokemon';

import Types from '~/components/Types';
import Stats from '~/components/Stats';

import { Container, Title } from './styles';

export default function PokemonInformation() {
  const { types, stats } = usePokemon();

  return (
    <Container>
      <Types typeList={types || []} />
      <Title>Stats:</Title>
      <Stats statsList={stats || []} />
    </Container>
  );
}
