//Header component
import Button from "./Button";

//React Testing Library
import { render, screen, fireEvent } from "@testing-library/react";

describe("The button component", () => {
  //
  it("should render without crashing", async () => {
    render(
      <Button
        buttonText=""
        className=""
        buttonType="button"
        callbackFunction={() => {}}
      />
    );
  });
  //
  it("should create a paragraph with some text inside", async () => {
    function addParagraph() {
      const paragraph = document.createElement("p");
      paragraph.textContent = "Test";
    }

    render(
      <Button
        buttonText=""
        className=""
        buttonType="button"
        callbackFunction={() => {
          addParagraph();
        }}
      />
    );

    // fireEvent(<Button />, "click");
  });

  //
});
