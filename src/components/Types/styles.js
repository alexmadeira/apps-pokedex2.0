import styled from 'styled-components';
import { Spaces, Colors } from '~/styles/Metrics';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;
export const TypesList = styled.ul`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  list-style: none;
`;
export const Type = styled.li`
  img {
    width: 64px;
    height: 64px;
    padding: calc(${Spaces.BasePadding} / 1.5);
    background: linear-gradient(
      to bottom,
      ${Colors.White} 0%,
      ${Colors.Light} 100%
    );
    border-radius: 50%;
    box-shadow: 0 20px 25px -10px ${Colors.DarkShadow};
    margin: 0 ${Spaces.BaseMargin} ${Spaces.BaseMargin} 0;
  }
`;
