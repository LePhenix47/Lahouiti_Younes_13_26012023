//ChangeName component
import ChangeName from "./ChangeName";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The ChangeName component", () => {
  //
  it("should render without crashing", async () => {
    render(<ChangeName />);
  });

  //
});
