import React from "react"
import { render } from "@testing-library/react"
import Header from "../header"

describe("<Header />", () => {
  it("should be in the DOM", () => {
    const { queryByTestId } = render(<Header />)
    expect(queryByTestId("header-component")).toBeInTheDocument()
  })

  it("should contain these sectional links", () => {
    const { queryByText } = render(<Header />)
    expect(queryByText("Home")).toBeInTheDocument()
    expect(queryByText("About")).toBeInTheDocument()
    expect(queryByText("Projects")).toBeInTheDocument()
    expect(queryByText("Articles")).toBeInTheDocument()
    expect(queryByText("Contact")).toBeInTheDocument()
  })
})
