import React from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  absolute,
  betweenCenter,
  easeOut,
  fullScreen,
  yellow
} from '../../utilities';
import { loft1, loft2, loft3, loft4, loft5 } from '../../assets/images/gallery';
import { SlideImage } from '../../elements';

const Gallery = () => {
  const pics = [{ loft1 }, { loft2 }, { loft3 }, { loft4 }, { loft5 }];

  return (
    <GalleryTag>
      {pics.map((pic, i) => (
        <Slide key={i}>
          <SlideImage src={Object.values(pic)} alt={`loft-${i + 1}`} />
        </Slide>
      ))}
      <BtnsWrap>
        <IoIosArrowBack />
        <IoIosArrowForward />
      </BtnsWrap>
    </GalleryTag>
  );
};

export default Gallery;

//* Style //
const GalleryTag = styled.section`
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
  position: fixed;

  svg {
    font-size: 3rem;
    opacity: 0.5;

    &:hover {
      opacity: 1;
      color: ${yellow};
      cursor: pointer;
    }
  }
`;
