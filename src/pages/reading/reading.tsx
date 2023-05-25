import { FC } from "react";
import Header from "../../components/header/header.lazy";
import { readingMenu } from "../../configs/menu-items";

interface ReadingProps {}

const Reading: FC<ReadingProps> = () => (
  <div data-testid="Reading">
    <Header items={readingMenu} />
    <h2 style={{paddingTop: '60px'}}>Reading Page is under construction. Please come back later.</h2>
  </div>
);

export default Reading;
