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
    setFindPokemon('');
  };

  return (
    <Container onSubmit={e => handlerPokemon(e)}>
      <input
        value={findPokemon}
        placeholder="Search by Nº or Name"
        onChange={e => setFindPokemon(e.target.value)}
      />
      <button type="button" onClick={e => findPokemon && handlerPokemon(e)}>
        <FaSearch />
      </button>
    </Container>
  );
}
