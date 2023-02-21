import { render, screen } from "@testing-library/react";
import SwitchButton from "./SwitchButton";
import { FaMoon, FaSun } from "react-icons/fa";
import userEvent from "@testing-library/user-event";

const jestFn = jest.fn();

test("loading switchButton for dark mode", async () => {
  const { container, rerender } = render(
    <SwitchButton icon={<FaMoon />} value={true} set={jestFn} />
  );

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const isSwitchOn = container.querySelector(".switchon");
  expect(isSwitchOn).toBeInTheDocument();

  userEvent.click(isSwitchOn);
  rerender(<SwitchButton icon={<FaSun />} value={false} set={jestFn} />);
});
