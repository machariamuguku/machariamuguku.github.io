import React, { useState } from "react";
import styles from "./socialLinks.module.css";
// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faMedium,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// react tooltip
import ReactTooltip from "react-tooltip";
// copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

export function SocialLinks() {
  const [copiedToClipBoard, setCopiedToClipBoard] = useState(false);

  return (
    <div className={styles.container}>
      {/* the universal react tooltip. Style tooltip here */}
      <ReactTooltip
        place="bottom"
        type="light"
        textColor="black"
        backgroundColor={"white"}
        className={styles.tooltip}
        id="socialToolTip"
        getContent={() =>
          copiedToClipBoard
            ? "Yay! My email address has been copied to your clipboard✅"
            : "Click here to copy my email address to your clipboard 😀"
        }
      />
      <div className={styles.item}>
        <a
          className={styles.linkColor}
          href="https://github.com/machariamuguku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
      </div>
      <div className={styles.item}>
        <a
          className={styles.linkColor}
          href="https://www.linkedin.com/in/machariamuguku/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="1x" />
        </a>
      </div>
      <div className={styles.item}>
        <a
          className={styles.linkColor}
          href="https://medium.com/@imash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} size="1x" />
        </a>
      </div>
      <div className={styles.item}>
        <CopyToClipboard
          text="hello@muguku.co.ke"
          // change tooltip text if copy successful
          onCopy={(result) => setCopiedToClipBoard(result)}
        >
          <div
            className={`${styles.linkContainer} ${styles.noLinkOutline} ${styles.pointer}`}
            data-for="socialToolTip"
            data-tip
            onMouseLeave={() => {
              setCopiedToClipBoard(false);
            }}
            role="button"
            tabIndex="0"
          >
            <div className={styles.item}>
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
            </div>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}
