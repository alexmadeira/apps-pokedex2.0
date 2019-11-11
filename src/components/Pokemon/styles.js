import styled from 'styled-components';
import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  @media (max-width: 500px) {
    position: relative;
    height: initial;
  }
`;

export const PokemonBox = styled.div`
  list-style: none;
  display: flex;
  flex: 1;
  height: 100%;
  width: 85%;
  position: relative;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translate(-50%, 0);
  @media (max-width: 900px) {
    justify-content: flex-start;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const PreviousPokemon = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: calc(${Spaces.BasePadding} * 4);
`;

export const CurrentPokemon = styled.div`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const JpName = styled.p`
  position: absolute;
  transform: translate(-40%, 50%);
  font-size: calc(${Fonts.sizes.Bigger} * 3);
  font-weight: 600;
  word-break: keep-all;
  word-wrap: normal;
  opacity: 0.3;
  color: ${Colors.Balck};
  @media (max-width: 960px) {
    display: none;
  }
`;

export const Sizes = styled.div`
  position: absolute;
  left: 120px;
  bottom: 50px;
  p {
    text-shadow: 0 0 12px ${Colors.DarkShadow};
    color: #ffffff;
    font-size: ${Fonts.sizes.Middle};
    font-weight: 600;
  }
  @media (max-width: 720px) {
    left: initial;
    bottom: initial;
    right: 0px;
    top: 50%;
  }
  @media (max-width: 600px) {
    top: -60px;
  }
  @media (max-width: 400px) {
    display: none;
  }
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
  opacity: 1;
  height: 90vh;
  @media (max-width: 900px) {
    height: initial;
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 80%;
    margin-top: calc(${Spaces.BaseMargin} * 8);
    align-self: flex-start;
  }

  @media (max-width: 500px) {
    margin: 0;
  }
`;
