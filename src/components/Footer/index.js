import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Container, SearchForm } from './styles';

import PokemonsContext from '~/contexts/PokemonsContext';
import history from '~/services/History';

export default function Footer() {
  const {
    pokemons: { previousPokemon, nextPokemon },
  } = useContext(PokemonsContext);

  const [findPokemon, setFindPokemon] = useState('');

  function searchPokemon(e) {
    e.preventDefault();
    setFindPokemon('');
    history.push(`/${findPokemon}`);
  }

  return (
    <Container>
      {!!previousPokemon && (
        <Link to={`/${previousPokemon}`}>
          <a href="/#">
            <FaChevronLeft />
          </a>
        </Link>
      )}
      <SearchForm onSubmit={e => searchPokemon(e)}>
        <input
          value={findPokemon}
          onChange={e => setFindPokemon(e.target.value)}
        />
        <button type="button" onClick={e => searchPokemon(e)}>
          <FaSearch />
        </button>
      </SearchForm>
      {!!nextPokemon && (
        <Link to={`/${nextPokemon}`}>
          <a href="/#">
            <FaChevronRight />
          </a>
        </Link>
      )}
    </Container>
  );
}
