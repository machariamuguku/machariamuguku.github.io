import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "./header.module.css"

// single page link
export const PageLink = ({
  theComponent = "",
  activeLink = "",
  switchTabs = () => {},
}) => (
  <div className={styles.column}>
    <Link
      to={`#${theComponent}`}
      className={`${styles.headerLink} ${activeLink === theComponent &&
        styles.activeHeaderLink}`}
      onClick={() => {
        switchTabs(theComponent)
      }}
    >
      {theComponent}
    </Link>
  </div>
)

// header component
const Header = ({ siteTitle }) => {
  const [showNav, setShowNav] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  // switch active tabs
  const switchTabs = TabName => setActiveLink(TabName)

  return (
    <header className={styles.row} data-testid="header-component">
      <div className={`${styles.column} ${styles.marginTop}`}>
        <div className={styles.NavColumn}>
          {/* logo */}
          <div className={styles.NavColumn}>
            <div>
              <Link
                to="/"
                className={styles.headerLogoLink}
                onClick={() => {
                  switchTabs("Home")
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
              className={`${styles.NavButton}  ${showNav &&
                styles.navActive}`}
              onClick={e => setShowNav(prevState => !prevState)}
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
        className={`${styles.column} ${styles.marginTop} ${styles.mobileNavBackground} `}
      >
        <div
          className={`${styles.NavRow} ${
            showNav ? styles.showOnMobile : styles.hideOnMobile
          }`}
        >
          <PageLink
            theComponent={"Home"}
            activeLink={activeLink}
            switchTabs={switchTabs}
          />

          <PageLink
            theComponent={"About"}
            activeLink={activeLink}
            switchTabs={switchTabs}
          />

          <PageLink
            theComponent={"Projects"}
            activeLink={activeLink}
            switchTabs={switchTabs}
          />

          <PageLink
            theComponent={"Articles"}
            activeLink={activeLink}
            switchTabs={switchTabs}
          />

          <PageLink
            theComponent={"Contact"}
            activeLink={activeLink}
            switchTabs={switchTabs}
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
