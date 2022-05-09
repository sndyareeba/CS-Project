import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-size: 130%;
  }

  html, body {
    overflow-x: hidden;

  }

`;
export default GlobalStyle;
