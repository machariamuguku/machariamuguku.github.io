import React from "react";
import GatsbyLogo from "../images/Gatsby_Logo.svg";
import styles from "./footer.module.css";

export default function Footer({ siteOwner }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerParagraph}>
        <span>
          © {new Date().getFullYear()} {siteOwner}.{" "}
        </span>
        <span>All rights reserved. </span>
        <span>Built with </span>
        <a
          className={styles.footerLinkColor}
          href="https://www.gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={GatsbyLogo}
            alt="gatsby logo"
            height="70px"
            width="70px"
            valign="middle"
          />
        </a>
      </div>
    </footer>
  );
}
