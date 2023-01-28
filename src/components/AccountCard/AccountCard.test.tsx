//AccountCard component
import AccountCard from "./AccountCard";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The header component", () => {
  //
  it("should render without crashing", async () => {
    render(<AccountCard type="x" balance={0} />);
  });

  //
});
