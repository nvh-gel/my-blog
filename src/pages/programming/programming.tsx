import { FC } from "react";
import Header from "../../components/header/header.lazy";
import News from "../../components/news/news.lazy";
import Practice from "../../components/practice/Practice.lazy";
import Work from "../../components/work/work.lazy";
import { programmingMenu } from "../../configs/menu-items";
import { newsData, workData } from "../../mock/mock-data";
import "./programming.scss";

interface ProgrammingProps {}

const Programming: FC<ProgrammingProps> = () => (
  <div data-testid="Programming">
    <Header items={programmingMenu} />
    <News news={newsData} />
    <Work works={workData} />
    <Practice />
  </div>
);

export default Programming;
