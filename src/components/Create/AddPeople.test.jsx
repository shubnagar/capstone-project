import { fireEvent, screen } from "@testing-library/react";
import { renderWithClient } from "../../test/utils";
import AddPeople from "./AddPeople";

describe("Load add people component", () => {
  test("Click Button to create display form", async () => {
    renderWithClient(<AddPeople />);

    const addPeopleBtn = screen.getByRole("button", {
      name: "Add People",
    });

    fireEvent.click(addPeopleBtn);
    
    const addPeopleFormText = await screen.findByText("Add People Form")
    expect(addPeopleFormText).toBeInTheDocument(0)

  });
});
