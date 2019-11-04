import React, { useEffect, useState, useCallback } from 'react';
import analyze from 'rgbaster';
import PropTypes from 'prop-types';

import api from '~/services/Api';
import Header from '~/components/Header';
import Types from '~/components/Types';
import Stats from '~/components/Stats';

import PokemonsImage from '~/assets/pokemons';

import {
  Container,
  PageContent,
  Region,
  PokemonBox,
  Title,
  PokemonList,
  PreviousPokemon,
  CurrentPokemon,
  NextPokemon,
  HidePokemon,
  ShowPokemon,
  PokemonInformationBox,
} from './styles';

function Pokemon({ match: { params } }) {
  const { slug } = params;
  const [previousPokemon, setPreviousPokemon] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(false);
  const [nextPokemon, setNextPokemon] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      const current = await api.get(`pokemon/${slug}/`);
      setCurrentPokemon(current.data);

      if (current.data.id - 1 > 0) {
        const previous = await api.get(`pokemon/${current.data.id - 1}/`);
        setPreviousPokemon(previous.data || {});
      }
      const next = await api.get(`pokemon/${current.data.id + 1}/`);
      setNextPokemon(next.data);
    };
    getPokemon();
  }, [slug]);

  const analisar = useCallback(async () => {
    if (currentPokemon) {
      const result = await analyze(PokemonsImage[currentPokemon.name], {
        ignore: ['rgb(255,255,255)', 'rgb(0,0,0)'],
        scale: 0.6,
      });
      setColor(result[0].color);
    }
  }, [currentPokemon]);

  useEffect(() => {
    analisar();
  }, [analisar]);

  return (
    <>
      {color && (
        <Container style={{ background: color }}>
          {/* <Header id={30} name={slug} /> */}

          <PageContent>
            <Region>
              <p>Region: Kanto</p>
            </Region>
            {/* <PokemonBox>
              <PokemonList>
                <PreviousPokemon>
                  <HidePokemon src={PokemonsImage[previousPokemon.name]} />
                </PreviousPokemon>
                <CurrentPokemon>
                  <ShowPokemon src={PokemonsImage[currentPokemon.name]} />
                </CurrentPokemon>
                <NextPokemon>
                  <HidePokemon src={PokemonsImage[nextPokemon.name]} />
                </NextPokemon>
              </PokemonList>
            </PokemonBox> */}
            {/* <PokemonInformationBox>
              <Types typeList={currentPokemon.types} />
              <Title>Stats:</Title>
              <Stats statsList={currentPokemon.stats} />
            </PokemonInformationBox> */}
          </PageContent>
        </Container>
      )}
    </>
  );
}

Pokemon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape().isRequired,
  }).isRequired,
};
export default Pokemon;
