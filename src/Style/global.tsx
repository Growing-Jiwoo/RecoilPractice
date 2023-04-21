import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
  }

  .carousel {
    position: relative;
    margin: 0 auto;
    width: 100%;
  }
`;
export default GlobalStyle;
