import React from 'react';
import PropTypes from 'prop-types';

import PokemonsImage from '~/assets/pokemons';

import { Container, ShowPokemon } from './styles';

function PokemonImage({ src }) {
  return (
    <Container>
      <ShowPokemon src={PokemonsImage[src]} />
    </Container>
  );
}

PokemonImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default PokemonImage;
