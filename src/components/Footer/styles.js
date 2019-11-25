import styled from 'styled-components';
import { Spaces } from '~/styles/Metrics';

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
