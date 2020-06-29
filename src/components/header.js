// the following rule disables warning for use of eval() which is unsafe
/* eslint no-eval: 0 */
import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { useTransition, animated } from "react-spring";

// context provider
import { MenuContext } from "./menuContext";

// custom media query hook
import { useMediaQuery } from "./customHooks/useMediaQuery";

// stylesheet
import styles from "./header.module.css";

const allTabs = ["Home", "About", "Projects", "Blog", "Contact"];
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
  blogRef
}) => {
  // context consumer
  const { activeMenuAndComponent, dispatchActiveMenuAndComponent } = useContext(
    MenuContext
  );

  // internal state
  const [toggleMobileNav, setToggleMobileNav] = useState(false);

  // check if media is mobile
  const isMobileOrTablet = useMediaQuery("(max-width: 48rem)");

  // react-spring animation
  const transitions = useTransition(toggleMobileNav, null, {
    from: { transform: "translate3d(0,-60vh,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(0,-60vh,0)" }
  });

  // switch active tab and toggle menu off
  const switchTabs = (DispatchType, TabName) => {
    dispatchActiveMenuAndComponent({ type: DispatchType, payload: TabName });
    setToggleMobileNav(false);
  };
  // switch component
  const dispatchComponent = (payload) => {
    dispatchActiveMenuAndComponent({
      type: "CHANGE_COMPONENT",
      payload: payload
    });
  };

  return (
    <header className={styles.container}>
      <div className={styles.item}>
        {/* logo */}
        <div>
          <Link
            className={styles.linkText}
            to="/"
            onClick={() => {
              scrollToTop();
              switchTabs("CHANGE_MENU", allTabs[0]);
              dispatchComponent(allTabs[0]);
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
                      activeMenuAndComponent={activeMenuAndComponent}
                      switchTabs={switchTabs}
                      scrollToTop={scrollToTop}
                      scrollToPosition={scrollToPosition}
                      setToggleMobileNav={setToggleMobileNav}
                      dispatchComponent={dispatchComponent}
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
              activeMenuAndComponent={activeMenuAndComponent}
              switchTabs={switchTabs}
              scrollToTop={scrollToTop}
              scrollToPosition={scrollToPosition}
              setToggleMobileNav={setToggleMobileNav}
              dispatchComponent={dispatchComponent}
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
  activeMenuAndComponent = {},
  switchTabs = () => {},
  scrollToTop = () => {},
  scrollToPosition = () => {},
  setToggleMobileNav = () => {},
  dispatchComponent = () => {},
  reference
}) => (
  <a
    className={`${styles.linkText} ${
      activeMenuAndComponent.Menu === theComponent ? styles.activeLink : ""
    }`}
    href={`#${theComponent}`}
    onClick={() => {
      // if Tab is a primary Tab (Home-About-Contact)
      if (homeTabs.includes(theComponent)) {
        // scroll to home component (very top)
        scrollToTop();
        // switch primary tabs
        switchTabs("CHANGE_MENU", theComponent);
        // also switch active tab
        dispatchComponent(theComponent);
        return;
      }
      // scroll to the component
      scrollToPosition(reference);
      // switch secondary tabs
      switchTabs("CHANGE_MENU", theComponent);
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
  activeMenuAndComponent: PropTypes.object,
  switchTabs: PropTypes.func
};
