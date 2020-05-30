import React, { useState, useEffect } from "react";
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

// stylesheet
import classNames from "classnames";
import styles from "./socialLinks.module.css";

export function SocialLinks() {
  const [copiedToClipBoard, setCopiedToClipBoard] = useState(false);
  const [toolTipContent, setToolTipContent] = useState("");

  // set tooltip content after render
  // this is to avoid showing when rendering
  useEffect(() => {
    copiedToClipBoard
      ? setToolTipContent(
          "Yay! My email address has been copied to your clipboard✅"
        )
      : setToolTipContent(
          "Click here to copy my email address to your clipboard 😀"
        );

    return () => {
      setToolTipContent("");
    };
  }, [copiedToClipBoard]);

  return (
    <div className={styles.container}>
      {/* the universal react tooltip. Style tooltip here */}
      <ReactTooltip getContent={() => toolTipContent} />
      <div className={styles.item}>
        <a
          className={styles.linkColor}
          href="https://github.com/machariamuguku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className={styles.iconSize} />
        </a>
      </div>
      <div className={styles.item}>
        <a
          className={styles.linkColor}
          href="https://www.linkedin.com/in/machariamuguku/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.iconSize} />
        </a>
      </div>
      <div className={styles.item}>
        <a
          className={styles.linkColor}
          href="https://medium.com/@imash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} className={styles.iconSize} />
        </a>
      </div>
      <div
        className={classNames(
          styles.item,
          styles.linkContainer,
          styles.noLinkOutline,
          styles.pointer
        )}
        data-tip={toolTipContent}
        data-class={styles.tooltip}
        data-place="bottom"
        data-type="light"
        data-text-color="black"
        data-background-color="white"
        onMouseLeave={() => {
          setCopiedToClipBoard(false);
        }}
        role="button"
        tabIndex="0"
      >
        <CopyToClipboard
          text="hello@muguku.co.ke"
          // change tooltip text if copy successful
          onCopy={(result) => setCopiedToClipBoard(result)}
        >
          <div className={styles.item}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.iconSize} />
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
}
