import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import News from "./news";

describe("<News />", () => {
  test("it should mount", () => {
    render(<News news={[]}/>);

    const news = screen.getByTestId("News");

    expect(news).toBeInTheDocument();
  });
});
