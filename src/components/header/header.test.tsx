import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("<Header />", () => {
  test("it should mount", () => {
    render(<Header items={[]} />);

    const header = screen.getByTestId("Header");

    expect(header).toBeInTheDocument();
  });
});
