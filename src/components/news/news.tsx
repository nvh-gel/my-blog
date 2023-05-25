import { FC } from "react";
import NewsData from "../../interface/news";
import "./news.scss";
import { Carousel, Space } from "antd";

interface NewsProps {
  news: NewsData[];
}

const News: FC<NewsProps> = (props) => (
  <div data-testid="News">
    <Space>
      <Carousel>
        {/* {props.news.map((n) => (
            <Image src={n.img} />
            <div className="news-headline">
              <a href={n.url} target="_blank" rel="noreferrer">
                <h2>{n.title}</h2>
              </a>
              <p>{n.content}</p>
            </div>
        ))} */}
      </Carousel>
    </Space>
  </div>
);

export default News;
