import React, { useState, useContext } from 'react';
import { FaSearch } from 'react-icons/fa';

import PokemonsContext from '~/contexts/PokemonsContext';

import { Container } from './styles';

export default function Search() {
  const { currentPokemon, setCurrentPokemon } = useContext(PokemonsContext);
  const [findPokemon, setFindPokemon] = useState('');

  const searchPokemon = e => {
    e.preventDefault();
    setCurrentPokemon({ ...currentPokemon, find: findPokemon.toLowerCase() });
  };

  return (
    <Container onSubmit={e => searchPokemon(e)}>
      <input
        value={findPokemon}
        onChange={e => setFindPokemon(e.target.value)}
      />
      <button type="button" onClick={findPokemon && (e => searchPokemon(e))}>
        <FaSearch />
      </button>
    </Container>
  );
}
