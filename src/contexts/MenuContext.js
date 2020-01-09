// import React, { createContext, useEffect, useState } from 'react';
// import menuData from '../data/menuData';
// import { Subtitle } from '../elements';
//
// export const MenuContext = createContext();
//
// export const MenuProvider = ({ children }) => {
//   //* Initial menu data state
//   const [menu, setMenu] = useState();
//
//   //* Get menu data from JSON and update data state
//   useEffect(() => {
//     return setMenu(menuData);
//   }, []);
//
//   //* Search input state //
//   const [search, setSearch] = useState('');
//
//   //* Filtered menu according to search input //
//   const menuSearch = menu.filter(item =>
//     item.dish.toLowerCase().includes(search.toLowerCase())
//   );
//
//   //* Filtered food
//   const foodUnfiltered = menuSearch
//     .filter(item => item.category === 'food')
//     .map(item => item.type);
//
//   const food = foodUnfiltered.filter(
//     (item, i) => foodUnfiltered.indexOf(item) >= i
//   );
//
//   //* Filtered drinks
//   const drinksUnfiltered = menuSearch
//     .filter(item => item.category === 'drinks')
//     .map(item => item.type);
//
//   const drinks = drinksUnfiltered.filter(
//     (item, i) => drinksUnfiltered.indexOf(item) >= i
//   );
//
//   //* List of menu items according to type func //
//   const menuListFunc = type => {
//     return menuSearch
//       .filter(item => item.type === type)
//       .map(item => (
//         <li key={item.id}>
//           <div>{item.dish}</div>
//           <div>{item.price}</div>
//         </li>
//       ));
//   };
//
//   //* Menu sections with a list of menu items func //
//   const menuSectionFunc = category => {
//     return category.map((type, i) => (
//       <div key={i}>
//         <Subtitle>{type}</Subtitle>
//         <ul>{menuListFunc(type)}</ul>
//       </div>
//     ));
//   };
//
//   const handleSearch = e => setSearch(e.target.value);
//
//   return <div>
//     <MenuContext.Provider value={handleSearch}>
//
//     </MenuContext.Provider>
//   </div>;
// };
