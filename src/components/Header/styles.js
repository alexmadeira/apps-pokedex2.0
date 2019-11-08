import styled from 'styled-components';
import { Colors, Fonts, Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  z-index: 2;
  position: relative;
  margin-left: calc(${Spaces.BaseMargin} * 4);
  margin-top: calc(${Spaces.BaseMargin} * 2);
`;

export const Id = styled.p`
  color: ${Colors.White};
  font-size: ${Fonts.sizes.Middle};
  font-weight: 800;
  text-shadow: 0 0 12px ${Colors.DarkShadow};
`;

export const Title = styled.h1`
  color: ${Colors.White};
  font-size: ${Fonts.sizes.Bigger};
  font-weight: 800;
  text-shadow: 0 0 12px ${Colors.DarkShadow};
`;
