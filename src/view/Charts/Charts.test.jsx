import { render, screen } from "@testing-library/react";
import { ThemeContextValue } from "../../context/ThemeContext";
import Charts from "./Charts";

describe("Charts View Component", () => {
  test("Load Charts View For Dark Mode", () => {
    render(
      <ThemeContextValue.Provider value="dark">
        <Charts />
      </ThemeContextValue.Provider>
    );

    expect(screen.getByText("Chrome")).toBeInTheDocument();
  });

  test("Load Charts View For light Mode", () => {
    render(
      <ThemeContextValue.Provider value="light">
        <Charts />
      </ThemeContextValue.Provider>
    );
    expect(
      screen.getByText("Browser market shares in March, 2022")
    ).toBeInTheDocument();
  });
});
