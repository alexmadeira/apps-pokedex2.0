import styled from 'styled-components';
import { Colors, Spaces, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  align-self: center;
  justify-self: center;
  position: fixed;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
  padding: ${Spaces.BasePadding};
  z-index: 2;
`;

export const RegionName = styled.p`
  margin-bottom: calc(${Spaces.BaseMargin} * 5);
  transform: rotate(-90deg);
  transform-origin: left top;
  font-size: ${Fonts.sizes.Small};
  color: ${Colors.White};
  font-weight: bold;
  span {
    text-transform: capitalize;
  }
`;
