import React, { useContext, useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Container, SearchForm, Nav, Next } from './styles';

import PokemonsContext from '~/contexts/PokemonsContext';

export default function Footer() {
  const { currentPokemon, setCurrentPokemon } = useContext(PokemonsContext);
  const { find, id } = currentPokemon;

  const previous = (find || id) - 1;
  const next = (find || id) + 1;

  const [findPokemon, setFindPokemon] = useState('');

  function searchPokemon(e) {
    e.preventDefault();
    setCurrentPokemon({ ...currentPokemon, find: findPokemon.toLowerCase() });
  }

  function showPokemon(show) {
    setCurrentPokemon({ ...currentPokemon, find: show });
  }

  return (
    <Container>
      <Nav
        className={!previous && 'disabled'}
        type="button"
        onClick={() => {
          showPokemon(previous);
        }}
      >
        <FaChevronLeft />
      </Nav>
      <SearchForm onSubmit={e => searchPokemon(e)}>
        <input
          value={findPokemon}
          onChange={e => setFindPokemon(e.target.value)}
        />
        <button type="button" onClick={findPokemon && (e => searchPokemon(e))}>
          <FaSearch />
        </button>
      </SearchForm>
      <Next
        className={!next && 'disabled'}
        type="button"
        onClick={() => {
          showPokemon(next);
        }}
      >
        <FaChevronRight />
      </Next>
    </Container>
  );
}
