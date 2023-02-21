import { render, screen } from "@testing-library/react";
import CardHeader from "./CardHeader";

describe("Card Header Component", () => {
  test("loading header component", () => {
    render(<CardHeader title="Card Header" />);

    expect(screen.getByText("Card Header")).toBeInTheDocument();
  });
});
