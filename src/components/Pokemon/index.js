import React from 'react';

import { usePokemon } from '~/services/hooks/Pokemon';

import PokemonImage from '~/components/PokemonImage';
import InternationalName from '~/components/InternationalName';

import { Container, PokemonBox, Sizes } from './styles';

export default function Pokemon() {
  const { specie, height, weight, imagFormat } = usePokemon();
  return (
    <Container>
      <PokemonBox>
        <InternationalName specie={specie} language="ja" />
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
