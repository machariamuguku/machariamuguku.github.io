import React from "react";
import SEO from "../seo";
import styles from "./home.module.css";
import { LeftCaret, RightCaret } from "./carets";
// Todo: fn to type/delete I'm ....

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO title="Home" />

      {/* left bracket */}
      <div className={styles.item}>
        <div className={`${styles.container} ${styles.bracketLeft}`}>
          <div className={styles.item}>
            <span className={styles.brackets}>{"{"}</span>
          </div>

          <div className={styles.item}>
            <LeftCaret />
          </div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.verticalContainer}>
          <span className={styles.salutation}>Hi There!</span>
          <div className={styles.container}>
            <span className={styles.introduction}>I'm</span>
            <span className={styles.introduction}>
              {/* Macharia Muguku */}
              {/* A Software Engineer */}A FullStack Developer
              {/* A Minimalist */}
            </span>
          </div>
        </div>
        {/* here */}
        <div className={styles.container}>
          <div className={styles.summary}>
            <span>ENGINEER. </span>
            <span>DEVELOPER. </span>
            <span>MINIMALIST</span>
          </div>
        </div>
        {/* here */}
      </div>

      {/* right bracket */}
      <div className={`${styles.item} ${styles.bracketRight}`}>
        <div className={styles.container}>
          <div className={styles.item}>
            <RightCaret />
          </div>
          <div className={styles.item}>
            <span className={styles.brackets}>{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
