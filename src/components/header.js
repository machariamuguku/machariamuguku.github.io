import React, { useState, useContext, useEffect } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styles from "./header.module.css";

// context provider
import { MenuContext } from "./menuContext";

import { throttle } from "lodash";

// single page link
export const PageLink = ({
  theComponent = "",
  activeMenu = "",
  switchTabs = () => {}
}) => (
  <a
    className={`${activeMenu === theComponent ? styles.activeLink : ""} ${
      styles.linkText
    }`}
    href={`#${theComponent}`}
    onClick={() => {
      switchTabs(theComponent);
    }}
  >
    {theComponent}
  </a>
);

// header component
const Header = ({ siteTitle }) => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);
  const [showNav, setShowNav] = useState(false);
  const [scrollPos, setScrollPos] = useState({
    prevScrollPos: 0,
    currentScrollPos: 0
  });
  const [hideHeader, setHideHeader] = useState(false);

  // switch active tabs and toggle the menu off
  const switchTabs = (TabName) => {
    setActiveMenu(TabName);
    setShowNav(false);
  };

  useEffect(() => {
    function handleScroll(event) {
      // get current scrolled top space in number
      let currentScrollPosition = event.target.documentElement.scrollTop;

      // set prev and current scrolled top space
      setScrollPos((prevState) => ({
        prevScrollPos: prevState.currentScrollPos,
        currentScrollPos: currentScrollPosition
      }));

      // if scroll direction is downwards
      const isScrolledDown =
        scrollPos.prevScrollPos < scrollPos.currentScrollPos;
      // if you've scrolled down a bit from the top (don't hide when at the top)
      const isMinimumScrolled = scrollPos.currentScrollPos > 50;

      // debounce
      setTimeout(() => {
        setHideHeader(isScrolledDown && isMinimumScrolled);
      }, 250);
    }

    // throttle the fn for 250ms
    const handleScrollThrottled = throttle(handleScroll, 250);

    window.addEventListener("scroll", handleScrollThrottled);

    return () => {
      window.removeEventListener("scroll", handleScrollThrottled);
    };
  }, [scrollPos]);

  return (
    <header
      className={`${styles.container} ${
        hideHeader && !showNav ? styles.hideHeader : ""
      }`}
    >
      <div className={styles.item}>
        {/* logo */}
        <div>
          <Link
            className={styles.linkText}
            to="/"
            onClick={() => {
              switchTabs("Home");
            }}
          >
            {siteTitle}
          </Link>
        </div>
        {/* mobile toggle button */}
        <button
          className={`${styles.mobileNav} ${showNav && styles.navActive}`}
          type="button"
          onClick={(e) => setShowNav((prevState) => !prevState)}
        >
          <span className={styles.NavTogglerSpan}></span>
          <span className={styles.NavTogglerSpan}></span>
          <span className={styles.NavTogglerSpan}></span>
          <span className={styles.NavTogglerSpan}></span>
        </button>
      </div>

      {/* page links */}
      <div
        className={`${styles.item} ${
          showNav ? styles.showOnMobile : styles.hideOnMobile
        }`}
      >
        <PageLink
          theComponent={"Home"}
          activeMenu={activeMenu}
          switchTabs={switchTabs}
        />

        <PageLink
          theComponent={"About"}
          activeMenu={activeMenu}
          switchTabs={switchTabs}
        />

        <PageLink
          theComponent={"Projects"}
          activeMenu={activeMenu}
          switchTabs={switchTabs}
        />

        <PageLink
          theComponent={"Articles"}
          activeMenu={activeMenu}
          switchTabs={switchTabs}
        />

        <PageLink
          theComponent={"Contact"}
          activeMenu={activeMenu}
          switchTabs={switchTabs}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
