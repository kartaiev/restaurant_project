import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  above,
  absolute,
  background,
  betweenStart,
  centerCenter,
  easeOut,
  fixed,
  fullScreen,
  grey,
  overlay,
  red,
  yellow
} from '../utilities';

const NavBar = ({ on, toggle }) => {
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

export default NavBar;

//* Style //
const Nav = styled.nav`
  ${fullScreen};
  ${centerCenter()};
  ${fixed({ xProp: 'right' })};
  background: ${overlay};
  backdrop-filter: blur(8px);
  ${easeOut};
  z-index: 25;
  visibility: hidden;
  transform: translateY(-110%);
  ${({ trans }) =>
    trans === 'slide' &&
    `transform: translateY(0); ${easeOut}; visibility: visible`};
  ${above.med`
    width: 40%;
    background: ${background};
    border-left: 1px solid ${yellow};
    transform: translateX(100%);
    ${({ trans }) => trans === 'slide' && `transform: translateX(0)`};
  `}
  
  ul {
    width: 70%;
    height: 45vh;
    ${betweenStart({ fd: 'column' })};
    list-style: none;

    li {
      position: relative;
      padding-bottom: 5px;
      transform: translateX(-600px);
      visibility: hidden;
      ${({ trans }) =>
        trans === 'slide' &&
        `transform: translateX(0); ${easeOut}; visibility: visible`};
      ${above.med`
        transform: translateX(300px);
        ${easeOut};
        ${({ trans }) => trans === 'slide' && `transform: translateX(0)`};
      `};
   
      
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
