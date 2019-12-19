import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import '../Pages.scss';
import './Menu.scss';
import beefSteak from '../../../assets/images/Steak_Rosemary.png';

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
        <MenuBtns />
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
