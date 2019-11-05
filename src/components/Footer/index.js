import React, { useContext, useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Container, SearchForm } from './styles';

import PokemonsContext from '~/contexts/PokemonsContext';
import history from '~/services/History';

export default function Footer() {
  const {
    pokemons: { previousPokemon, nextPokemon },
    setPokemons,
  } = useContext(PokemonsContext);

  const [findPokemon, setFindPokemon] = useState('');

  function searchPokemon(e) {
    e.preventDefault();
    setFindPokemon('');
    history.push(`/${findPokemon}`);
  }

  function showPokemon(pokemonName) {
    setPokemons({
      currentPokemon: pokemonName,
    });

    history.push(`/${pokemonName}`);
  }

  return (
    <Container>
      {!!previousPokemon && (
        <button
          type="button"
          onClick={() => {
            showPokemon(previousPokemon || '');
          }}
        >
          {previousPokemon}
          <FaChevronLeft />
        </button>
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
        <button
          type="button"
          onClick={() => {
            showPokemon(nextPokemon || '');
          }}
        >
          {nextPokemon}
          <FaChevronRight />
        </button>
      )}
    </Container>
  );
}
