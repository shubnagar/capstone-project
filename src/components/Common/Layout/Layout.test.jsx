import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Load Layout", () => {
  test("Testing all the Layout Components", async () => {
    render(
      <MemoryRouter>
        <Layout>
          <h1>Testing layout</h1>
        </Layout>
      </MemoryRouter>
    );

    const getHeaderItems = await screen.findByText("Context Playground");

    expect(getHeaderItems).toBeInTheDocument();

    const getNavbarLinks = await screen.findByText("Dashboard");

    expect(getNavbarLinks).toBeInTheDocument();

    const getChildrenText = await screen.findByText("Testing layout");

    expect(getChildrenText).toBeInTheDocument();
  });
});
