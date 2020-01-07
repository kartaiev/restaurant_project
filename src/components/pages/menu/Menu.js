import React from 'react';
import { MenuBtns } from '../../layout/MenuBtns';
import steakOnBoard from '../../../assets/images/pages/menu.jpg';
import { Toggle } from '../../../utilities';
import { Article, MenuContent, pageImage, Section, Title } from '../../../elements';
import Search from '../../layout/Search';
import steakVid from '../../../assets/video/steakVid.mp4';
import { videoElement } from '../../../elements/Video';
import { useWindowWidth } from '../../../hooks/useWindowWidth';

const Menu = ({ food, menuSectionFunc, onChange }) => {

  const imgOrVid = useWindowWidth() <= 768
    ?
    pageImage(steakOnBoard)
    :
    videoElement(steakVid);


  return (
    <Article>
      {imgOrVid}

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
