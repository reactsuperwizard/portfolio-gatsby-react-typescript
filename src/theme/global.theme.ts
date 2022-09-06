import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body, html{
    /* width: 100vw; */
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Manrope', sans-serif;
  }

  body {
    .tl-edges {
      overflow-x: unset;
    }
  }
  

  html { 
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5, h6, p, a {
    padding: 0;
    margin: 0;
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
  }
`;
