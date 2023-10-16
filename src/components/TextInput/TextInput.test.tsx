import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "./TextInput";
import { describe, it, vi } from "vitest";

describe("TextInput Component", () => {
  it("renders with initial value", () => {
    const initialValue = "Hello, World!";
    render(<TextInput value={initialValue} onChange={() => {}} />);
    const inputElement = screen.getByDisplayValue(initialValue);
    expect(inputElement).toBeInTheDocument();
  });

  it("calls the onChange function when input changes", () => {
    const handleChange = vi.fn();
    const { container } = render(
      <TextInput value="" onChange={handleChange} />
    );
    const inputElement = screen.getByRole("textbox");
    const newValue = "New Value";
    fireEvent.change(inputElement, { target: { value: newValue } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(newValue);
  });

  it("displays validation error if validation rule fails", () => {
    const validationRule = (value: string) => value.length >= 5;
    const { container } = render(
      <TextInput
        value="Short"
        onChange={() => {}}
        validationRule={validationRule}
      />
    );
    const errorElement = screen.getByTestId("error-message");
    expect(errorElement).toBeInTheDocument();
  });

  it("does not display validation error if validation rule passes", () => {
    const validationRule = (value: string) => value.length >= 5;
    const { container } = render(
      <TextInput
        value="LongEnough"
        onChange={() => {}}
        validationRule={validationRule}
      />
    );
    expect(screen.getByTestId("error-message")).toBeEmptyDOMElement();
  });
});
