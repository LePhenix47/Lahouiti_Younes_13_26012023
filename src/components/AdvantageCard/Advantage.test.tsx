//AdvantageCard component
import AdvantageCard from "./AdvantageCard";

//React Testing Library
import { render, screen } from "@testing-library/react";

//Images
import IconImage from "../../public/images/svg/icon-money_1.svg";

describe("The footer component", () => {
  //
  it("should render without crashing", async () => {
    render(<AdvantageCard image={IconImage} title={"bruh"} text={"bruh2"} />);
  });
  //
});
