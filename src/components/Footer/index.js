import React, { useContext } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Container } from './styles';

import Nav from '~/components/Nav';
import Search from '~/components/Search';

import PokemonsContext from '~/contexts/PokemonsContext';

export default function Footer() {
  const {
    currentPokemon: { find, id },
  } = useContext(PokemonsContext);

  const previous = (find || id) - 1;
  const next = (find || id) + 1;

  return (
    <Container>
      <Nav to={previous}>
        <FaChevronLeft />
      </Nav>
      <Search />
      <Nav to={next}>
        <FaChevronRight />
      </Nav>
    </Container>
  );
}
