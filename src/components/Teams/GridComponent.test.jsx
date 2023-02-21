/* eslint-disable testing-library/prefer-screen-queries */
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { API_URL } from "../../apiServices/apiConfig";
import { server } from "../../setupTests";
import { renderWithClient } from "../../test/utils";
import GridComponent from "./GridComponent";

describe("Grid component", () => {
  test("Testing ag grid data table", async () => {
    renderWithClient(<GridComponent />);

    // eslint-disable-next-line testing-library/prefer-query-by-disappearance
    await waitForElementToBeRemoved(screen.getByText("Loading..."));

    const findUsername = await screen.findByText("IfdYRrE539");
    expect(findUsername).toBeInTheDocument();

    const lastPhoneNumber = await screen.findByText("9567359447");
    expect(lastPhoneNumber).toBeInTheDocument();

    const clearSelectionbutton = await screen.findByRole("button", {
      name: "De-select",
    });

    userEvent.click(findUsername, {
      type: "cellClicked",
      value: "IfdYRrE539",
    });
    userEvent.click(clearSelectionbutton);
  });

  test("failure query component", async () => {
    let errorCode = 404;
    server.use(
      rest.get(`${API_URL}/user`, (req, res, ctx) => {
        return res(ctx.status(errorCode));
      })
    );

    // eslint-disable-next-line testing-library/render-result-naming-convention
    const result = renderWithClient(<GridComponent />);

    const findAllErrors = await result.findAllByText(
      `Request failed with status code ${errorCode}`
    );

    expect(findAllErrors[0]).toBeInTheDocument();
    expect(findAllErrors[1]).toBeInTheDocument();
  });
});
