import { useState, useEffect, useContext } from 'react';
import { findPokemon } from '~/services/Pokemons';
import { FormatImageName } from '~/services/Utils';

import PokemonsContext from '~/contexts/PokemonsContext';

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const {
    currentPokemon: { find, loading },
    setCurrentPokemon,
  } = useContext(PokemonsContext);

  useEffect(() => {
    if (loading) {
      const loadingPokemon = async () => {
        const data = await findPokemon(find);

        data.imagFormat = FormatImageName(data);

        setPokemon({ ...data, loading });
        setCurrentPokemon(data);
      };

      loadingPokemon();
    }
  }, [find, loading, setCurrentPokemon]);

  return pokemon;
};

export const useFindPokemon = () => {
  const { currentPokemon, setCurrentPokemon } = useContext(PokemonsContext);

  return find => {
    setCurrentPokemon({
      ...currentPokemon,
      find: find.toLowerCase(),
      loading: true,
    });
  };
};
