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
