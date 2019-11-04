import styled from 'styled-components';
import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 5;
  justify-self: flex-end;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${Spaces.BaseMargin};
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-self: center;
  input {
    border-radius: 5px;
    background: ${Colors.LightShadow};
    border: 1px solid ${Colors.DarkShadow};
    padding: calc(${Spaces.BasePadding} / 2);
    font-size: ${Fonts.sizes.Small};
    transition: all 250ms linear;
    font-weight: 600;
    &:focus {
      background: ${Colors.White};
    }
  }
  button {
    margin-left: ${Spaces.BaseMargin};
    border-radius: 5px;
    background: ${Colors.LightShadow};
    border: 1px solid ${Colors.DarkShadow};
    padding: calc(${Spaces.BasePadding} / 2);
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
