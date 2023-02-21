import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { routeData } from "../../../constant/routeData";
import NavItem from "./NavItem";

describe("NavItem Component", () => {
  test("Render NavItem", () => {
    render(
      <MemoryRouter>
        <NavItem route={routeData[0]} />
      </MemoryRouter>
    );

    expect(screen.getByText(routeData[0].name)).toBeInTheDocument();
  });
});
