import styled from 'styled-components';
import { Colors, Spaces, Fonts } from '~/styles/Metrics';

export const Page = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
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
    font-size: ${Fonts.sizes.Small};
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

export const Title = styled.h2`
  color: #ffffff;
  font-size: ${Fonts.sizes.Bigger};
  font-weight: 800;
  margin-bottom: 30px;
  text-shadow: 0 15px 30px ${Colors.DarkShadow};
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
  width: 70%;
  opacity: 1;
`;

export const PokemonInformationBox = styled.div`
  height: 60%;
  width: 30vw;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 ${Spaces.BasePadding};
`;
