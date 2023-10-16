import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect, test } from "vitest";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn vitest/i);
  expect(linkElement).toBeInTheDocument();
});
