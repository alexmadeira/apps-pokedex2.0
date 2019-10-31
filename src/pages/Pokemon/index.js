import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/Api';
import Title from '~/components/Title';
import Types from '~/components/Types';

import PokemonsImage from '~/assets/pokemons';

import {
  Container,
  PageContent,
  Region,
  PokemonBox,
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

  useEffect(() => {
    const getPokemon = async () => {
      const current = await api.get(`pokemon/${slug}/`);
      const previous = await api.get(`pokemon/${current.data.id - 1}/`);
      const next = await api.get(`pokemon/${current.data.id + 1}/`);

      setCurrentPokemon(current.data);
      setPreviousPokemon(previous.data);
      setNextPokemon(next.data);
    };
    getPokemon();
  }, [slug]);

  return (
    <>
      {currentPokemon && (
        <Container style={{ background: `#${slug}` }}>
          <Title id={30} name={slug} />

          <PageContent>
            <Region>
              <p>Region: Kanto</p>
            </Region>
            <PokemonBox>
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
            </PokemonBox>
            <PokemonInformationBox>
              <Types typeList={currentPokemon.types} />
              {/* <div>
            <div>
              <ul>
                <li>Lorem:LoremLorem</li>
                <li>Lorem:Lorem</li>
                <li>Lorem:LoremLoremLorem</li>
              </ul>
            </div>
          </div> */}
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
