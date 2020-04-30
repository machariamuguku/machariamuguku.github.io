import React from "react";
import styles from "./landingPageLayout.module.css";

import HomeAboutContact from "./homeAboutContact";
import SocialLinks from "./socialLinks";

export const LandingPageLayout = () => {
  return (
    <div className={styles.container}>
      <HomeAboutContact />
      <div className={styles.socialLinks}>
        <SocialLinks />
      </div>
    </div>
  );
};
