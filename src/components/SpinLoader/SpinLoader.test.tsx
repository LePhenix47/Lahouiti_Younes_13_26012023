//Header component
import SpinLoader from "./SpinLoader";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The spin-loader component", () => {
  //
  it("should render without crashing", async () => {
    render(<SpinLoader width={100} />);
  });

  //
});
