import React from "react";

import styles from "./landingPageLayout.module.css";

import HomeAboutContact from "./homeAboutContact";
import { SocialLinks } from "./socialLinks";
import { CaretDown } from "./caretDown";
import { Projects } from "./projects";
import { Articles } from "./articles";

export const LandingPageLayout = () => {
  return (
    <div className={styles.verticalContainer}>
      <div className={styles.container}>
        <HomeAboutContact />
        <div className={styles.socialLinks}>
          <SocialLinks />
        </div>
      </div>
      <CaretDown />
      <div className={styles.projects}>
        <Projects />
      </div>
      <div className={styles.articles}>
        <Articles />
      </div>
    </div>
  );
};
