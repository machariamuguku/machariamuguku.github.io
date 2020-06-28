import React, { useReducer, createContext } from "react";

export const MenuContext = createContext();

export function MenuContextProvider({ children }) {
  const initialState = {
    Menu: "Home",
    Component: "Home"
  };

  function menuReducer(state, action) {
    switch (action.type) {
      case "CHANGE_MENU":
        return { ...state, Menu: action.payload };
      case "CHANGE_COMPONENT":
        return { ...state, Component: action.payload };
      default:
        throw new Error("dispatched wrong action type");
    }
  }

  const [activeMenuAndComponent, dispatchActiveMenuAndComponent] = useReducer(
    menuReducer,
    initialState
  );

  return (
    <MenuContext.Provider
      value={{ activeMenuAndComponent, dispatchActiveMenuAndComponent }}
    >
      {children}
    </MenuContext.Provider>
  );
}
