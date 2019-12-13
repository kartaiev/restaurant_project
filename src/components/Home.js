import React from 'react';
import './Home.scss';
import bcVideo from '../assets/video/bcvideo.mp4';
import title from '../assets/images/HS_Logo.png';
import ReactPlayer from 'react-player';

export const Home = () => {
  return (
    <div className="video-wrapper">
      <div className="player-wrapper">
        <ReactPlayer
          playing
          loop
          muted
          url={bcVideo}
          className="react-player"
          width="100%"
          height="100%"
        />
      </div>
      <img className="title" src={title} alt="title" />
    </div>
  );
};
