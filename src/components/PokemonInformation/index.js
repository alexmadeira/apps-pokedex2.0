import React from 'react';

import Types from '~/components/Types';
import Stats from '~/components/Stats';

import { Container, Title } from './styles';

export default function PokemonInformation() {
  return (
    <Container>
      <Types typeList={[]} />
      <Title>Stats:</Title>
      <Stats statsList={[]} />
    </Container>
  );
}
