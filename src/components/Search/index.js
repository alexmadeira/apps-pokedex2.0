import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import { useFindPokemon } from '~/services/hooks/Pokemon';

import { Container } from './styles';

export default function Search() {
  const [findPokemon, setFindPokemon] = useState('');
  const searchPokemon = useFindPokemon();

  const handlerPokemon = e => {
    e.preventDefault();
    searchPokemon(findPokemon);
  };

  return (
    <Container onSubmit={e => handlerPokemon(e)}>
      <input
        value={findPokemon}
        onChange={e => setFindPokemon(e.target.value)}
      />
      <button type="button" onClick={e => handlerPokemon(e)}>
        <FaSearch />
      </button>
    </Container>
  );
}
