import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

test("renders label text", () => {
  render(<Label text="Username" />);
  expect(screen.getByText("Username")).toBeInTheDocument();
});
