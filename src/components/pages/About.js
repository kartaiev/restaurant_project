import React from 'react';
import './About.scss';
import standingSteak from '../../assets/images/steak-2.jpg';

export const About = () => {
  return (
    <article className="about">
      <div className="about__img-wrap">
        <img className="about__img" src={standingSteak} alt="standing steak" />
        <h1 className="about__title">About</h1>
      </div>
    </article>
  );
};
