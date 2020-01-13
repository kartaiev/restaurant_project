import React from 'react';
import { MenuBtns } from './elements/MenuBtns';
import wine from '../../../assets/images/pages/drinks.jpg';
import {
  MenuContent,
  pageImageElement,
  Section,
  Title
} from '../../../elements';
import Search from './elements/Search';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import { pageVideoElement } from '../../../elements/Video';
import wineVid from '../../../assets/video/wineVid.mp4';

const Drinks = ({ drinks, menuSectionFunc, onChange }) => {
  const imgOrVid =
    useWindowWidth() <= 768
      ? pageImageElement(wine)
      : pageVideoElement(wineVid);

  return (
    <>
      {imgOrVid}

      <Section>
        <Title>Menu</Title>
        <MenuBtns />
        <Search onChange={onChange} placeholder="Search drinks" />

        <MenuContent>{menuSectionFunc(drinks)}</MenuContent>
      </Section>
    </>
  );
};

export default Drinks;
