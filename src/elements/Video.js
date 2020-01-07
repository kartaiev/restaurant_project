import { VideoContainer } from './Containers';
import React from 'react';

export const videoElement =(vid) => (
  <VideoContainer modifiers='page'>
    <video
      autoPlay
      loop
      muted
      preload="true"
      src={vid}
      className="video-player"
    />
  </VideoContainer>
);