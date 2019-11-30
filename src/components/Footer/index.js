import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { usePokemon } from '~/services/hooks/Pokemon';

import { Container } from './styles';

import Nav from '~/components/Nav';
import Search from '~/components/Search';

export default function Footer() {
  const { id } = usePokemon();

  return (
    <Container>
      <Nav to={id - 1}>
        <FaChevronLeft />
      </Nav>
      <Search />
      <Nav to={id + 1}>
        <FaChevronRight />
      </Nav>
    </Container>
  );
}
