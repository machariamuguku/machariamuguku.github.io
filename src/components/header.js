import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styles from "./header.module.css";

// context provider
import { MenuContext } from "./menuContext";

// single page link
export const PageLink = ({
  theComponent = "",
  activeMenu = "",
  switchTabs = () => {}
}) => (
  <div className={styles.column}>
    <a
      href={`#${theComponent}`}
      className={`${styles.headerLink} ${activeMenu === theComponent &&
        styles.activeHeaderLink}`}
      onClick={() => {
        switchTabs(theComponent);
      }}
    >
      {theComponent}
    </a>
  </div>
);

// header component
const Header = ({ siteTitle }) => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);
  const [showNav, setShowNav] = useState(false);

  // switch active tabs and toggle the menu off
  const switchTabs = (TabName) => {
    setActiveMenu(TabName);
    setShowNav(false);
  };

  return (
    <header className={styles.row}>
      <div className={`${styles.column} ${styles.marginTop}`}>
        <div className={styles.NavColumn}>
          {/* logo */}
          <div className={styles.NavColumn}>
            <div>
              <Link
                to="/"
                className={styles.headerLogoLink}
                onClick={() => {
                  switchTabs("Home");
                }}
              >
                {siteTitle}
              </Link>
            </div>
          </div>
          {/* mobile toggle button */}
          <div
            className={`${styles.NavColumn} ${styles.flexEnd} ${styles.mobileNav}`}
          >
            <button
              type="button"
              className={`${styles.NavButton} ${showNav && styles.navActive}`}
              onClick={(e) => setShowNav((prevState) => !prevState)}
            >
              <span className={styles.NavTogglerSpan}></span>
              <span className={styles.NavTogglerSpan}></span>
              <span className={styles.NavTogglerSpan}></span>
              <span className={styles.NavTogglerSpan}></span>
            </button>
          </div>
        </div>
      </div>

      {/* page links */}
      <div
        className={`${styles.column} ${styles.marginTop} ${styles.mobileNavBackground}`}
      >
        <div
          className={`${styles.NavRow} ${
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
