import React from "react"

export default function Footer({ siteOwner }) {
  return (
    <footer>
      All rights reserved, {siteOwner}, © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}
