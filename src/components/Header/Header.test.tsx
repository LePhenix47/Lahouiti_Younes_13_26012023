//Header component
import Header from "./Header";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The header component", () => {
  //
  it("should render without crashing", async () => {
    render(<Header />);
  });

  //
});
