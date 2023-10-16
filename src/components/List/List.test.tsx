import { render, screen } from "@testing-library/react";
import List from "./List";
import { describe, it } from "vitest";

describe("List Component", () => {
  it("renders a list of items", () => {
    const items = [
      { id: 1, text: "Item 1" },
      { id: 2, text: "Item 2" },
      { id: 3, text: "Item 3" },
    ];

    render(<List items={items} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();

    items.forEach((item) => {
      const listItemElement = screen.getByText(item.text);
      expect(listItemElement).toBeInTheDocument();
    });
  });
});
