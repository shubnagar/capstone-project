import { fireEvent, renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithClient } from "../../test/utils";
import AddPeopleForm from "./AddPeopleForm";

describe("Add People Form Component", () => {
  test("Fill the from", async () => {
    renderWithClient(<AddPeopleForm />);

    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const usernameInput = screen.getByPlaceholderText("Username");
    const phoneInput = screen.getByPlaceholderText("Phone Number");

    const createButon = screen.getByRole("button", {
      name: "Create",
    });
    fireEvent.click(createButon);

    //name
    expect(
      await screen.findByText("name is a required field")
    ).toBeInTheDocument();
    userEvent.type(nameInput, "Shubham");
    fireEvent.click(createButon);

    //email
    expect(
      await screen.findByText("email is a required field")
    ).toBeInTheDocument();
    userEvent.type(emailInput, "emailemail.com");
    fireEvent.click(createButon);
    expect(
      await screen.findByText("email must be a valid email")
    ).toBeInTheDocument();
    userEvent.type(emailInput, "email@email.com");

    userEvent.type(usernameInput, "shubnagar");
    userEvent.type(phoneInput, "123456789");
    expect(
      await screen.findByText("phone must be at least 10 characters")
    ).toBeInTheDocument();
    userEvent.type(phoneInput, "1234567890");
  });
});
