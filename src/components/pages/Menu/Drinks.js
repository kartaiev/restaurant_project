import React, { useContext, useEffect } from 'react';
import { MenuBtns } from './elements/MenuBtns';
import wine from '../../../assets/images/pages/drinks.jpg';
import { MenuContent, pageImageElement, Section, Title } from '../../../elements';
import Search from './elements/Search';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import { pageVideoElement } from '../../../elements/Video';
import wineVid from '../../../assets/video/wineVid.mp4';
import MenuContext from '../../../contexts/MenuContext';

const Drinks = () => {
  const { drinks, menuSectionFunc, clearSearch, handleSearch } = useContext(
    MenuContext
  );

  useEffect(() => {
    clearSearch();
  }, []);

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
        <Search onChange={handleSearch} placeholder="Search drinks" />

        <MenuContent>{menuSectionFunc(drinks)}</MenuContent>
      </Section>
    </>
  );
};

export default Drinks;
