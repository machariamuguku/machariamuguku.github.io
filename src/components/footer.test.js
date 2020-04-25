import React from "react";
import { render } from "@testing-library/react";
import Footer from "./footer";

describe("<Footer />", () => {
  let siteOwner = "The Test SiteOwner";
  it("renders <Footer />", () => {
    const { getByText } = render(<Footer siteOwner={siteOwner} />);
    expect(
      getByText(/All rights reserved, The Test SiteOwner,/i)
    ).toBeInTheDocument();
  });
});
