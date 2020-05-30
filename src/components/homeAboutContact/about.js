import React, { useContext } from "react";

// context provider
import { MenuContext } from "../menuContext";

// components
import SEO from "../seo";
import { LeftCaret, RightCaret } from "./carets";

// stylesheet
import classNames from "classnames";
import styles from "./about.module.css";

const navigationItems = ["Home", "About", "Contact"];

// Todo: remove default exports everywhere

export function About() {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);

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
      <SEO title="About" />

      {/* left bracket */}
      <div className={styles.item}>
        <div className={classNames(styles.container, styles.bracketLeft)}>
          <div className={styles.item}>
            <span className={styles.brackets}>{"["}</span>
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
          <p>
            I'm a fullstack software engineer from Nairobi, Kenya. I design,
            code, and tinker with things. I speak React, Node.js, and Golang. I
            love to write, run and trail.
          </p>
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
            <span className={styles.brackets}>{"]"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
