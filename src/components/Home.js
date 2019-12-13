import React from 'react';
import './Home.scss';
import bcVideo from '../assets/video/bcvideo.mp4';
import title from '../assets/images/HS_Logo.png';

export const Home = () => {
  return (
    <div className="video-wrapper">
      <video id="background-video" preload="true" loop autoPlay>
        <source src={bcVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img className="title" src={title} alt="title" />
    </div>
  );
};
