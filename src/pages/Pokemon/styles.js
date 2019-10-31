import styled from 'styled-components';
import { Colors, Spaces, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const PageContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Region = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-self: flex-end;
  justify-self: flex-end;
  padding: ${Spaces.BasePadding};
  z-index: 2;
  p {
    margin-bottom: calc(${Spaces.BaseMargin} * 5);
    transform: rotate(-90deg);
    transform-origin: left top;
    font-size: ${Fonts.sizes.small};
    color: ${Colors.White};
    font-weight: bold;
  }
`;

export const PokemonBox = styled.div`
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
  left: -10vw;
`;

export const PreviousPokemon = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CurrentPokemon = styled.li`
  flex: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextPokemon = styled.li`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HidePokemon = styled.img`
  filter: brightness(0);
  opacity: 0.1;
  max-width: 100%;
`;

export const ShowPokemon = styled.img`
  width: 70%;
  opacity: 1;
`;

export const PokemonInformationBox = styled.div`
  height: 60%;
  position: relative;
  padding: 0 ${Spaces.BasePadding};
  &::before {
    content: '';
    background: ${Colors.White};
    height: 100%;
    width: 5px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 5px;
  }
`;
