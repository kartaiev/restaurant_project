import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import '../Pages.scss';
import './Menu.scss';
import wine from '../../../assets/images/pages/drinks.jpg';
import { Image, Subtitile, Title } from '../../../elements';

export const Drinks = ({ menuFunc }) => {
  return (
    <article className="article">
      <Image src={wine} alt="beef steak with fork" />

      <section className="article__content">
        <Title>Menu</Title>
        <MenuBtns />
        <div className="article__content-text">
          <Subtitile>Red Wine</Subtitile>
          <ul>{menuFunc('Red Wine')}</ul>

          <Subtitile>White Wines</Subtitile>
          <ul>{menuFunc('White Wine')}</ul>

          <Subtitile>Whisky</Subtitile>
          <ul>{menuFunc('Whisky')}</ul>
        </div>
      </section>
    </article>
  );
};
