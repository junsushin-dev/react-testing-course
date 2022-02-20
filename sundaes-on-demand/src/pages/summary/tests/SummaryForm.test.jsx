import SummaryForm from "../SummaryForm";
import { render, screen, fireEvent } from "@testing-library/react";

test("Checkbox is unchecked by default", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();
});

test("Checking checkbox enables button", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();
});

test("Unchecking checkbox again disables button", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", {
    name: /confirm order/i,
  });

  fireEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});
