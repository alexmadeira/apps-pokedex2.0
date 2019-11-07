import styled from 'styled-components';
import { Spaces, Colors, Fonts } from '~/styles/Metrics';

export const Container = styled.div`
  height: 60%;
  width: 30vw;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 ${Spaces.BasePadding};
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: ${Fonts.sizes.Bigger};
  font-weight: 800;
  margin-bottom: 30px;
  text-shadow: 0 15px 30px ${Colors.DarkShadow};
`;
