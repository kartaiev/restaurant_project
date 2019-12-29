import React from 'react';
// import { IoIosSearch as SearchIcon } from 'react-icons/io';
import { Input } from '../../elements';
import styled from 'styled-components';
import { absolute, grey } from '../../utilities';

const Search = ({ onChange, onSubmit, placeholder }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="search" placeholder={placeholder} onChange={onChange} />
    </Form>
  );
};

export default Search;

const Form = styled.form`
  width: 100%;
  position: relative;
  height: 7vh;

  svg {
    ${absolute({ xProp: 'right', y: '5%' })};
    height: 100%;
    z-index: 10;
    font-size: 2rem;
    color: ${grey};
  }
`;
