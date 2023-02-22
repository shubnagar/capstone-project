/* eslint-disable testing-library/no-container */
import { fireEvent, render } from "@testing-library/react";
import Header from "../components/Common/Layout/Header";
import ThemeContextProvider from "./ThemeContext";

describe("Theme Context", () => {
  test("Render context", () => {
    const {container} = render(
      <ThemeContextProvider>
        <Header />
      </ThemeContextProvider>
    );

    // eslint-disable-next-line testing-library/no-node-access
    const switchButton = container.getElementsByClassName(
      "switchButtonContainer"
    )[1];
    fireEvent.click(switchButton);
    fireEvent.click(switchButton);
  });
});
