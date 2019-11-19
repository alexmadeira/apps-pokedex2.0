import React from 'react';

import { usePokemon } from '~/services/hooks/Pokemon';
import { changeBG } from '~/services/hooks/Background';

import PokemonsImage from '~/assets/pokemons';

import { Container, PokemonBox, JpName, Sizes, ShowPokemon } from './styles';

export default function Pokemon() {
  const pokemon = usePokemon();

  if (!pokemon) {
    return <p>Carregando...</p>;
  }

  const { specie, height, weight, imagFormat } = pokemon;
  const [, jpName] = specie.names;

  changeBG(imagFormat);

  return (
    <Container>
      <PokemonBox>
        <JpName>{jpName.name}</JpName>
        <Sizes>
          <p>
            Height: <strong>{height / 10} M</strong>
          </p>
          <p>
            Weigth: <strong>{weight / 10} kg</strong>
          </p>
        </Sizes>
        <ShowPokemon src={PokemonsImage[imagFormat]} />
      </PokemonBox>
      )
    </Container>
  );
}
