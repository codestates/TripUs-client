import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
    min-height: 100vh;
    min-width: 500px;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  #root {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  .root-wrapper {
    height: 100%;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
