import styled from 'styled-components';
import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 5;
  justify-self: flex-end;
  align-self: center;
  justify-content: center;
  width: 100%;
  margin-bottom: ${Spaces.BaseMargin};
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
`;

export const Nav = styled.button`
  border: none;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  font-size: ${Fonts.sizes.Middle};
  color: ${Colors.White};
  text-shadow: 0 0 12px ${Colors.DarkShadow};
  cursor: pointer;
  transform: all 200ms linear;
  &.disabled {
  }
`;

export const Next = styled(Nav)`
  &:hover {
    padding: 0 0 0 5px;
    font-size: calc(${Fonts.sizes.Middle} + 2);
  }
`;
export const Prev = styled(Nav)`
  &:hover {
    padding: 0 5px 0 0;
    font-size: calc(${Fonts.sizes.Middle} + 2);
  }
`;
