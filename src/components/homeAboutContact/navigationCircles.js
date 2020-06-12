import React, { useContext } from "react";
import styled from "styled-components";

// context provider
import { MenuContext } from "../menuContext";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as CircleHighlighted } from "@fortawesome/free-solid-svg-icons";

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
  const { activeMenu, setActiveMenu } = useContext(MenuContext);
  return (
    <Container>
      <Item
        href="#Home"
        onClick={(e) => {
          e.preventDefault();
          setActiveMenu("Home");
        }}
      >
        <FontAwesomeIcon
          icon={activeMenu === "Home" ? CircleHighlighted : faCircle}
          size="1x"
        />
      </Item>
      <Item
        href="#About"
        onClick={(e) => {
          e.preventDefault();
          setActiveMenu("About");
        }}
      >
        <FontAwesomeIcon
          icon={activeMenu === "About" ? CircleHighlighted : faCircle}
          size="1x"
        />
      </Item>
      <Item
        href="#Contact"
        onClick={(e) => {
          e.preventDefault();
          setActiveMenu("Contact");
        }}
      >
        <FontAwesomeIcon
          icon={activeMenu === "Contact" ? CircleHighlighted : faCircle}
          size="1x"
        />
      </Item>
    </Container>
  );
}
