import { render, screen } from "@testing-library/react";
import Create from "./Create";

describe("Create View Component", () => {
  test("Render Create View", () => {
    render(<Create />);

    expect(screen.getByText("Add People")).toBeInTheDocument();
  });
});
