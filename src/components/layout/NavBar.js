import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  absolute,
  betweenStart,
  centerCenter,
  easeOut,
  fixed,
  fullScreen,
  grey,
  overlay,
  red,
  yellow
} from '../../utilities';

export const NavBar = ({ on, toggle }) => {
  const pages = ['About', 'Gallery', 'Menu', 'Reserve', 'Contact'];
  return (
    <Nav trans={!on ? 'slide' : ''}>
      <ul>
        {pages.map((page, index) => (
          <li key={index} trans={!on ? 'slide' : ''}>
            <NavLink to={`/${page.toLowerCase()}`} onClick={toggle}>
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

//* Style //
const Nav = styled.nav`
  ${fullScreen};
  ${centerCenter()};
  ${fixed};
  background: ${overlay};
  backdrop-filter: blur(8px);
  ${easeOut};
  transform: translateY(-110%);
  z-index: 25;
  ${({ trans }) => trans === 'slide' && `transform: translateY(0); ${easeOut}`}

  ul {
    width: 70%;
    height: 45vh;
    ${betweenStart({ fd: 'column' })};
    list-style: none;

    li {
      position: relative;
      padding-bottom: 5px;
      transform: translateX(-600px);
      ${({ trans }) =>
        trans === 'slide' && `transform: translateX(0); ${easeOut}`};  
      
       &::after {
        width: 7rem;
        height: 1px;
        display: block;
        ${absolute({ yProp: 'bottom' })};
        background: ${grey};
        content: '';
      }
      
      &:nth-child(1) {
      transition-delay: .1s;
      }
      
      &:nth-child(2) {
      transition-delay: .2s;
      }
      
      &:nth-child(3) {
      transition-delay: .3s;
      }
      
      &:nth-child(4) {
      transition-delay: .4s;
      }  
      
      &:nth-child(5) {
      transition-delay: .5s;
      }  
      
      a {
        color: ${yellow};
        ${easeOut};
        
         &:hover {
          color: ${red};
      }
    }
  }  
`;
