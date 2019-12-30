import React from 'react';
// import { IoIosSearch as SearchIcon } from 'react-icons/io';
import { FormTag } from '../../elements';

const Search = ({ onChange, onSubmit, label }) => {
  return (
    <FormTag onSubmit={onSubmit}>
      <input type="search" name="search" required onChange={onChange} />
      <label htmlFor="search">
        <span>{label}</span>
      </label>
    </FormTag>
  );
};

export default Search;
