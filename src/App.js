import React, { useEffect, useState } from 'react';
import menuData from './data/menuData';
import GlobalStyle from './utilities/Global';
import { Subtitle } from './elements';
import { AuthProvider } from './contexts/AuthContext';
import HomeRoute from './routes/HomeRoute';
import Routes from './routes/Routes';

const App = () => {
  //* Initial menu data state
  const [data, setData] = useState({
    menu: []
  });

  const { menu } = data;

  //* Get menu data from JSON and update data state
  useEffect(() => {
    return setData({ menu: menuData });
  }, []);

  //* Search input state //
  const [search, setSearch] = useState('');

  //* Filtered menu according to search input //
  const filteredMenu = menu.filter(item =>
    item.dish.toLowerCase().includes(search.toLowerCase())
  );

  //* Filtered food
  const foodUnfiltered = filteredMenu
    .filter(item => item.category === 'food')
    .map(item => item.type);

  const food = foodUnfiltered.filter(
    (item, i) => foodUnfiltered.indexOf(item) >= i
  );

  //* Filtered drinks
  const drinksUnfiltered = filteredMenu
    .filter(item => item.category === 'drinks')
    .map(item => item.type);

  const drinks = drinksUnfiltered.filter(
    (item, i) => drinksUnfiltered.indexOf(item) >= i
  );

  //* List of menu items according to type func //
  const menuListFunc = type => {
    return filteredMenu
      .filter(item => item.type === type)
      .map(item => (
        <li key={item.id}>
          <div>{item.dish}</div>
          <div>{item.price}</div>
        </li>
      ));
  };

  //* Menu sections with a list of menu items func //
  const menuSectionFunc = category => {
    return category.map((type, i) => (
      <div key={i}>
        <Subtitle>{type}</Subtitle>
        <ul>{menuListFunc(type)}</ul>
      </div>
    ));
  };



  return (
    <AuthProvider>
      <>
        <HomeRoute />
        <GlobalStyle />
        <Routes
          drinks={drinks}
          food={food}
          menuSectionFunc={menuSectionFunc}
          handleSearch={e => setSearch(e.target.value)}
        />
      </>
    </AuthProvider>
  );
};

export default App;
