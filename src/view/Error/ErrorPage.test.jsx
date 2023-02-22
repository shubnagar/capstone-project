import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("Error page", () => {
  test("Error", () => {
    render(<ErrorPage errorText="Page not found" />);

    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });
});
