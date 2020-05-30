import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { useTransition, animated } from "react-spring";
// context provider
import { MenuContext } from "./menuContext";

import { useHideOnScrollDown } from "./useHideOnScrollDown";
import { useMediaQuery } from "./useMediaQuery";

// stylesheet
import classNames from "classnames";
import styles from "./header.module.css";

const homeTabs = ["Home", "About", "Projects", "Articles", "Contact"];

// header component
const Header = ({ siteTitle = "" }) => {
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
      className={classNames(styles.container, {
        [styles.hideHeader]: isScrollDownValid
      })}
    >
      <div className={styles.item}>
        {/* logo */}
        <div>
          <Link
            className={styles.linkText}
            to="/"
            onClick={() => {
              switchTabs(homeTabs[0]);
            }}
          >
            {siteTitle}
          </Link>
        </div>
        {/* mobile menu toggle button */}
        {isMobileOrTablet && (
          <button
            className={classNames(styles.mobileNav, {
              [styles.mobileNavOpen]: toggleMobileNav
            })}
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
                  {homeTabs.map((Tab, index) => (
                    <PageLink
                      key={index}
                      theComponent={Tab}
                      activeMenu={activeMenu}
                      switchTabs={switchTabs}
                    />
                  ))}
                </animated.div>
              )
          )}
        </div>
      ) : (
        <div className={styles.item}>
          {/* page links */}
          {homeTabs.map((Tab, index) => (
            <PageLink
              key={index}
              theComponent={Tab}
              activeMenu={activeMenu}
              switchTabs={switchTabs}
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
  switchTabs = () => {}
}) => (
  <a
    className={classNames(styles.linkText, {
      [styles.activeLink]: activeMenu === theComponent
    })}
    href={`#${theComponent}`}
    onClick={() => {
      switchTabs(theComponent);
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

export default Header;
