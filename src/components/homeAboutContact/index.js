import React from "react";
import styles from "./index.module.css";
// components
import Home from "./home";
import { NavigationCircles } from "./navigationCircles";

export default function HomeAboutContact() {
  return (
    <div className={styles.container}>
      <Home />
      <NavigationCircles />
    </div>
  );
}
