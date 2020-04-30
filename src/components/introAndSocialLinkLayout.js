import React from "react";
import styles from "./introAndSocialLinkLayout.module.css";

import HomeAboutContact from "./homeAboutContact";
import SocialLinks from "./socialLinks";

export const IntroAndSocialLinkLayout = () => {
  return (
    <div className={styles.container}>
      <HomeAboutContact />
      <div className={styles.socialLinks}>
        <SocialLinks />
      </div>
    </div>
  );
};
