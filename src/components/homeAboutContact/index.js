import React, { useContext } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

// context provider
import { MenuContext } from "../menuContext";

// components
import { Unified } from "./unified";
import { Home } from "./home";
import { About } from "./about";
import { Contact } from "./contact";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 40vw;
  height: 25vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 48rem) {
    width: 90vw;
    height: 20vh;
  }
`;

export function HomeAboutContact() {
  const { activeMenuAndComponent } = useContext(MenuContext);

  const transitions = useTransition(activeMenuAndComponent.Component, {
    from: {
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      opacity: 0
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <MainContainer>
      {transitions((props, item, key) => (
        <animated.div key={key} style={props}>
          {item === "Home" ? (
            <Unified bracketLeft="{" bracketRight="}">
              <Home />
            </Unified>
          ) : item === "About" ? (
            <Unified bracketLeft="[" bracketRight="]">
              <About />
            </Unified>
          ) : (
            <Unified bracketLeft="(" bracketRight=")">
              <Contact />
            </Unified>
          )}
        </animated.div>
      ))}
    </MainContainer>
  );
}
