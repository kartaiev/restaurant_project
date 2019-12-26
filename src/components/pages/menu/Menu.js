import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import beefSteak from '../../../assets/images/pages/menu.jpg';
import { Toggle } from '../../../utilities';
import {
  Article,
  Image,
  MenuContent,
  Section,
  Subtitle,
  Title
} from '../../../elements';

export const Menu = ({ menuFunc }) => {
  return (
    <Article className="article">
      <Image modifiers="page" src={beefSteak} alt="beef steak with fork" />

      <Section>
        <Title>Menu</Title>
        <Toggle>
          {({ on, toggle }) => <MenuBtns on={on} toggle={toggle} />}
        </Toggle>
        <MenuContent>
          <Subtitle>Appetizers & Salads</Subtitle>
          <ul>{menuFunc('Appetizers & Salads')}</ul>

          <Subtitle>Sides</Subtitle>
          <ul>{menuFunc('Sides')}</ul>

          <Subtitle>Steaks & Chops</Subtitle>
          <ul>{menuFunc('Steaks & Chops')}</ul>

          <Subtitle>Seafood</Subtitle>
          <ul>{menuFunc('Seafood')}</ul>
        </MenuContent>
      </Section>
    </Article>
  );
};
