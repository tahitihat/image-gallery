import { render, screen, fireEvent } from "@testing-library/react";
import ImageCard from "./ImageCard";

test("thumbs-up increments 'up count'", () => {
  render(<ImageCard imagePath="" />);
  const upButton = screen.getAllByRole("button")[0];
  const startingCount = screen.getByText("Ups: 0");
  expect(startingCount).toBeInTheDocument();

  fireEvent.click(upButton);

  const updatedCount = screen.getByText("Ups: 1");
  expect(updatedCount).toBeInTheDocument();
});
