import React from "react";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./caretDown.module.css";

export function CaretDown() {
  return (
    <div className={styles.caretDown}>
      <div
        className={`${styles.animateCaretDown} ${styles.noLinkOutline}`}
        onClick={() => {
          console.log("go down implementation here");
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            console.log("go down implementation here");
          }
        }}
        role="button"
        tabIndex="0"
      >
        <FontAwesomeIcon
          icon={faChevronDown}
          size="sm"
          className={styles.goingDown}
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          size="sm"
          className={styles.goingDown}
        />
      </div>
    </div>
  );
}
