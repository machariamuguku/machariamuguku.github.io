import React from "react";
import styles from "./landingPageLayout.module.css";

import HomeAboutContact from "./homeAboutContact";
import { SocialLinks } from "./socialLinks";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const LandingPageLayout = () => {
  return (
    <div className={styles.verticalContainer}>
      <div className={styles.container}>
        <HomeAboutContact />
        <div className={styles.socialLinks}>
          <SocialLinks />
        </div>
      </div>
      <div
        className={`${styles.caretDown} ${styles.noLinkOutline}`}
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
};
