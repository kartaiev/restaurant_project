import React from 'react';
import { FormTag } from '../../elements';

const Search = ({ onChange, onSubmit, label }) => {
  return (
    <FormTag onSubmit={onSubmit}>
      <div>
        <input
          type="search"
          name="search"
          required
          onChange={onChange}
          autoComplete="off"
        />
        <label htmlFor="search">
          <span>{label}</span>
        </label>
      </div>
    </FormTag>
  );
};

export default Search;
