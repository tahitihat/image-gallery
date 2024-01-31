import { render, screen } from "@testing-library/react";
import ImageCards from "./ImageCards";

test("renders learn react link", () => {
  const testImageArr = ["test1.jpg", "test2.jpg", "test3.jpg"];
  render(<ImageCards images={testImageArr} />);
  const imageCards = screen.getAllByText("Ups: 0");
  expect(imageCards.length).toBe(3);
});
