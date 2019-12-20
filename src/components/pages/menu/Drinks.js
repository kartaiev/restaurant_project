import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import '../Pages.scss';
import './Menu.scss';
import wine from '../../../assets/images/pages/drinks.jpg';

export const Drinks = ({ menuFunc }) => {
  return (
    <article className="article">
      <img className="article__img" src={wine} alt="beef steak with fork" />

      <section className="article__content">
        <h2>Menu</h2>
        <MenuBtns />
        <div className="article__content-text">
          <h3>Red Wine</h3>
          <ul>{menuFunc('Red Wine')}</ul>

          <h3>White Wines</h3>
          <ul>{menuFunc('White Wine')}</ul>

          <h3>Whisky</h3>
          <ul>{menuFunc('Whisky')}</ul>
        </div>
      </section>
    </article>
  );
};
