import React from 'react';

import { usePokemon } from '~/services/hooks/Pokemon';

import PokemonImage from '~/components/PokemonImage';

import { Container, PokemonBox, JpName, Sizes } from './styles';

export default function Pokemon() {
  const { specie, height, weight, imagFormat, loading } = usePokemon();

  if (!loading) {
    return <p>Carregando...</p>;
  }

  const [, jpName] = specie.names;

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
        <PokemonImage src={imagFormat} />
      </PokemonBox>
      )
    </Container>
  );
}
