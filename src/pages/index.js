import React from "react";

// context provider
import { MenuContextProvider } from "../components/menuContext";

// global theme and theme provider
import { createGlobalStyle, ThemeProvider } from "styled-components";

// components
import { HomeLayout } from "../components/homeLayout";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 100%;
  font-family: ${(props) => props.theme.fontFamily};
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  background-color: #000000;
}
  body {
    max-width: 100vw;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    color: ${(props) => (props.whiteColor ? "white" : "#f5f5f5")};    
  }
`;

export const IndexPage = () => (
  <MenuContextProvider>
    <ThemeProvider theme={{ fontFamily: "sans-serif" }}>
      <GlobalStyle whiteColor />
      <HomeLayout />
    </ThemeProvider>
  </MenuContextProvider>
);
