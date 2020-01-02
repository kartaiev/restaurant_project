import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import beefSteak from '../../../assets/images/pages/menu.jpg';
import { Toggle } from '../../../utilities';
import { Article, Image, MenuContent, Section, Title } from '../../../elements';
import Search from '../../layout/Search';

const Menu = ({ food, menuSectionFunc, onChange }) => {
  return (
    <Article>
      <Image modifiers="page" src={beefSteak} alt="beef steak with fork" />

      <Section>
        <Title>Menu</Title>
        <Toggle>
          {({ on, toggle }) => <MenuBtns on={on} toggle={toggle} />}
        </Toggle>
        <Search onChange={onChange} placeholder="Search food" />
        <MenuContent>{menuSectionFunc(food)}</MenuContent>
      </Section>
    </Article>
  );
};

export default Menu;
