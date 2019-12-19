import React from 'react';
import wine from '../../../assets/images/wine.png';
import { MenuBtns } from '../../layout/MenuBtns';
import './Menu.scss';

export const Drinks = ({ menuFunc }) => {
  return (
    <article className="menu">
      <div className="menu__img-wrap">
        <img className="menu__img" src={wine} alt="beef steak with fork" />
      </div>
      <section className="menu__content">
        <h2>Menu</h2>
        <MenuBtns />
        <div className="menu__content-text">
          <h3>Red Wines</h3>
          <ul>{menuFunc('Red Wines')}</ul>

          <h3>White Wines</h3>
          <ul>{menuFunc('White Wines')}</ul>

          <h3>Whisky</h3>
          <ul>{menuFunc('Whisky')}</ul>
        </div>
      </section>
    </article>
  );
};
