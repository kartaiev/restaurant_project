import styled from 'styled-components';
import { easeOut, grey, overlay, red, yellow } from '../utilities';

export const LinkButton = styled.button`
  font-size: 1.5rem;
  color: ${grey};
  border: 1px solid ${grey};
  background: ${overlay};
  ${({ type }) =>
    type === 'active' && `color: ${yellow}; border: 1px solid ${red};`};
  padding: 1vh 0;
  outline: none;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${yellow};
    border: 1px solid ${red};
    cursor: pointer;
    ${easeOut};
  }
`;
