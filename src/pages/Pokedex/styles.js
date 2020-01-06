import styled from 'styled-components';

export const Page = styled.div`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  flex: 1;
`;
export const Container = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;

  @media (max-width: 500px) {
    position: relative;
  }
`;

export const PageContent = styled.div`
  flex: 1;

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
    height: initial;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
