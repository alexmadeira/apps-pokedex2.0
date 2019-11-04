import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Container, SearchForm } from './styles';

import PokemonsContext from '~/contexts/PokemonsContext';

export default function Footer() {
  const { actualPokemon } = useContext(PokemonsContext);

  return (
    <Container>
      <Link to="#s">
        <a href="/#">
          <FaChevronLeft />
        </a>
      </Link>
      <SearchForm>
        <input />
        <button type="button">
          <FaSearch />
        </button>
      </SearchForm>

      <Link to="#s">
        <a href="/#">
          <FaChevronRight />
        </a>
      </Link>
    </Container>
  );
}
