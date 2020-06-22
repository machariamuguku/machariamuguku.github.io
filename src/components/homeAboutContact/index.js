import React, { useContext } from "react";
import styled from "styled-components";

// context provider
import { MenuContext } from "../menuContext";

// components
import Home from "./home";
import { About } from "./about";
import { Contact } from "./contact";
import { NavigationCircles } from "./navigationCircles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  color: white;
`;

export function HomeAboutContact() {
  const { activeMenu } = useContext(MenuContext);
  return (
    <Container>
      {activeMenu === "Home" && <Home />}
      {activeMenu === "About" && <About />}
      {activeMenu === "Contact" && <Contact />}
      <NavigationCircles />
    </Container>
  );
}
