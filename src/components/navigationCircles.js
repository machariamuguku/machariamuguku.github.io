import React, { useContext } from "react";
import styled from "styled-components";

// context provider
import { MenuContext } from "./menuContext";

// primer github icons
import { CheckCircleFillIcon, CircleIcon } from "@primer/octicons-react";

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
`;
const Item = styled.a`
  flex: 0 0 auto;
  margin-right: 1rem;
  cursor: pointer;
  color: white;
`;

export function NavigationCircles() {
  const { activeMenuAndComponent, dispatchActiveMenuAndComponent } = useContext(
    MenuContext
  );

  // dispatcher
  const dispatchComponent = (payload) => {
    // change active component
    dispatchActiveMenuAndComponent({
      type: "CHANGE_COMPONENT",
      payload: payload
    });
    // change active menu
    dispatchActiveMenuAndComponent({
      type: "CHANGE_MENU",
      payload: payload
    });
  };

  return (
    <Container>
      {["Home", "About", "Contact"].map((item, index) => (
        <Item
          key={index}
          href={`#${item}`}
          onClick={(e) => {
            e.preventDefault();
            dispatchComponent(item);
          }}
        >
          {activeMenuAndComponent.Component === item ? (
            <CheckCircleFillIcon size={16} />
          ) : (
            <CircleIcon size={16} />
          )}
        </Item>
      ))}
    </Container>
  );
}
