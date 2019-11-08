import React, { useContext } from 'react';

import PokemonsContext from '~/contexts/PokemonsContext';

import { Container, Title, Id } from './styles';

function Header() {
  const {
    pokemons: { currentPokemonData },
  } = useContext(PokemonsContext);

  const { id, name } = currentPokemonData;
  return (
    <Container>
      <Id>#{`00${id}`.slice(-3)}</Id>
      <Title>{name}</Title>
    </Container>
  );
}

export default Header;
