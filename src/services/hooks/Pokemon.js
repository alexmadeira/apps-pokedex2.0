import { useState, useEffect, useContext } from 'react';
import { findPokemon } from '~/services/Pokemons';
import { FormatImageName } from '~/services/Utils';

import PokemonsContext from '~/contexts/PokemonsContext';

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState();
  const {
    currentPokemon: { find },
    setCurrentPokemon,
  } = useContext(PokemonsContext);

  useEffect(() => {
    if (find) {
      const loadingPokemon = async () => {
        const data = await findPokemon(find);

        data.imagFormat = FormatImageName(data);

        setPokemon(data);
        setCurrentPokemon(data);
      };

      loadingPokemon();
    }
  }, [find, setCurrentPokemon]);

  return pokemon;
};
