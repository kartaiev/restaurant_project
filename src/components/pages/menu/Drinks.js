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
import Search from '../../layout/Search';
import menuData from '../../../data/menuData';

export const Drinks = ({ menuSectionFunc }) => {
  const typeArr = ['Red Wine', 'White Wine', 'Whisky'];

  return (
    <Article className="article">
      <Image modifiers="page" src={wine} alt="beef steak with fork" />

      <Section>
        <Title>Menu</Title>
        <MenuBtns />
        <Search />
        <MenuContent>{menuSectionFunc(typeArr)}</MenuContent>
      </Section>
    </Article>
  );
};
