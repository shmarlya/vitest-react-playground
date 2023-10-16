import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Link from "./Link";
import { describe, it } from "vitest";

describe("Link Component", () => {
  it("renders a link with the provided text", () => {
    render(
      <BrowserRouter>
        <Link to="/path">Link Text</Link>
      </BrowserRouter>
    );

    const linkElement = screen.getByText("Link Text");
    expect(linkElement).toBeInTheDocument();
  });

  it("navigates to the specified path", () => {
    render(
      <BrowserRouter>
        <Link to="/path">Link Text</Link>
      </BrowserRouter>
    );

    const linkElement = screen.getByText("Link Text");

    // Simulate a click event to navigate
    fireEvent.click(linkElement);

    // You can add assertions here to verify the navigation behavior, e.g., check the current URL.
  });
});
