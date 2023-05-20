import { FC } from "react";
import Header from "../../components/header/header.lazy";
import { readingMenu } from "../../menu-items";

interface ReadingProps {}

const Reading: FC<ReadingProps> = () => (
  <div data-testid="Reading">
    <Header items={readingMenu} />
    <h2>Reading Page is under construction. Please come back later.</h2>
  </div>
);

export default Reading;
