import React, { useContext, useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Container, SearchForm } from './styles';

import PokemonsContext from '~/contexts/PokemonsContext';

export default function Footer() {
  const { pokemons, setPokemons } = useContext(PokemonsContext);
  const { find } = pokemons;

  const previous = find - 1;
  const next = find + 1;

  const [findPokemon, setFindPokemon] = useState('');

  function searchPokemon(e) {
    e.preventDefault();
    setPokemons({
      ...pokemons,
      find: findPokemon.toLowerCase(),
    });
  }

  function showPokemon(show) {
    setPokemons({
      ...pokemons,
      find: show,
    });
  }

  return (
    <Container>
      {!!previous && (
        <button
          type="button"
          onClick={() => {
            showPokemon(previous);
          }}
        >
          {previous}
          <FaChevronLeft />
        </button>
      )}
      <SearchForm onSubmit={e => searchPokemon(e)}>
        <input
          value={findPokemon}
          onChange={e => setFindPokemon(e.target.value)}
        />
        <button type="button" onClick={findPokemon && (e => searchPokemon(e))}>
          <FaSearch />
        </button>
      </SearchForm>
      {!!next && (
        <button
          type="button"
          onClick={() => {
            showPokemon(next);
          }}
        >
          {next}
          <FaChevronRight />
        </button>
      )}
    </Container>
  );
}
