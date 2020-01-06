import React from 'react';

import { usePokemon } from '~/services/hooks/Pokemon';

import { Container, RegionName } from './styles';

export default function Region() {
  const { generation } = usePokemon();

  return (
    <Container>
      {generation && (
        <RegionName>
          Region: <span>{generation.main_region.name}</span>
        </RegionName>
      )}
    </Container>
  );
}
