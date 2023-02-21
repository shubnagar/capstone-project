import React from "react";
import {  render, screen } from "@testing-library/react";
import Card from "./Card";
import { listData } from "./CardList";

const fn = jest.fn();

describe("Card Component", () => {
  test("Passing Item Prop to card component", () => {
    render(<Card item={listData[0]} editAmountValue={fn} />);

    expect(screen.getByText(listData[0].name)).toBeInTheDocument()
    expect(screen.getByText(`$${listData[0].amount}`)).toBeInTheDocument()
  });
});
