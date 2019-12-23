import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  
  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
  
  html {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Oswald', sans-serif;
    letter-spacing: 0.1rem;
  }
`;

export default GlobalStyle;
