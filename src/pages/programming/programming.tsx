import { FC } from "react";
import Header from "../../components/header/header.lazy";
import News from "../../components/news/news.lazy";
import Work from "../../components/work/work.lazy";
import { programmingMenu } from "../../menu-items";
import { newsData, workData } from "../../mock/mock-data";
import "./programming.scss";

interface ProgrammingProps {}

const Programming: FC<ProgrammingProps> = () => (
  <div data-testid="Programming">
    <Header items={programmingMenu} />
    <News news={newsData} />
    <Work works={workData} />
    {/* <Guildline /> */}
  </div>
);

export default Programming;
