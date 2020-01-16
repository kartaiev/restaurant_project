import React, { useState } from 'react';
import { Gallery as Gall, GalleryImage } from 'react-gesture-gallery';
import { pics1 } from '../assets/images/gallery';

const Gallery = () => {
  const [index, setIndex] = useState(0);

  return (
    <Gall
      style={{
        width: '100%',
        height: '100vh'
      }}
      index={index}
      onRequestChange={i => {
        setIndex(i);
      }}
    >
      {pics1.map(pic => (
        <GalleryImage objectFit="cover" src={pic} alt="pic" />
      ))}
    </Gall>
  );
};

export default Gallery;
