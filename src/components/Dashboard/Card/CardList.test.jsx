import { fireEvent, render, screen } from "@testing-library/react";
import { listData } from "../../../constant/config";
import { CreateSwitchModeContextValue } from "../../../context/SwitchModeContext";
import CardList from "./CardList";

describe("CardList component", () => {
  test("Rendering Cardlist", async () => {
    const value = { isEditable: true, setIsEditable: jest.fn() };
    render(
      <CreateSwitchModeContextValue.Provider value={value}>
        <CardList />
      </CreateSwitchModeContextValue.Provider>
    );

    listData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(`$${item.amount}`)).toBeInTheDocument();
    });

    const getAmount = screen.getByText(`$${listData[0].amount}`);

    fireEvent.click(getAmount);

    const findInput = await screen.findByTestId("numberInput");

    fireEvent.keyDown(findInput, {
      key: "Enter",
      target: {
        value: 1000,
      },
    });

    const getChangedAmount = screen.getByText("$1000");
    expect(getChangedAmount).toBeInTheDocument();
  });
});
