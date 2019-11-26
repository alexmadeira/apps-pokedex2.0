import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { usePokemon } from '~/services/hooks/Pokemon';

import { Container } from './styles';

import Nav from '~/components/Nav';
import Search from '~/components/Search';

export default function Footer() {
  const { id } = usePokemon();

  const previous = id - 1;
  const next = id + 1;

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
