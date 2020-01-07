import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import wine from '../../../assets/images/pages/drinks.jpg';
import { Article, MenuContent, pageImage, Section, Title } from '../../../elements';
import Search from '../../layout/Search';
import { useWindowWidth } from '../../../hooks/useWindowWidth';
import { videoElement } from '../../../elements/Video';
import wineVid from '../../../assets/video/wineVid.mp4';

const Drinks = ({ drinks, menuSectionFunc, onChange }) => {

  const imgOrVid = useWindowWidth() <= 768
    ?
    pageImage(wine)
    :
    videoElement(wineVid);

  return (
    <Article className="article">
      {imgOrVid}

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
