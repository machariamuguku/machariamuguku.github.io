import React from "react";
import { render } from "@testing-library/react";
import Footer from "./footer";

describe("<Footer />", () => {
  let siteOwner = "The Test SiteOwner";
  it("renders <Footer /> Content", () => {
    const { getByText } = render(<Footer siteOwner={siteOwner} />);
    expect(getByText(/© 2020 The Test SiteOwner./i)).toBeInTheDocument();
  });
});
