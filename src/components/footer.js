import React from "react";
import GatsbyLogo from "../images/Gatsby_Logo.svg";
import styles from "./footer.module.css";

export default function Footer({ siteOwner }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.marginBottom}>
        <span>
          &copy;{new Date().getFullYear()} {siteOwner}.&nbsp;
        </span>
        <span>All rights reserved.&nbsp;</span>
      </div>
      <span className={styles.padOnMobile}>
        Handcrafted by Me. Built with &nbsp;
        <a
          className={styles.footerLinkColor}
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GatsbyLogo} alt="gatsby logo" valign="middle" />
        </a>
      </span>
    </footer>
  );
}
