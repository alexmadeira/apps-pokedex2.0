import React from 'react';
import { usePokemon } from '~/services/hooks/Pokemon';

export default function Teste() {
  const pokemon = usePokemon(12);
  return <div>{pokemon && pokemon.name}</div>;
}
