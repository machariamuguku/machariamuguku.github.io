import React from "react"
import { render } from "@testing-library/react"
import Footer from "../footer"

describe("<Footer />", () => {
  it("should render <Footer /> that contains this HTML", () => {
    // mock siteTitle prop
    const copyrightOwner = "Muguku"
    const { queryByTestId } = render(<Footer copyrightOwner={copyrightOwner} />)
    expect(queryByTestId("footer-component")).toContainHTML(
      '<footer data-testid="footer-component">© 2020 | Muguku | Built with<a href="https://www.gatsbyjs.org">Gatsby/React</a></footer>'
    )
  })
})
