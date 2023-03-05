import React from "react";
import { render, getByTestId } from "@testing-library/react";
import Home from "../pages";


test("renders App", () => {
  
  const {container} = render(<Home />);
  const textAreaLabel = getByTestId(container, "numericodeTextArea");
  
  expect(textAreaLabel.textContent).toBe("");

});
