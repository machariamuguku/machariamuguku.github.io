import React from "react";
import styles from "./navigationCircles.module.css";
// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as CircleHighlighted } from "@fortawesome/free-solid-svg-icons";

export function NavigationCircles() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <FontAwesomeIcon icon={CircleHighlighted} size="lg" />
      </div>
      <div className={styles.item}>
        <FontAwesomeIcon icon={faCircle} size="lg" />
      </div>
      <div className={styles.item}>
        <FontAwesomeIcon icon={faCircle} size="lg" />
      </div>
    </div>
  );
}
