import React, { useState, createContext } from "react";

export const MenuContext = createContext();

export function MenuContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState("Home");
  return (
    <MenuContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
