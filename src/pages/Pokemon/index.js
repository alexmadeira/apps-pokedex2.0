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
  Page,
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

  function formatImageName(pokemonData) {
    if (!pokemonData) return '';
    const { id, name } = pokemonData;
    const formartId = `00${id}`.slice(-3);
    const [formatName] = name.split('-');
    const imageName = formartId + formatName;
    return imageName;
  }

  useEffect(() => {
    const getPokemon = async () => {
      const current = await api.get(`pokemon/${currentPokemon}/`);
      const previous =
        current.data.id - 1 > 0
          ? await api.get(`pokemon/${current.data.id - 1}/`)
          : {};
      const next = await api.get(`pokemon/${current.data.id + 1}/`);

      const currentImageName = formatImageName(current.data);
      const previousImageName = formatImageName(previous.data);
      const nextImageName = formatImageName(next.data);

      current.data = { ...current.data, imageName: currentImageName };
      previous.data = { ...previous.data, imageName: previousImageName };
      next.data = { ...next.data, imageName: nextImageName };

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
      const { imageName } = currentPokemonData;

      const result = await analyze(PokemonsImage[imageName], {
        ignore: [
          'rgb(255,255,255)',
          'rgb(0,0,0)',
          'rgba(0,0,0,1)',
          'rgba(0,0,0,2)',
        ],
      });
      document.getElementById('root').style.background = result[0].color;
      setColor(result[0].color);
    }
  }, [currentPokemonData]);

  useEffect(() => {
    analisar();
  }, [analisar]);
  return (
    <Page>
      {color && (
        <Container>
          <Header id={currentPokemonData.id} name={currentPokemonData.name} />

          <PageContent>
            <Region>
              <p>Region: Kanto</p>
            </Region>
            <PokemonBox>
              <PokemonList>
                <PreviousPokemon>
                  <HidePokemon
                    src={PokemonsImage[previousPokemonData.imageName]}
                  />
                </PreviousPokemon>
                <CurrentPokemon>
                  <ShowPokemon
                    src={PokemonsImage[currentPokemonData.imageName]}
                  />
                </CurrentPokemon>
                <NextPokemon>
                  <HidePokemon src={PokemonsImage[nextPokemonData.imageName]} />
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
    </Page>
  );
}

Pokemon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape().isRequired,
  }).isRequired,
};
export default Pokemon;
