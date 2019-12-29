import styled from 'styled-components';
import { red, titleFont, yellow } from '../utilities';

export const Title = styled.h2`
  ${titleFont};
  color: ${yellow};
  font-size: 3rem;
  margin: 5vh;
`;

export const ContactTitle = styled(Title)`
  margin: 15vh 0 0 0;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  display: inline-block;
  position: relative;
  padding-bottom: 1vh;
  margin: 3vh 0 4vh 0;

  &::after {
    width: 100%;
    height: 1px;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    background: ${red};
    content: '';
  }
`;
