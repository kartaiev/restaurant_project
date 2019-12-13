import React from 'react';
import './Home.scss';
import bcVideo from '../assets/video/bcvideo.mp4';

export const Home = () => {
  return (
    <div className="video-wrapper">
      <video id="background-video" loop autoPlay>
        <source src={bcVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
