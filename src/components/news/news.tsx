import { FC } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import NewsData from "../../interface/news";
import "./news.scss";

interface NewsProps {
  news: NewsData[];
}

const News: FC<NewsProps> = (props) => (
  <div data-testid="News">
    <Container>
      <Carousel pause="hover">
        {props.news.map((n) => (
          <Carousel.Item key={n.title}>
            <Image src={n.img} />
            <div className="news-headline">
              <a href={n.url} target="_blank" rel="noreferrer">
                <h2>{n.title}</h2>
              </a>
              <p>{n.content}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  </div>
);

export default News;
