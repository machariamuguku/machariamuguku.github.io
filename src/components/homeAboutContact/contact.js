import React, { useContext, useState } from "react";

// context provider
import { MenuContext } from "../menuContext";

// components
import SEO from "../seo";
import { LeftCaret, RightCaret } from "./carets";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// react tooltip
import ReactTooltip from "react-tooltip";
// copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

// stylesheet
import classNames from "classnames";
import styles from "./contact.module.css";

const navigationItems = ["Home", "About", "Contact"];

// Todo: remove default exports everywhere

export function Contact() {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);
  const [copiedToClipBoard, setCopiedToClipBoard] = useState(false);

  const changeMenu = (direction) => {
    const indexOfCurrentItem = navigationItems.indexOf(activeMenu);

    // Todo: move this function up/reuse/to context?

    // if direction is forward
    if (direction === "Next") {
      // set to index of next item
      // if the next index is equal to the array length
      // set to first index
      if (indexOfCurrentItem + 1 === navigationItems.length) {
        setActiveMenu(navigationItems[0]);
      } else {
        setActiveMenu(navigationItems[indexOfCurrentItem + 1]);
      }
    } else {
      // set to index of previous item
      // if the previous index is less than zero (first index)
      // set to the biggest index
      if (indexOfCurrentItem - 1 < 0) {
        setActiveMenu(navigationItems[navigationItems.length - 1]);
      } else {
        setActiveMenu(navigationItems[indexOfCurrentItem - 1]);
      }
    }
  };

  return (
    <div className={styles.container}>
      <SEO title="Contact" />

      {/* left bracket */}
      <div className={styles.item}>
        <div className={classNames(styles.container, styles.bracketLeft)}>
          <div className={styles.item}>
            <span className={styles.brackets}>{"("}</span>
          </div>

          <a
            className={styles.item}
            href="#Prev"
            onClick={(e) => {
              e.preventDefault();
              changeMenu("Prev");
            }}
          >
            <LeftCaret />
          </a>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.verticalContainer}>
          <span className={styles.linkHeader}>Get in touch via</span>

          <CopyToClipboard
            text="hello@muguku.co.ke"
            // change tooltip text if copy successful
            onCopy={(result) => setCopiedToClipBoard(result)}
          >
            <div
              className={classNames(
                styles.linkContainer,
                styles.noLinkOutline,
                styles.pointer
              )}
              data-for="getContent"
              data-tip
              onMouseLeave={() => {
                setCopiedToClipBoard(false);
              }}
              role="button"
              tabIndex="0"
            >
              <div className={styles.item}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={styles.iconSize}
                />
              </div>
              <div className={classNames(styles.item, styles.someMargin)}>
                <span className={styles.linkSize}>hello@muguku.co.ke</span>
              </div>
            </div>
          </CopyToClipboard>
          <div className={styles.linkContainer}>
            <div className={styles.item}>
              <a
                className={styles.linkColor}
                href="https://www.linkedin.com/in/machariamuguku/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className={styles.iconSize}
                />
              </a>
            </div>
            <div className={classNames(styles.item, styles.someMargin)}>
              <a
                className={styles.linkColor}
                href="https://www.linkedin.com/in/machariamuguku/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.linkSize}>
                  linkedin.com/in/machariamuguku
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* right bracket */}
      <div className={classNames(styles.item, styles.bracketRight)}>
        <div className={styles.container}>
          <a
            className={styles.item}
            href="#Next"
            onClick={(e) => {
              e.preventDefault();
              changeMenu("Next");
            }}
          >
            <RightCaret />
          </a>
          <div className={styles.item}>
            <span className={styles.brackets}>{")"}</span>
          </div>
        </div>
      </div>
      {/* the universal react tooltip. Style tooltip here */}
      <ReactTooltip
        place="bottom"
        type="light"
        textColor="black"
        backgroundColor={"white"}
        className={styles.tooltip}
        id="getContent"
        getContent={() =>
          copiedToClipBoard
            ? "Yay! My email address has been copied to your clipboard✅"
            : "Click here to copy my email address to your clipboard 😀"
        }
      />
    </div>
  );
}
