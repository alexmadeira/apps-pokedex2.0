import styled from 'styled-components';
import { Colors, Spaces, Fonts } from '~/styles/Metrics';

export const Page = styled.div`
  position: relative;
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
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 500px) {
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Region = styled.div`
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
  p {
    margin-bottom: calc(${Spaces.BaseMargin} * 5);
    transform: rotate(-90deg);
    transform-origin: left top;
    font-size: ${Fonts.sizes.Small};
    color: ${Colors.White};
    font-weight: bold;
  }
`;
