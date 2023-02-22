import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("Dashboard View Component", () => {
  test("Render Dashboard View", () => {
    render(<Dashboard />);

    expect(screen.getByText("Account Balance")).toBeInTheDocument();
  });
});
