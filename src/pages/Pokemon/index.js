import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Pokemon({ match: { params } }) {
  const { slug } = params;

  return <Container>{slug}</Container>;
}

Pokemon.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape().isRequired,
  }).isRequired,
};
export default Pokemon;
