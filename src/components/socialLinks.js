import React from "react";
import styles from "./socialLinks.module.css";
// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faMedium,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function socialLinks() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <a
          className={styles.linkColor}
          href="https://github.com/machariamuguku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
      <div className={styles.item}>
        <a
          className={styles.linkColor}
          href="https://www.linkedin.com/in/machariamuguku/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
      </div>
      <div className={styles.item}>
        <a
          className={styles.linkColor}
          href="https://medium.com/@imash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} size="lg" />
        </a>
      </div>
      <div className={styles.item}>
        <a
          className={styles.linkColor}
          href="mailto:hello@muguku.co.ke"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
      </div>
    </div>
  );
}
