import { render } from "@testing-library/react";
import Dashboard from "../view/Dashboard/Dashboard";
import SwitchModeContext from "./SwitchModeContext";

describe("Switch Context", () => {
  test("Render context", () => {
    render(
      <SwitchModeContext>
        <Dashboard />
      </SwitchModeContext>
    );
  });
});
