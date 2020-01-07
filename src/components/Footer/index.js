import React from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { usePokemon } from '~/services/hooks/Pokemon';

import { Container, Text, SearchBox } from './styles';

import Nav from '~/components/Nav';
import Search from '~/components/Search';

export default function Footer() {
  const { id } = usePokemon();

  return (
    <Container>
      <Text>
        <p>
          <a href="/#">Alex Madeira</a> Feito pela mão direita de um canhoto :)
        </p>
      </Text>
      <SearchBox>
        <Nav to={id - 1}>
          <FaChevronLeft />
        </Nav>
        <Search />
        <Nav to={id + 1}>
          <FaChevronRight />
        </Nav>
      </SearchBox>
    </Container>
  );
}
