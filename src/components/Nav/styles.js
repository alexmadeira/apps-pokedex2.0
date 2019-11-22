import styled from 'styled-components';
import { Fonts, Colors } from '~/styles/Metrics';

export const Container = styled.button`
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

// export const Next = styled(Nav)`
//   &:hover {
//     padding: 0 0 0 5px;
//     font-size: calc(${Fonts.sizes.Middle} + 2);
//   }
// `;
// export const Prev = styled(Nav)`
//   &:hover {
//     padding: 0 5px 0 0;
//     font-size: calc(${Fonts.sizes.Middle} + 2);
//   }
// `;
