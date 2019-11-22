import React from 'react';
import PropTypes from 'prop-types';

import { useShow } from '~/services/hooks/Nav';

import { Container } from './styles';

function Nav({ children, to }) {
  const showPokemon = useShow();
  return (
    <Container
      onClick={() => {
        showPokemon(to);
      }}
    >
      {children}
    </Container>
  );
}

Nav.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()])
    .isRequired,
  to: PropTypes.number.isRequired,
};
export default Nav;
