import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby" // mocked

import Index from "../index"

describe("<Index />", () => {
  beforeEach(() => {
    // mock useStaticQuery
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

  // Todo: do integration tests here.
  // if when you click on buttons things are mounted and unmounted.
  // e.g in the <HomeAboutContact /> section/component,
  // when you click next/circles/nav menu what is rendered should change.
  // mock button clicks.
  // also maybe if you navigate anywhere the url changes.
  // and if it's anywhere other than `/#(sections)` 404 page is mounted
  // simulate all nav button clicks (about,contact,projects...)

  it("should render <Header />", () => {
    const { queryByTestId, debug } = render(<Index />)
    // debug()
    expect(queryByTestId("header-component")).toBeInTheDocument()
  })

  it("should render <HomeAboutContact />", () => {
    const { queryByTestId } = render(<Index />)
    expect(queryByTestId("home-about-contact-component")).toBeInTheDocument()
  })

  it("should render <Projects />", () => {
    const { queryByTestId } = render(<Index />)
    expect(queryByTestId("projects-component")).toBeInTheDocument()
  })

  it("should render <Articles />", () => {
    const { queryByTestId } = render(<Index />)
    expect(queryByTestId("articles-component")).toBeInTheDocument()
  })

  it("should render <Footer />", () => {
    const { queryByTestId } = render(<Index />)
    expect(queryByTestId("footer-component")).toBeInTheDocument()
  })
})
