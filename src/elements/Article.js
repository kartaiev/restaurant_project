import styled from 'styled-components';
import { background, fullScreen, startCenter } from '../utilities';

export const Article = styled.article`
  ${fullScreen};
  ${startCenter({ fd: 'column' })};
  position: relative;
  background: ${background};
  overflow-x: hidden;
  overflow-y: scroll;
`;
