import React, { useContext } from "react";

// context provider
import { MenuContext } from "../menuContext";
// custom typeWriter hook
import { useTypeWriter } from "./useTypeWriter";

// components
import SEO from "../seo";
import { LeftCaret, RightCaret } from "./carets";

// stylesheet
import classNames from "classnames";
import styles from "./home.module.css";

const navigationItems = ["Home", "About", "Contact"];

const introductions = [
  "Macharia Muguku",
  "A Software Engineer",
  "A Full-Stack Developer",
  "A Minimalist"
];

const introductionSummary = ["ENGINEER", "DEVELOPER", "MINIMALIST"];

export default function Home() {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);
  const { introduction } = useTypeWriter(introductions);

  const changeMenu = (direction) => {
    const indexOfCurrentItem = navigationItems.indexOf(activeMenu);

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
      <SEO title="Home" />

      {/* left bracket */}
      <div className={styles.item}>
        <div className={classNames(styles.container, styles.bracketLeft)}>
          <div className={styles.item}>
            <span className={styles.brackets}>{"{"}</span>
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
          <span className={styles.salutation}>Hello!</span>
          <div className={styles.container}>
            <span className={styles.introduction}>I'm</span>
            <span className={styles.introduction}>{introduction}</span>
            <span className={styles.introduction}>|</span>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.summary}>
            {introductionSummary.map((item, index, theArray) => (
              <React.Fragment key={index}>
                <span>{item}</span>
                {/* add a dot between items but for the last item */}
                {index <= theArray.length - 2 && (
                  <span className={styles.dot}> . </span>
                )}
              </React.Fragment>
            ))}
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
            <span className={styles.brackets}>{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
