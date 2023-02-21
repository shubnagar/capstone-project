import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("loads and header", () => {
  const { container } = render(<Header />);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const mainHeader = container.querySelector("#header");
  expect(mainHeader).toBeInTheDocument();

  const headingText = screen.getByText("Context Playground");
  expect(headingText).toBeInTheDocument();
});
