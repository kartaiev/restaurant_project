import React from 'react';
import './Gallery.scss';
import steakHouse1 from '../../assets/images/gallery/steak-house-1.jpg';
import steakHouse2 from '../../assets/images/gallery/steak-house-2.jpg';
import steakHouse3 from '../../assets/images/gallery/steak-house-3.jpg';
import steakHouse4 from '../../assets/images/gallery/steak-house-4.jpg';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

export const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery__slide">
        <img src={steakHouse1} alt="" />
      </div>
      <div className="gallery__slide">
        <img src={steakHouse2} alt="" />
      </div>
      <div className="gallery__slide open">
        <img src={steakHouse3} alt="" />
      </div>
      <div className="gallery__slide">
        <img src={steakHouse4} alt="" />
      </div>
      <div className="btns-wrap">
        <button onClick={handleClick}>
          <FiChevronLeft className="arrow" />
        </button>

        <button onClick={handleClick}>
          <FiChevronRight className="arrow" />
        </button>
      </div>
    </div>
  );
};
