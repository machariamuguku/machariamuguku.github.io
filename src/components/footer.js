import React from "react"

export default function Footer() {
  return (
    <footer data-testid="footer-component">
      © {new Date().getFullYear()}, Built with
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}
