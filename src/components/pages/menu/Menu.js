import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Menu.scss';
import { Drinks } from './Drinks';
import beefSteak from '../../../assets/images/Steak_Rosemary.png';
import { MenuBtns } from '../../layout/MenuBtns';

export const Menu = ({menuDocs}) => {
 
  return (
      <article className="menu">
      <div className="menu__img-wrap">
        <img className="menu__img" src={beefSteak} alt="beef steak with fork" />
      </div>
      <section className="menu__content">
        <h2>Menu</h2>
        <MenuBtns />
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
    
        <Switch>
          <Route
            exact
            path="/menu/drinks"
            render={() => <Drinks menuDocs={menuDocs} />}
          />
        </Switch>
      </article>
  );
};
