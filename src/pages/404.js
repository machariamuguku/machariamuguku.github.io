import React from "react";

// global theme and theme provider
import { createGlobalStyle } from "styled-components";

// context provider
import { MenuContextProvider } from "../components/menuContext";
import { FourOhFourLayout } from "../components/fourOhFourLayout";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 100%;
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: #000000;
}
  body {
    max-width: 100vw;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    color: "white";    
  }
`;

const FourOhFour = () => (
  <MenuContextProvider>
    <GlobalStyle />
    <FourOhFourLayout />
  </MenuContextProvider>
);

export default FourOhFour;
