import React, { useContext } from "react";
import styled from "styled-components";

// context provider
import { MenuContext } from "../menuContext";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 4rem;
  cursor: pointer;
  @media (max-width: 48rem) {
    font-size: 3rem;
  }
`;

const navigationItems = ["Home", "About", "Contact"];

export function Carets({ direction }) {
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

  // change dispatch payload linearly
  const changeMenu = (direction) => {
    const indexOfCurrentItem = navigationItems.indexOf(
      activeMenuAndComponent.Component
    );

    // if direction is forward
    if (direction === "Next") {
      // set to index of next item
      // if the next index is equal to the array length
      // set to first index
      if (indexOfCurrentItem + 1 === navigationItems.length) {
        dispatchComponent(navigationItems[0]);
        return;
      }
      dispatchComponent(navigationItems[indexOfCurrentItem + 1]);
      return;
    }
    // set to index of previous item
    // if the previous index is less than zero (first index)
    // set to the biggest index
    if (indexOfCurrentItem - 1 < 0) {
      dispatchComponent(navigationItems[navigationItems.length - 1]);
      return;
    }
    dispatchComponent(navigationItems[indexOfCurrentItem - 1]);
    return;
  };

  return (
    <StyledFontAwesomeIcon
      icon={direction === "left" ? faCaretLeft : faCaretRight}
      size="sm"
      onClick={() => {
        if (direction === "left") {
          changeMenu("Prev");
          return;
        }
        changeMenu("Next");
        return;
      }}
    />
  );
}
