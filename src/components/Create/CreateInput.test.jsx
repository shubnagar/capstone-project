import { render } from "@testing-library/react";
import CreateInput from "./CreateInput";

describe("Loading Create Input", () => {
  test("Passing Value without error", () => {
    render(
      <CreateInput
        errorMsg=""
        register={{}}
        type="number"
        placeholder="Enter Name"
      />
    );
  });

  test("Passing Value with error", () => {
    render(
      <CreateInput
        errorMsg="Enter atleast 10 number"
        register={{}}
        type="number"
        placeholder="Enter Name"
      />
    );
  });
});
