//Header component
import Button from "./Button";

//React Testing Library
import { render, screen } from "@testing-library/react";

describe("The button component", () => {
  //
  it("should render without crashing", async () => {
    render(
      <Button className="" buttonType="button" callbackFunction={() => {}} />
    );
  });

  //
});
