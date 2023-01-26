//Footer component
import Footer from "./Footer";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The footer component", () => {
  //
  it("should render without crashing", async () => {
    render(<Footer />);
  });

  it("should display the current year next to the foundation date", async () => {
    render(<Footer />);
    const currentYear: number = new Date().getFullYear();

    const copyrightElement: HTMLElement = screen.getByTestId("small");

    expect(copyrightElement?.textContent?.trim()).toEqual(
      `Copyright © 2020-${currentYear} Argent Bank`
    );
  });

  //
});
