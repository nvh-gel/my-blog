import { FC } from "react";
import Header from "../../components/header/header.lazy";
import Quote from "../../components/quote/quote.lazy";
import { readingMenu } from "../../configs/menu-items";
import Book from "../../components/book/book.lazy";

interface ReadingProps {}

const Reading: FC<ReadingProps> = () => (
  <div data-testid="Reading">
    <Header items={readingMenu} />
    <Quote />
    <Book />
  </div>
);

export default Reading;
