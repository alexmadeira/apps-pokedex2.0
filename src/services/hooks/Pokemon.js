import { useState, useEffect, useContext } from 'react';
import { findPokemon } from '~/services/Pokemons';
import { FormatImageName } from '~/services/Utils';

import PokemonsContext from '~/contexts/PokemonsContext';

export const usePokemon = identify => {
  const [pokemon, setPokemon] = useState();
  const {
    currentPokemon: { find },
    setCurrentPokemon,
  } = useContext(PokemonsContext);
  useEffect(() => {
    const loadingPokemon = async () => {
      const finder = identify || find;
      const data = await findPokemon(finder);
      data.imagFormat = FormatImageName(data);

      setPokemon(data);
      setCurrentPokemon(data);
    };

    loadingPokemon();
  }, [find, identify, setCurrentPokemon]);

  return pokemon;
};
