import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  test("renders button text", () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText("Test Button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("button is disabled when disabled prop is true", () => {
    render(<Button label="Disabled" disabled />);
    const buttonElement = screen.getByText("Disabled");
    expect(buttonElement).toBeDisabled();
  });
});