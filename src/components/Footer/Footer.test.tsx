//Footer component
import Footer from "./Footer";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The footer component", () => {
  //
  it("should render without crashing", async () => {
    render(<Footer />);
  });

  //
});
