import React from 'react';
import styled from 'styled-components';
import { above } from '../../../utilities';

export const GoogleMap = () => (
  <Map
    title="map"
    id="gmap_canvas"
    src="https://maps.google.com/maps?q=Holy%20Smoke%20Texas%20Style%20BBQ&t=&z=13&ie=UTF8&iwloc=&output=embed"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
  />
);

const Map = styled.iframe`
  width: 125%;
  min-height: 500px;
  margin-top: 5vh;

  ${above.med`
    width: 100%; 
  `}
`;
