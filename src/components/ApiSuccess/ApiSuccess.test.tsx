//Header component
import ApiSuccess from "./ApiSuccess";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The spin-loader component", () => {
  //
  it("should render without crashing", async () => {
    render(<ApiSuccess status={200} message={""} data={null} />);
  });

  //
});
