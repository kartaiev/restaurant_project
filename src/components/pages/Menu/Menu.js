import React, { useEffect } from 'react';
import { MenuBtns } from './elements/MenuBtns';
import steakOnBoard from '../../../assets/images/pages/menu.jpg';
import { Toggle } from '../../../utilities';
import {
  MenuContent,
  pageImageElement,
  Section,
  Title
} from '../../../elements';
import Search from './elements/Search';
import steakVid from '../../../assets/video/steakVid.mp4';
import { pageVideoElement } from '../../../elements/Video';
import { useWindowWidth } from '../../../hooks/useWindowWidth';

const Menu = ({ food, menuSectionFunc, onChange, clearSearch }) => {
  useEffect(() => {
    clearSearch();
  }, []);

  const imgOrVid =
    useWindowWidth() <= 768
      ? pageImageElement(steakOnBoard)
      : pageVideoElement(steakVid);

  return (
    <>
      {imgOrVid}

      <Section>
        <Title>Menu</Title>
        <Toggle>
          {({ on, toggle }) => (
            <MenuBtns on={on} toggle={toggle} clearSearch={clearSearch} />
          )}
        </Toggle>
        <Search onChange={onChange} placeholder="Search food" />

        <MenuContent>{menuSectionFunc(food)}</MenuContent>
      </Section>
    </>
  );
};

export default Menu;
