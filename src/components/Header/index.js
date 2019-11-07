import React, { useContext } from 'react';

import PokemonsContext from '~/contexts/PokemonsContext';

import { Container } from './styles';

function Header() {
  const {
    pokemons: { currentPokemonData },
  } = useContext(PokemonsContext);

  const { id, name } = currentPokemonData;
  return (
    <Container>
      <p>#{`00${id}`.slice(-3)}</p>
      <h1>{name}</h1>
    </Container>
  );
}

export default Header;
