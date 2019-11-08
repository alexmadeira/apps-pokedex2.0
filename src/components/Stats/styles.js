import styled from 'styled-components';
import { Colors, Spaces } from '~/styles/Metrics';

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-left: ${Spaces.BasePadding};
  &::before {
    content: '';
    height: 100%;
    width: 4px;
    border-radius: 2px;
    background: linear-gradient(
      to bottom,
      ${Colors.White} 0%,
      ${Colors.LightShadow} 100%
    );
    position: absolute;
    left: 0;
    top: 0;
  }
`;

export const StatsList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
`;

export const StatItem = styled.li`
  background: linear-gradient(
    to bottom,
    ${Colors.White} 0%,
    ${Colors.Light} 100%
  );
  padding: calc(${Spaces.BasePadding} / 2) ${Spaces.BasePadding};
  margin-top: 0;
  margin-bottom: 14px;
  margin-right: 10px;
  color: ${Colors.Black};
  font-weight: 800;
  letter-spacing: 1px;
  border-radius: 8px;
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  box-shadow: 0 20px 25px -10px ${Colors.DarkShadow};
`;
