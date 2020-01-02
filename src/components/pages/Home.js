import React from 'react';
import bcVideo from '../../assets/video/bcvideo.mp4';
import title from '../../assets/images/HS_Logo.png';
import styled from 'styled-components';
import {
  absolute,
  elementToCenter,
  fullScreen,
  overlay
} from '../../utilities';

const Home = () => {
  return (
    <VideoContainer className="video-wrapper">
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

//* Style //
const VideoContainer = styled.div`
  ${fullScreen};
  position: relative;

  &::after {
    ${fullScreen};
    ${absolute()};
    background-color: ${overlay};
    content: '';
  }

  img {
    width: 45%;
    ${elementToCenter};
    z-index: 5;
  }

  video {
    ${fullScreen};
    min-width: 100%;
    min-height: auto;
    object-fit: cover;
  }
`;
