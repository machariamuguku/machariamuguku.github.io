import React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby"; // mocked
import FourOhFour from "../404";

describe("<FourOhFour />", () => {
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

  it("renders <FourOhFour />", () => {
    const { getByText } = render(<FourOhFour />);
    expect(getByText(/NOT FOUND/i)).toBeInTheDocument();
  });
});
