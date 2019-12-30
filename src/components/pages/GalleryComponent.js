import React, { useState } from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { pics1 } from '../../assets/images/gallery';

const GalleryComponent = () => {
  const [index, setIndex] = useState(0);

  return (
    <Gallery
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
    </Gallery>
  );
};

export default GalleryComponent;

