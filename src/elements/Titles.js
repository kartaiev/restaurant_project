import styled from 'styled-components';
import { above, red, titleFont, yellow } from '../utilities';

export const Title = styled.h2`
  ${titleFont};
  color: ${yellow};
  font-size: 3rem;
  margin-top: -5vh;
  margin-bottom: 5vh;
  ${above.med`
    margin-top: 10vh;
  `};
`;

export const ContactTitle = styled(Title)`
  margin: 5vh;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  display: inline-block;
  position: relative;
  padding-bottom: 1vh;
  margin: 3vh 0 4vh 0;
  text-align: center;

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
