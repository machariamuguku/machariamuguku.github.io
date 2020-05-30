import React from "react";

// stylesheet
import styles from "./carets.module.css";
// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export function LeftCaret() {
  return (
    <FontAwesomeIcon icon={faCaretLeft} size="sm" className={styles.caret} />
  );
}

export function RightCaret() {
  return (
    <FontAwesomeIcon icon={faCaretRight} size="sm" className={styles.caret} />
  );
}
