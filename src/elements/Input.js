import styled from 'styled-components';
import { background, grey, red } from '../utilities';

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: ${grey} 1px solid;
  background: ${background};
  height: 5vh;
  color: ${grey};

  &:focus {
    border-bottom: ${red} 1px solid;
  }
`;
