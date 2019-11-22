import React from 'react';
import PropTypes from 'prop-types';

import { Container, StatsList, StatItem } from './styles';

function Stats({ statsList }) {
  return (
    <Container>
      <StatsList>
        {statsList.map(({ base_stat, stat }) => (
          <StatItem key={stat.name}>
            {stat.name.replace('-', ' ')}: {base_stat}
          </StatItem>
        ))}
      </StatsList>
    </Container>
  );
}

Stats.propTypes = {
  statsList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
export default Stats;
