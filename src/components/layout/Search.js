import React, { useState } from 'react';
// import { IoIosSearch as SearchIcon } from 'react-icons/io';
import { Button, Input } from '../../elements';
import styled from 'styled-components';
import { absolute, betweenCenter, grey } from '../../utilities';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <Form>
      <Input
        type="search"
        placeholder="search menu"
        onChange={e => setSearch(e.target.value)}
      />
      <Button modifiers="big">
        <span>Search</span>
      </Button>
    </Form>
  );
};

export default Search;

const Form = styled.form`
  width: 100%;
  ${betweenCenter({ fd: 'column' })};
  position: relative;
  height: 15vh;
  margin-bottom: 5vh;

  svg {
    ${absolute({ xProp: 'right', y: '5%' })};
    height: 100%;
    z-index: 10;
    font-size: 2rem;
    color: ${grey};
  }
`;
