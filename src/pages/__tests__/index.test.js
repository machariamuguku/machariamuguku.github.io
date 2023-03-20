import React from "react";
import { render, waitFor } from "@testing-library/react";
// already mocked in __mocks__
import { useStaticQuery } from "gatsby";
import Index from "../index";

describe("<Index />", () => {
  beforeEach(() => {
    // mock useStaticQuery implementation
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          description: "My description",
          title: "Test Owner's Title",
          owner: "The Test Owner"
        }
      }
    }));
  });

  // Todo: do integration tests here.
  // if when you click on buttons things are mounted and unmounted.
  // e.g in the <HomeAboutContact /> section/component,
  // when you click next/circles/nav menu what is rendered  change.
  // mock button clicks.
  // also maybe if you navigate anywhere the url changes.
  // and if it's anywhere other than `/#(sections)` 404 page is mounted
  // simulate all nav button clicks (about,contact,projects...)

  it("renders <Header />", () => {
    const { getByText } = render(<Index />);
    expect(getByText(/Test Owner's Title/i)).toBeInTheDocument();
  });

  it("renders <HomeAboutContact />", () => {
    const { getByText } = render(<Index />);
    expect(getByText(/Hi there!/i)).toBeInTheDocument();
    waitFor(() => expect(getByText(/I'm The Test Owner/i)).toBeInTheDocument());
  });

  it("renders <Projects />", () => {
    const { getByText } = render(<Index />);
    expect(getByText(/My Popular GitHub Projects/i)).toBeInTheDocument();
  });

  it("renders <Blog />", () => {
    const { getByText } = render(<Index />);
    expect(getByText(/My Latest Blog Posts/i)).toBeInTheDocument();
  });

  it("renders <Footer />", () => {
    const { getByText } = render(<Index />);
    expect(getByText(/© 2020 The Test Owner./i)).toBeInTheDocument();
  });
});
