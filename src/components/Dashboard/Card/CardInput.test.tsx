import React from "react";
import { render, screen } from "@testing-library/react";
import CardInput from "./CardInput";

describe("CardInput component", () => {
  let amount = 1100;
  test("render cardinput", () => {
    render(<CardInput amount={amount} editAmountValue={jest.fn} id="1" />);

    expect(screen.getByText(`$${amount}`)).toBeInTheDocument();
  });
});
