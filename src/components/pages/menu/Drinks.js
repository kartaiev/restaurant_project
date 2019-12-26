import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import wine from '../../../assets/images/pages/drinks.jpg';
import {
  Article,
  Image,
  MenuContent,
  Section,
  Subtitle,
  Title
} from '../../../elements';

export const Drinks = ({ menuFunc }) => {
  return (
    <Article className="article">
      <Image modifiers="page" src={wine} alt="beef steak with fork" />

      <Section>
        <Title>Menu</Title>
        <MenuBtns />
        <MenuContent>
          <Subtitle>Red Wine</Subtitle>
          <ul>{menuFunc('Red Wine')}</ul>

          <Subtitle>White Wines</Subtitle>
          <ul>{menuFunc('White Wine')}</ul>

          <Subtitle>Whisky</Subtitle>
          <ul>{menuFunc('Whisky')}</ul>
        </MenuContent>
      </Section>
    </Article>
  );
};
