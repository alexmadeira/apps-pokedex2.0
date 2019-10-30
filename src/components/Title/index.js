import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

function Title({ id, name }) {
  return (
    <Container>
      <p>#{`00${id}`.slice(-3)}</p>
      <h1>{name}</h1>
    </Container>
  );
}

Title.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
export default Title;
