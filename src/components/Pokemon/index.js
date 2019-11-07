import React, { useEffect, useState, useContext } from 'react';
import { ChangeBg } from '~/services/Pokemon';

import PokemonsImage from '~/assets/pokemons';
import PokemonsContext from '~/contexts/PokemonsContext';

import {
  Container,
  PokemonList,
  PreviousPokemon,
  HidePokemon,
  CurrentPokemon,
  ShowPokemon,
  NextPokemon,
} from './styles';

export default function Pokemon() {
  const [loadiBg, setLoadiBg] = useState(false);
  const { pokemons, setPokemons } = useContext(PokemonsContext);

  useEffect(() => {
    const changeBgColor = async () => {
      await ChangeBg(PokemonsImage['805stakataka']);
      setLoadiBg(true);
    };
    changeBgColor();
  }, []);
  console.tron.log(pokemons);
  return (
    <Container>
      {loadiBg && (
        <PokemonList>
          <PreviousPokemon>
            <HidePokemon src={PokemonsImage['001bulbasaur']} />
          </PreviousPokemon>
          <CurrentPokemon>
            <ShowPokemon src={PokemonsImage['001bulbasaur']} />
          </CurrentPokemon>
          <NextPokemon>
            <HidePokemon src={PokemonsImage['001bulbasaur']} />
          </NextPokemon>
        </PokemonList>
      )}
    </Container>
  );
}
