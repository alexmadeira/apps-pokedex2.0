import React from 'react';
import PropTypes from 'prop-types';

import TypesImage from '~/assets/types';

import { Container, TypesList, Type } from './styles';

function Types({ typeList }) {
  return (
    <Container>
      <TypesList>
        {typeList.map(({ type }) => (
          <Type>
            <img src={TypesImage[type.name]} alt={type.name} />
          </Type>
        ))}
      </TypesList>
    </Container>
  );
}

Types.propTypes = {
  typeList: PropTypes.shape().isRequired,
};

export default Types;
