import { FC } from "react";
import { Carousel, Image } from "react-bootstrap";
import NewsData from "../../interface/news";
import "./news.scss";

interface NewsProps {
  news: NewsData[];
}

const News: FC<NewsProps> = (props) => (
  <div data-testid="News">
    <Carousel pause="hover">
      {props.news.map((n) => (
        <Carousel.Item>
          <Image src={n.img}/>
          <div className="news-headline">
            <a href={n.url} target="_blank" rel="noreferrer">
              <h2>{n.title}</h2>
            </a>
            <p>{n.content}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </div>
);

export default News;
