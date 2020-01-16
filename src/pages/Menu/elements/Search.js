import React from 'react';
import { InputWrap, StyledForm } from '../../../elements';

const Search = ({ onChange, onSubmit, placeholder }) => {
  return (
    <StyledForm modifiers="menu" onSubmit={onSubmit}>
      <InputWrap>
        <input
          type="search"
          name="search"
          required
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        <span />
      </InputWrap>
    </StyledForm>
  );
};

export default Search;
