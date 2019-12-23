import styled from 'styled-components';
import { elevations, grey, overlay, red, yellow } from '../utilities';
import { NavLink } from 'react-router-dom';

export const ButtonLink = styled(NavLink)`
  font-size: 1.5rem;
  color: ${grey};
  border: 1px solid ${grey};
  background: ${overlay};
  ${({ type }) =>
    type === 'active' && `color: ${yellow}; border: 1px solid ${red};`};
  padding: 0.8vh 0;
  outline: none;
  text-align: center;
  text-decoration: none;
  box-shadow: ${elevations[2]};

  &:hover {
    color: ${yellow};
    border: 1px solid ${red};
    cursor: pointer;
  }
`;
