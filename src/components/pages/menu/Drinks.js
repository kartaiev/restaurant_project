import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import wine from '../../../assets/images/pages/drinks.jpg';
import { Article, Image, MenuContent, Section, Title } from '../../../elements';
import Search from '../../layout/Search';

const Drinks = ({ drinks, menuSectionFunc, onChange }) => {
  return (
    <Article className="article">
      <Image modifiers="page" src={wine} alt="beef steak with fork" />

      <Section>
        <Title>Menu</Title>
        <MenuBtns />
        <Search onChange={onChange} placeholder="Search drinks" />

        <MenuContent>{menuSectionFunc(drinks)}</MenuContent>
      </Section>
    </Article>
  );
};

export default Drinks;
