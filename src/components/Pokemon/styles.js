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
