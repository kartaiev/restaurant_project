import React, { createContext, useState } from 'react';
import menuData from '../data/menuData';
import { Subtitle } from '../elements';

export const MenuContext = createContext(undefined, undefined);

export const MenuProvider = ({ children }) => {
  //* Search input state //
  const [search, setSearch] = useState('');

  //* Getting search input func //
  const handleSearch = e => setSearch(e.target.value);

  //* Clear search func //
  const clearSearch = () => {
    setSearch('');
  };

  //* Filtered Menu according to search input //
  const menuSearchResult = menuData.filter(item =>
    item.dish.toLowerCase().includes(search.toLowerCase())
  );

  //* List of Menu items according to type func //
  const menuListFunc = type => {
    return menuSearchResult
      .filter(item => item.type === type)
      .map(item => (
        <li key={item.id}>
          <div>{item.dish}</div>
          <div>{item.price}</div>
        </li>
      ));
  };

  //* Menu sections with a list of Menu items func //
  const menuSectionFunc = category => {
    return category.map((type, i) => (
      <div key={i}>
        <Subtitle>{type}</Subtitle>
        <ul>{menuListFunc(type)}</ul>
      </div>
    ));
  };

  //* Removes duplicates food types //
  const foodUnfiltered = menuSearchResult
    .filter(item => item.category === 'food')
    .map(item => item.type);
  const food = [...new Set(foodUnfiltered)];

  //* Removes duplicates drinks types //
  const drinksUnfiltered = menuSearchResult
    .filter(item => item.category === 'drinks')
    .map(item => item.type);
  const drinks = [...new Set(drinksUnfiltered)];

  return (
    <MenuContext.Provider
      value={{ menuSectionFunc, clearSearch, food, drinks, handleSearch }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContext;
