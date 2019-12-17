import React, { useEffect, useState } from 'react';
import fb from '../../../config/fbConfig';
import { Food } from './Food';
import './Menu.scss';


export const Menu = () => {
  const [menuState, setMenuState] = useState({
    menuDocs: []
  });

  const { menuDocs } = menuState;

  //*Fetching Data//
  useEffect(async () => {
    const snapshot = await fb.collection('menu').get();
    setMenuState({ menuDocs: snapshot.docs, });
  }, []);

  return (
    <Food menuDocs={menuDocs}/>
  );
};
