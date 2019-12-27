import React from 'react';
import { IoIosSearch as SearchIcon } from 'react-icons/io';
import { Input } from '../../elements';
import styled from 'styled-components';
import { absolute, grey } from '../../utilities';

const Search = () => {
  return (
    <Form>
      <Input type="text" />
      <SearchIcon />
    </Form>
  );
};

export default Search;

const Form = styled.form`
  width: 100%;
  position: relative;
  height: 5vh;

  svg {
    ${absolute({ xProp: 'right', y: '5%' })};
    height: 100%;
    z-index: 10;
    font-size: 2rem;
    color: ${grey};
  }
`;
