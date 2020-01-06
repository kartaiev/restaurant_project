import React from 'react';
import bcVideo from '../../assets/video/bcvideo.mp4';
import title from '../../assets/images/HS_Logo.png';
import styled from 'styled-components';
import {
  above,
  absolute,
  easeOut,
  elementToCenter,
  fullScreen,
  overlay
} from '../../utilities';

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

//* Style //
const VideoContainer = styled.div`
  ${fullScreen};
  float: left;
  position: relative;
  ${easeOut};
  ${above.med`
    ${({ trans }) => trans === 'slide' && `width: 60%; ${easeOut}; float: left`}
  `};

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
