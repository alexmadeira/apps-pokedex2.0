import styled from 'styled-components';
import { Spaces } from '~/styles/Metrics';

export const Container = styled.div``;

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
