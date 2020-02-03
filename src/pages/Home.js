import React, { useEffect } from 'react';
import bcVideo from '../assets/video/bcvideo.mp4';
import title from '../assets/images/HS_Logo.png';
import { VideoContainer } from '../elements';

const Home = ({ on, toggle }) => {
  useEffect(() => {
    !on && toggle();
  }, []);

  return (
    <VideoContainer trans={!on && 'slide'} onClick={!on && toggle}>
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
