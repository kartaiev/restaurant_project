import React from 'react';
import { StyledForm } from '../../elements';

const Search = ({ onChange, onSubmit, placeholder }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <div>
        <input
          type="search"
          name="search"
          required
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        <span />
      </div>
    </StyledForm>
  );
};

export default Search;
