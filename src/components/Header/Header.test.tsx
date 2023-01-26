/* 
@jest-environment jsdom
*/

//Header component
import Header from "./Header";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The footer component", () => {
  //
  it("should render without crashing", async () => {
    render(<Header />);
  });

  //
});
