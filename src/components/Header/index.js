import React from 'react';

import { usePokemon } from '~/services/hooks/Pokemon';

import { Container, Title, Id } from './styles';

function Header() {
  const { id, name } = usePokemon();
  return (
    <Container>
      <Id>#{`00${id}`.slice(-3)}</Id>
      <Title>{name}</Title>
    </Container>
  );
}

export default Header;
