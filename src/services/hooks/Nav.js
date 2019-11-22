import { useContext } from 'react';

import PokemonsContext from '~/contexts/PokemonsContext';

export const useShow = () => {
  const { currentPokemon, setCurrentPokemon } = useContext(PokemonsContext);
  return show => {
    console.tron.log('show', show);
    setCurrentPokemon({ ...currentPokemon, find: show });
  };
};
