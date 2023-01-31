//Header component
import ApiError from "./ApiError";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The spin-loader component", () => {
  //
  it("should render without crashing", async () => {
    render(<ApiError status={200} message={""} />);
  });

  //
});
