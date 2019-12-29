import React, { useState } from 'react';
import styled from 'styled-components';
import {
  IoIosArrowBack as Back,
  IoIosArrowForward as Forward
} from 'react-icons/io';

import {
  absolute,
  betweenCenter,
  easeOut,
  fullScreen,
  yellow
} from '../../utilities';
import { loft1, loft2, loft3, loft4, loft5 } from '../../assets/images/gallery';
import { Image } from '../../elements';

const Gallery = () => {
  const pics = [{ loft1 }, { loft2 }, { loft3 }, { loft4 }, { loft5 }];

  const [imageNum, setImageNum] = useState({
    num: 0
  });

  const { num } = imageNum;

  const forward = () => {
    if (num < pics.length - 1) {
      setImageNum({ num: num + 1 });
      console.log(num);
    } else {
      setImageNum({ num: 0 });
    }
  };

  const back = () => {
    if (num > 0) {
      setImageNum({ num: num - 1 });
      console.log(num);
    } else {
      setImageNum({ num: pics.length - 1 });
    }
  };

  return (
    <GalleryWrap>
      <Slide>
        <Image
          modifiers="slide"
          src={Object.values(pics[num])}
          alt={`loft-${num}`}
        />
      </Slide>
      <BtnsWrap>
        <Back onClick={back} />
        <Forward onClick={forward} />
      </BtnsWrap>
    </GalleryWrap>
  );
};

export default Gallery;

//* Style //
const GalleryWrap = styled.section`
  ${fullScreen};
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  ${fullScreen};
  ${absolute}
  ${easeOut};
`;

const BtnsWrap = styled.div`
  ${fullScreen};
  ${betweenCenter};

  svg {
    font-size: 3rem;
    opacity: 0.5;
    z-index: 20;

    &:hover {
      opacity: 1;
      color: ${yellow};
    }
  }
`;
