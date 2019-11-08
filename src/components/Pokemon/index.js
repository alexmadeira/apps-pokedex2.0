import React, { useEffect, useState, useContext } from 'react';
import { ChangeBg, FormatImageName } from '~/services/Pokemon';

import Api from '~/services/Api';

import PokemonsImage from '~/assets/pokemons';
import PokemonsContext from '~/contexts/PokemonsContext';

import {
  Container,
  PokemonList,
  CurrentPokemon,
  JpName,
  ShowPokemon,
} from './styles';

export default function Pokemon() {
  const [loadingBg, setLoadingBg] = useState(false);
  const [loadingCurrent, setLoadingCurrentBg] = useState(false);
  const { pokemons, setPokemons } = useContext(PokemonsContext);
  const { find, currentPokemonData } = pokemons;

  useEffect(() => {
    if (loadingCurrent) {
      const changeBgColor = async () => {
        await ChangeBg(PokemonsImage[currentPokemonData.imagFormat]);
        setLoadingBg(true);
      };
      changeBgColor();
    }
  }, [currentPokemonData, loadingCurrent]);

  useEffect(() => {
    const getPokemon = async () => {
      const { id, name } = currentPokemonData;

      if (id !== find && name !== find) {
        setLoadingCurrentBg(false);
        const { data } = await Api.get(`pokemon/${find}/`);
        const {
          data: { names },
        } = await Api.get(`pokemon-species/${find}/`);

        data.imagFormat = FormatImageName(data);
        [, data.jpName] = names;

        setPokemons({ ...pokemons, currentPokemonData: data, find: data.id });
        setLoadingCurrentBg(true);
      }
    };
    getPokemon();
  }, [currentPokemonData, find, loadingCurrent, pokemons, setPokemons]);
  console.tron.log(currentPokemonData);
  return (
    <Container>
      {loadingBg && loadingCurrent && (
        <PokemonList>
          <CurrentPokemon>
            <JpName>{currentPokemonData.jpName.name}</JpName>
            {/* <ShowPokemon src={PokemonsImage[currentPokemonData.imagFormat]} /> */}
          </CurrentPokemon>
        </PokemonList>
      )}
    </Container>
  );
}
