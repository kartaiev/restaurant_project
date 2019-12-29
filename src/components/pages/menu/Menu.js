import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import beefSteak from '../../../assets/images/pages/menu1.jpg';
import { Toggle } from '../../../utilities';
import { Article, Image, MenuContent, Section, Title } from '../../../elements';
import Search from '../../layout/Search';

export const Menu = ({ food, menuSectionFunc, onChange }) => {
  return (
    <Article>
      <Image modifiers="page" src={beefSteak} alt="beef steak with fork" />

      <Section>
        <Title>Menu</Title>
        <Toggle>
          {({ on, toggle }) => <MenuBtns on={on} toggle={toggle} />}
        </Toggle>
        <Search onChange={onChange} placeholder="search food" />
        <MenuContent>{menuSectionFunc(food)}</MenuContent>
      </Section>
    </Article>
  );
};
