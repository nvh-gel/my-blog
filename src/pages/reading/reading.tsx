import { FC } from "react";
import Book from "../../components/book/book.lazy";
import Header from "../../components/header/header.lazy";
import Quote from "../../components/quote/quote.lazy";
import Read from "../../components/read/read.lazy";
import { readingMenu } from "../../configs/menu-items";

interface ReadingProps {}

const Reading: FC<ReadingProps> = () => (
  <div data-testid="Reading">
    <Header items={readingMenu} />
    <Quote />
    <Book />
    <Read />
  </div>
);

export default Reading;
