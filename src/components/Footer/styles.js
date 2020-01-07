import styled from 'styled-components';
import { Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  z-index: 5;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${Spaces.BasePadding} 0;
  background: #333333;
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;
export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: #fff;
  a {
    color: #a1d7f0;
    border-bottom: 1px solid #a1d7f0;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
