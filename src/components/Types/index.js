import React from 'react';

import TypesImage from '~/assets/types';

import { Container, TypesList, Type } from './styles';

export default function Types({ typeList }) {
  return (
    <Container>
      {typeList.map(({ type }) => (
        <TypesList>
          <Type>
            <img src={TypesImage[type.name]} alt={type.name} />
          </Type>
        </TypesList>
      ))}
    </Container>
  );
}
