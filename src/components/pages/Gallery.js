import React from 'react';
import styled from 'styled-components';
import { absolute, easeOut, fullScreen } from '../../utilities';
import { loft1, loft2, loft3, loft4 } from '../../assets/images/gallery';
import { SlideImage } from '../../elements';

const Gallery = () => {
  return (
    <GalleryTag>
      <Slide>
        <SlideImage src={loft1} alt="loft-1" />
      </Slide>
      <Slide>
        <SlideImage src={loft2} alt="loft-2" />
      </Slide>
      <Slide>
        <SlideImage src={loft3} alt="loft-3" />
      </Slide>
      <Slide>
        <SlideImage src={loft4} alt="loft-4" />
      </Slide>
    </GalleryTag>
  );
};

export default Gallery;

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
