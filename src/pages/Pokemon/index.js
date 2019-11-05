import React, { useEffect, useState, useCallback, useContext } from 'react';
import analyze from 'rgbaster';
import PropTypes from 'prop-types';

import api from '~/services/Api';
import Header from '~/components/Header';
import Types from '~/components/Types';
import Stats from '~/components/Stats';

import PokemonsImage from '~/assets/pokemons';
import PokemonsContext from '~/contexts/PokemonsContext';

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

function Pokemon() {
  const {
    setPokemons,
    pokemons: { currentPokemon },
  } = useContext(PokemonsContext);

  const [previousPokemonData, setPreviousPokemonData] = useState(false);
  const [currentPokemonData, setCurrentPokemonData] = useState(false);
  const [nextPokemonData, setNextPokemonData] = useState(false);
  const [color, setColor] = useState(false);

  useEffect(() => {
    const getPokemon = async () => {
      const current = await api.get(`pokemon/${currentPokemon}/`);
      const previous =
        current.data.id - 1 > 0
          ? await api.get(`pokemon/${current.data.id - 1}/`)
          : false;
      const next = await api.get(`pokemon/${current.data.id + 1}/`);

      setCurrentPokemonData(current.data || {});
      setPreviousPokemonData(previous.data || {});
      setNextPokemonData(next.data || {});

      setPokemons({
        previousPokemon: previous ? previous.data.name : false,
        currentPokemon: current ? current.data.name : false,
        nextPokemon: next ? next.data.name : false,
      });
    };

    getPokemon();
  }, [currentPokemon, setPokemons]);

  const analisar = useCallback(async () => {
    if (currentPokemonData) {
      const result = await analyze(PokemonsImage[currentPokemonData.name], {
        ignore: [
          'rgb(255,255,255)',
          'rgb(0,0,0)',
          'rgba(0,0,0,1)',
          'rgba(0,0,0,2)',
        ],
      });
      setColor(result[0].color);
    }
  }, [currentPokemonData]);

  useEffect(() => {
    analisar();
  }, [analisar]);

  return (
    <>
      {color && (
        <Container style={{ background: color }}>
          <Header id={currentPokemonData.id} name={currentPokemonData.name} />

          <PageContent>
            <Region>
              <p>Region: Kanto</p>
            </Region>
            <PokemonBox>
              <PokemonList>
                <PreviousPokemon>
                  <HidePokemon src={PokemonsImage[previousPokemonData.name]} />
                </PreviousPokemon>
                <CurrentPokemon>
                  <ShowPokemon src={PokemonsImage[currentPokemonData.name]} />
                </CurrentPokemon>
                <NextPokemon>
                  <HidePokemon src={PokemonsImage[nextPokemonData.name]} />
                </NextPokemon>
              </PokemonList>
            </PokemonBox>
            <PokemonInformationBox>
              <Types typeList={currentPokemonData.types} />
              <Title>Stats:</Title>
              <Stats statsList={currentPokemonData.stats} />
            </PokemonInformationBox>
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
