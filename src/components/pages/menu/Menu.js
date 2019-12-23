import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import '../Pages.scss';
import './Menu.scss';
import beefSteak from '../../../assets/images/pages/menu.jpg';
import { Toggle } from '../../../utilities';

export const Menu = ({ menuFunc }) => {
  return (
    <article className="article">
      <img
        className="article__img"
        src={beefSteak}
        alt="beef steak with fork"
      />

      <section className="article__content">
        <h2>Menu</h2>
        <Toggle>
          {({ on, toggle }) => <MenuBtns on={on} toggle={toggle} />}
        </Toggle>
        <div className="article__content-text">
          <h3>Appetizers & Salads</h3>
          <ul>{menuFunc('Appetizers & Salads')}</ul>

          <h3>Sides</h3>
          <ul>{menuFunc('Sides')}</ul>

          <h3>Steaks & Chops</h3>
          <ul>{menuFunc('Steaks & Chops')}</ul>

          <h3>Seafood</h3>
          <ul>{menuFunc('Seafood')}</ul>
        </div>
      </section>
    </article>
  );
};
