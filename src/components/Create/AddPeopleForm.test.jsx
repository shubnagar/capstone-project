/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithClient } from "../../test/utils";
import AddPeopleForm from "./AddPeopleForm";

describe("Add People Form Component", () => {
  test("Fill the from", async () => {
    const { container } = renderWithClient(<AddPeopleForm />);

    const nameInput = screen.getByPlaceholderText("Name");
    const emailInput = screen.getByPlaceholderText("Email");
    const usernameInput = screen.getByPlaceholderText("Username");
    const phoneInput = screen.getByPlaceholderText("Phone Number");

    fireEvent.blur(nameInput, {
      target: {
        value: "email",
      },
    });

    fireEvent.blur(emailInput, {
      target: {
        value: "email@email.com",
      },
    });
    fireEvent.blur(usernameInput, {
      target: {
        value: "email",
      },
    });
    fireEvent.blur(phoneInput, {
      target: {
        value: "1234567890",
      },
    });

    const form = container.querySelector("form");
    fireEvent.submit(form);

    await waitFor(() => {
      expect(
        screen.getByText("Created record successfully")
      ).toBeInTheDocument();
    });
  });

  test("Input Email and Phone Error", async () => {
    renderWithClient(<AddPeopleForm />);

    const emailInput = screen.getByPlaceholderText("Email");
    const phoneInput = screen.getByPlaceholderText("Phone Number");

    fireEvent.blur(emailInput, {
      target: {
        value: "email.com",
      },
    });

    expect(
      await screen.findByText("email must be a valid email")
    ).toBeInTheDocument();

    fireEvent.blur(phoneInput, {
      target: {
        value: "123",
      },
    });

    expect(
      await screen.findByText("phone must be at least 10 characters")
    ).toBeInTheDocument();
  });
});
