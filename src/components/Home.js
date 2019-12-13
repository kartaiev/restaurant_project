import React from 'react';
import './Home.scss';
import bcVideo from '../assets/video/bcvideo.mp4';
import title from '../assets/images/HS_Logo.png';

export const Home = () => {
  return (
    <div className="video-wrapper">
      <video
        autoPlay
        loop
        muted
        preload="true"
        src={bcVideo}
        className="video-player"
      />
      <img className="title" src={title} alt="title" />
    </div>
  );
};
