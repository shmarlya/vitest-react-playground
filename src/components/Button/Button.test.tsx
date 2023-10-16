import React from "react";
import { render, screen } from "@testing-library/react";
import { expect, it, describe, vi } from "vitest";
import Button from "./Button";

describe("Button Component", () => {
  it("renders a button with the correct label", () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the provided onClick function when clicked", () => {
    const onClick = vi.fn();
    render(<Button label="Click me" onClick={onClick} />);
    const buttonElement = screen.getByText("Click me");
    buttonElement.click();
    expect(onClick).toHaveBeenCalled();
  });
});
