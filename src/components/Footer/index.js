import React, { useContext, useState } from 'react';
import { FaSearch, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Container, SearchForm } from './styles';

import Nav from '~/components/Nav';

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

  return (
    <Container>
      <Nav to={previous}>
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
      <Nav to={next}>
        <FaChevronRight />
      </Nav>
    </Container>
  );
}
