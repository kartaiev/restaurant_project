import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { grey } from './colors';

const GlobalStyle = createGlobalStyle`

  ${normalize()};
  
  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
 
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
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.1rem;
    overflow: hidden;
    color: ${grey};
    
  }
  
  
  
  a {
    font-size: 1.5rem;
    text-decoration: none;
  }
`;

export default GlobalStyle;
