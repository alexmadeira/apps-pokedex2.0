import { useState, useEffect, useContext } from 'react';

import PokemonsContext from '~/contexts/PokemonsContext';

export const useLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const {
    currentPokemon: { loading },
  } = useContext(PokemonsContext);

  useEffect(() => {
    setLoaded(!loading);
  }, [loading]);

  return loaded;
};
