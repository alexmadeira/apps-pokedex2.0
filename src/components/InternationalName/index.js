import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const filterNames = (names, langue) => {
  const [nameList] = names.filter(name => {
    const langueName = name.language.name;
    return langueName === langue && name;
  });

  return nameList || { name: '' };
};

function InternationalName({ specie: { names }, language }) {
  const { name } = filterNames(names, language);

  return <Container>{name}</Container>;
}

InternationalName.defaultProps = { specie: { names: [] } };

InternationalName.propTypes = {
  specie: PropTypes.shape(),
  language: PropTypes.string.isRequired,
};

export default InternationalName;
