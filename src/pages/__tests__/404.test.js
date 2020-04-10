import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby" // mocked

import FourOhFour from "../404"

describe("<FourOhFour />", () => {
  // mock useStaticQuery
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author: "Muguku",
          description: "My description",
          title: "Muguku",
        },
      },
    }))
  })

  it("should render <FourOhFour />", () => {
    const { queryByTestId } = render(<FourOhFour />)
    expect(queryByTestId("404-component")).toBeInTheDocument()
  })
})
