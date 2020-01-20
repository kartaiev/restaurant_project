import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { background, grey } from './colors';

const GlobalStyle = createGlobalStyle`

  ${normalize()};
  
  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
 @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
 @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
 
  font-face {
    font-family: 'Sanchez', serif;
    url('../assets/fonts/Sanchezregular.otf') format('opentype');
}

  * {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    
  }
  
  body {
    font-family: 'Lato', sans-serif;
    line-height: 1.3;
    overflow: hidden;
    color: ${grey};
    background: ${background};
  }
  
  a {
    font-size: 1.5rem;
    text-decoration: none;
  }
  
  // input:-webkit-autofill, 
  // input:-webkit-autofill:hover,
  // input:-webkit-autofill:focus,
  // input:-webkit-autofill:active {
  // -webkit-box-shadow: 0 0 0 30px white inset !important;
  // }
`;

export default GlobalStyle;
