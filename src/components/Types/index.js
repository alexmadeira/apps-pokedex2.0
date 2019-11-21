import React from 'react';
import PropTypes from 'prop-types';

import TypesImage from '~/assets/types';

import { Container, TypesList, Type } from './styles';

function Types({ typeList }) {
  return (
    <Container>
      <TypesList>
        {typeList.map(({ type }) => (
          <Type key={type.name}>
            <img src={TypesImage[type.name]} alt={type.name} />
          </Type>
        ))}
      </TypesList>
    </Container>
  );
}

Types.propTypes = {
  typeList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Types;
