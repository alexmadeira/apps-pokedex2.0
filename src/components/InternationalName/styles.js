import styled from 'styled-components';
import { Fonts, Colors } from '~/styles/Metrics';

export const Container = styled.p`
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
