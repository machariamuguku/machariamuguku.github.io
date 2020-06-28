import React from "react";
import { render } from "@testing-library/react";
import Header from "./header";

describe("<Header />", () => {
  it("contains menu items", () => {
    let siteTitle = "The Site Title";
    const { getByText } = render(<Header siteTitle={siteTitle} />);
    expect(getByText(/The Site Title/i)).toBeInTheDocument();
    expect(getByText(/Home/i)).toBeInTheDocument();
    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Projects/i)).toBeInTheDocument();
    expect(getByText(/Blog/i)).toBeInTheDocument();
    expect(getByText(/Contact/i)).toBeInTheDocument();
  });
});
