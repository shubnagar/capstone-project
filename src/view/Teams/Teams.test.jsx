import { screen } from "@testing-library/react";
import { ThemeContextValue } from "../../context/ThemeContext";
import { renderWithClient } from "../../test/utils";
import Teams from "./Teams";

describe("Teams View Component", () => {
  test("Render Teams View", () => {
    renderWithClient(
      <ThemeContextValue.Provider value="dark">
        <Teams />
      </ThemeContextValue.Provider>
    );
  });

  test("Render Teams View light mode", () => {
    renderWithClient(
      <ThemeContextValue.Provider value="light">
        <Teams />
      </ThemeContextValue.Provider>
    );
  });
});
