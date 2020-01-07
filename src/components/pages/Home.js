import React from 'react';
import bcVideo from '../../assets/video/bcvideo.mp4';
import title from '../../assets/images/HS_Logo.png';
import { VideoContainer } from '../../elements';

const Home = ({ on }) => {
  return (
    <VideoContainer trans={!on && 'slide'}>
      <video
        autoPlay
        loop
        muted
        preload="true"
        src={bcVideo}
        className="video-player"
      />
      <img className="title" src={title} alt="title" />
    </VideoContainer>
  );
};

export default Home;


