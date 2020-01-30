import styled from 'styled-components';
import {
  centerCenter,
  easeOut,
  grey,
  red,
  yellow
} from '../../../../utilities';

export const PaginationNav = styled.nav`
  width: 100%;
  height: 5vh;
  ${centerCenter};
  margin-top: 3vh;

  ul {
    width: 85%;
    height: 100%;
    list-style: none;
    ${centerCenter};

    li {
      margin: 10px;
      ${easeOut}

      &:hover {
        cursor: pointer;
      }

      a {
        text-decoration: none;
        width: 100%;
        height: 100%;
        border: 1px solid ${grey};
        padding: 3px 8px;
        font-size: 1rem;
        color: ${grey};
        ${easeOut}

        &:hover {
          border: 1px solid ${red};
          color: ${yellow};
        }
      }
    }
  }
`;
