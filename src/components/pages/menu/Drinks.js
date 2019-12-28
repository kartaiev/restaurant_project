import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import wine from '../../../assets/images/pages/drinks.jpg';
import { Article, Image, MenuContent, Section, Title } from '../../../elements';
import Search from '../../layout/Search';

export const Drinks = ({ menuSectionFunc, onChange }) => {
  const typeArr = ['Red Wine', 'White Wine', 'Whisky'];

  return (
    <Article className="article">
      <Image modifiers="page" src={wine} alt="beef steak with fork" />

      <Section>
        <Title>Menu</Title>
        <MenuBtns />
        <Search onChange={onChange} />
        <MenuContent>{menuSectionFunc(typeArr)}</MenuContent>
      </Section>
    </Article>
  );
};
