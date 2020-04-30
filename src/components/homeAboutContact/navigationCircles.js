import React, { useContext } from "react";
import styles from "./navigationCircles.module.css";

// context provider
import { MenuContext } from "../menuContext";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as CircleHighlighted } from "@fortawesome/free-solid-svg-icons";

export function NavigationCircles() {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);
  return (
    <div className={styles.container}>
      <a
        href="#Home"
        className={styles.item}
        onClick={(e) => {
          e.preventDefault();
          setActiveMenu("Home");
        }}
      >
        <FontAwesomeIcon
          icon={activeMenu === "Home" ? CircleHighlighted : faCircle}
          size="lg"
        />
      </a>
      <a
        href="#About"
        className={styles.item}
        onClick={(e) => {
          e.preventDefault();
          setActiveMenu("About");
        }}
      >
        <FontAwesomeIcon
          icon={activeMenu === "About" ? CircleHighlighted : faCircle}
          size="lg"
        />
      </a>
      <a
        href="#Contact"
        className={styles.item}
        onClick={(e) => {
          e.preventDefault();
          setActiveMenu("Contact");
        }}
      >
        <FontAwesomeIcon
          icon={activeMenu === "Contact" ? CircleHighlighted : faCircle}
          size="lg"
        />
      </a>
    </div>
  );
}
