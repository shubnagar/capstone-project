import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("Render Navbar component", async () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    let linkItem = screen.getByText("Dashboard");
    expect(linkItem).toBeInTheDocument();

    const getToggleButton = screen.getByRole("button");
    fireEvent.click(getToggleButton);

    let navParent = screen.getByTestId("nav_parent");

    await waitFor(() => {
      expect(navParent.classList.contains("navOpen")).toBe(true);
    });
  });
});
