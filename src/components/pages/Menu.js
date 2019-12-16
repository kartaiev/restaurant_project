import React, { useEffect, useState } from 'react';
import fb from '../../config/fbConfig';
import './Menu.scss';
import beefSteak from '../../assets/images/Steak_Rosemary.png';

export const Menu = () => {
  const [menuState, setMenuState] = useState({
    menuDocs: []
  });

  const { menuDocs } = menuState;

  useEffect(() => {
    fb.collection('menu')
      .get()
      .then(snapshot =>
        snapshot.docs.map(docsItem => {
          let menuArr = menuDocs;
          menuArr.push(docsItem);
          return setMenuState({
            menuDocs: menuArr
          });
        })
      );
  }, []);

  return (
    <article className="menu">
      <div className="menu__img-wrap">
        <img className="menu__img" src={beefSteak} alt="beef steak with fork" />
        */}
      </div>
      <section className="menu__content">
        <h2>Menu</h2>

        <div className="menu__content-text">
          <h3>Appetizers & Salads</h3>
          <ul>
            {menuDocs.map(menuDoc => {
              if (menuDoc.data().type === 'Appetizers & Salads') {
                return (
                  <li key={menuDoc.id}>
                    <div>{menuDoc.data().dish}</div>
                    <div>{menuDoc.data().price}</div>
                  </li>
                );
              }
            })}
          </ul>
          <br />
          <br />
          <h3>Sides</h3>
          <ul>
            {menuDocs.map(menuDoc => {
              if (menuDoc.data().type === 'Sides') {
                return (
                  <li key={menuDoc.id}>
                    <div>{menuDoc.data().dish}</div>
                    <div>{menuDoc.data().price}</div>
                  </li>
                );
              }
            })}
          </ul>
          <br />
          <br />
          <h3>Steaks & Chops</h3>
          <ul>
            {menuDocs.map(menuDoc => {
              if (menuDoc.data().type === 'Steaks & Chops') {
                return (
                  <li key={menuDoc.id}>
                    <div>{menuDoc.data().dish}</div>
                    <div>{menuDoc.data().price}</div>
                  </li>
                );
              }
            })}
          </ul>
          <br />
          <br />
          <h3>Seafood</h3>
          <ul>
            {menuDocs.map(menuDoc => {
              if (menuDoc.data().type === 'Seafood') {
                return (
                  <li key={menuDoc.id}>
                    <div>{menuDoc.data().dish}</div>
                    <div>{menuDoc.data().price}</div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <br />
        <br />
      </section>
    </article>
  );
};
