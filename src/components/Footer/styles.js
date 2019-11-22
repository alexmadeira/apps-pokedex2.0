import styled from 'styled-components';
import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  z-index: 5;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: ${Spaces.BasePadding};

  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-self: center;
  margin: 0 calc(${Spaces.BaseMargin} * 8);
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
  @media (max-width: 600px) {
    margin: 0;
  }
`;
