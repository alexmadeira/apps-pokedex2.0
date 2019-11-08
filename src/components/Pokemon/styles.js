import styled from 'styled-components';
import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const PokemonList = styled.ul`
  list-style: none;
  display: flex;
  flex: 1;
  height: 100%;
  width: 90vw;
  position: relative;
`;

export const PreviousPokemon = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: calc(${Spaces.BasePadding} * 4);
`;

export const CurrentPokemon = styled.li`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const JpName = styled.p`
  position: absolute;
  transform: translate(-40%, 10%);
  font-size: calc(${Fonts.sizes.Bigger} * 3);
  font-weight: 600;
  word-break: keep-all;
  word-wrap: normal;
  opacity: 0.3;
  color: ${Colors.Balck};
`;

export const NextPokemon = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: calc(${Spaces.BasePadding} * 4);
`;

export const HidePokemon = styled.img`
  filter: brightness(0);
  opacity: 0.1;
  max-width: 100%;
`;

export const ShowPokemon = styled.img`
  height: 90vh;
  opacity: 1;
`;
