import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { useTransition, animated } from "react-spring";
// context provider
import { MenuContext } from "./menuContext";

import { useHideOnScrollDown } from "./customHooks/useHideOnScrollDown";
import { useMediaQuery } from "./customHooks/useMediaQuery";

// stylesheet
import styles from "./header.module.css";

const allTabs = ["Home", "About", "Projects", "Articles", "Contact"];
const homeTabs = ["Home", "About", "Contact"];

// header component
export const Header = ({
  siteTitle = "",
  scrollToTop = () => {},
  scrollToPosition = () => {},
  homeRef,
  aboutRef,
  contactRef,
  projectsRef,
  articlesRef
}) => {
  // context consumer
  const { activeMenu, setActiveMenu } = useContext(MenuContext);

  // internal state
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  // check if media is mobile
  const isMobileOrTablet = useMediaQuery("(max-width: 48rem)");

  // track if scrolling downwards
  const isScrollDownValid = useHideOnScrollDown({
    minimumScrollDown: 50,
    throttleTime: 250,
    delayTime: 250
  });

  // react-spring animation
  const transitions = useTransition(toggleMobileNav, null, {
    from: { transform: "translate3d(0,-60vh,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(0,-60vh,0)" },
    delay: 10
  });

  // switch active tab and toggle menu off
  const switchTabs = (TabName) => {
    setActiveMenu(TabName);
    setToggleMobileNav(false);
  };

  return (
    <header
      className={`${styles.container} ${
        isScrollDownValid ? styles.hideHeader : ""
      }`}
    >
      <div className={styles.item}>
        {/* logo */}
        <div>
          <Link
            className={styles.linkText}
            to="/"
            onClick={() => {
              scrollToTop();
              switchTabs(allTabs[0]);
            }}
          >
            {siteTitle}
          </Link>
        </div>
        {/* mobile menu toggle button */}
        {isMobileOrTablet && (
          <button
            className={`${styles.mobileNav} ${
              toggleMobileNav ? styles.mobileNavOpen : ""
            }`}
            type="button"
            onClick={() => setToggleMobileNav((prevState) => !prevState)}
          >
            {[1, 2, 3, 4].map((_, index) => (
              <span key={index} className={styles.NavTogglerSpan}></span>
            ))}
          </button>
        )}
      </div>

      {/* conditional rendering for small devices */}
      {isMobileOrTablet ? (
        <div>
          {/* react-spring animation */}
          {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.div key={key} style={props} className={styles.item}>
                  {/* page links */}
                  {allTabs.map((Tab, index) => (
                    <PageLink
                      key={index}
                      theComponent={Tab}
                      activeMenu={activeMenu}
                      switchTabs={switchTabs}
                      scrollToTop={scrollToTop}
                      scrollToPosition={scrollToPosition}
                      setToggleMobileNav={setToggleMobileNav}
                      reference={eval(`${Tab.toLowerCase()}Ref`)}
                    />
                  ))}
                </animated.div>
              )
          )}
        </div>
      ) : (
        <div className={styles.item}>
          {/* page links */}
          {allTabs.map((Tab, index) => (
            <PageLink
              key={index}
              theComponent={Tab}
              activeMenu={activeMenu}
              switchTabs={switchTabs}
              scrollToTop={scrollToTop}
              scrollToPosition={scrollToPosition}
              setToggleMobileNav={setToggleMobileNav}
              reference={eval(`${Tab.toLowerCase()}Ref`)}
            />
          ))}
        </div>
      )}
    </header>
  );
};

// single page link
const PageLink = ({
  theComponent = "",
  activeMenu = "",
  switchTabs = () => {},
  scrollToTop = () => {},
  scrollToPosition = () => {},
  setToggleMobileNav = () => {},
  reference
}) => (
  <a
    className={`${styles.linkText} ${
      activeMenu === theComponent ? styles.activeLink : ""
    }`}
    href={`#${theComponent}`}
    onClick={() => {
      // if Tab is a primary Tab (Home-About-Contact)
      if (homeTabs.includes(theComponent)) {
        // scroll to home component (very top)
        scrollToTop();
        // switch tabs
        switchTabs(theComponent);
        return;
      }
      // scroll to the component
      scrollToPosition(reference);
      // toggle mobile navigation off
      setToggleMobileNav(false);
      return;
    }}
  >
    {theComponent}
  </a>
);

// propTypes

// Header
Header.propTypes = {
  siteTitle: PropTypes.string
};
// PageLink
PageLink.propTypes = {
  theComponent: PropTypes.string,
  activeMenu: PropTypes.string,
  switchTabs: PropTypes.func
};
