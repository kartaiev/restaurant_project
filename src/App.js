import React, { useState } from 'react';
import menuData from './data/menuData';
import GlobalStyle from './utilities/Global';
import { Subtitle } from './elements';
import { AuthProvider } from './contexts/AuthContext';
import {
  ContactRoute,
  GalleryRoute,
  HomeRoute,
  LoginRoute,
  MenuRoutes,
  ReserveRoute,
  TablesRoute
} from './routes';

const App = () => {
  //* Search input state //
  const [search, setSearch] = useState('');

  //* Filtered Menu according to search input //
  const menuSearchResult = menuData.filter(
    item =>
      item.dish.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase())
  );

  //* Clear search func //
  const clearSearch = () => {
    setSearch('');
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

  return (
    <>
      <HomeRoute />
      <GalleryRoute />
      <AuthProvider>
        <ReserveRoute />
        <TablesRoute />
        <LoginRoute />
      </AuthProvider>
      <ContactRoute />
      <MenuRoutes
        clearSearch={clearSearch}
        drinks={drinks}
        food={food}
        menuSectionFunc={menuSectionFunc}
        handleSearch={e => setSearch(e.target.value)}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
