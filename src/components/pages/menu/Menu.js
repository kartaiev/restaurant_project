import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import '../Pages.scss';
import './Menu.scss';
import beefSteak from '../../../assets/images/pages/menu.jpg';
import { Toggle } from '../../../utilities';
import { Image, Subtitile, Title } from '../../../elements';

export const Menu = ({ menuFunc }) => {
  return (
    <article className="article">
      <Image src={beefSteak} alt="beef steak with fork" />

      <section className="article__content">
        <Title>Menu</Title>
        <Toggle>
          {({ on, toggle }) => <MenuBtns on={on} toggle={toggle} />}
        </Toggle>
        <div className="article__content-text">
          <Subtitile>Appetizers & Salads</Subtitile>
          <ul>{menuFunc('Appetizers & Salads')}</ul>

          <Subtitile>Sides</Subtitile>
          <ul>{menuFunc('Sides')}</ul>

          <Subtitile>Steaks & Chops</Subtitile>
          <ul>{menuFunc('Steaks & Chops')}</ul>

          <Subtitile>Seafood</Subtitile>
          <ul>{menuFunc('Seafood')}</ul>
        </div>
      </section>
    </article>
  );
};
