import { render, screen } from "@testing-library/react";

import Home from "./Home";

describe("Home Page", () => {
  it("Home should render passed label correctly", () => {
    render(<Home />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});
