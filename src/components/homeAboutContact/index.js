import React, { useContext } from "react";

// context provider
import { MenuContext } from "../menuContext";

// stylesheet
import styles from "./index.module.css";

// components
import Home from "./home";
import { About } from "./about";
import { Contact } from "./contact";
import { NavigationCircles } from "./navigationCircles";

export default function HomeAboutContact() {
  const { activeMenu } = useContext(MenuContext);
  return (
    <div className={styles.container}>
      {activeMenu === "Home" && <Home />}
      {activeMenu === "About" && <About />}
      {activeMenu === "Contact" && <Contact />}
      <NavigationCircles />
    </div>
  );
}
