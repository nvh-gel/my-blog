import { Carousel, Col, Image, Row, Space } from "antd";
import Link from "antd/es/typography/Link";
import { FC } from "react";
import NewsData from "../../interface/news";
import "./news.scss";

interface NewsProps {
  news: NewsData[];
}

const News: FC<NewsProps> = (props) => (
  <div data-testid="News">
    <Row justify="center" className="news" id="news">
      <Col span={20}>
        <Carousel
          slidesToShow={3}
          prefixCls="carousel-item"
          infinite={false}
          dotPosition="top"
        >
          {props.news.map((n) => (
            <Space className="carousel-item" key={n.id}>
              <Image src={n.img} preview={false} />
              <Space className="overlay" direction="vertical">
                <Link href={n.url} target="_blank">
                  <h3>{n.title}</h3>
                  <p>{n.content.substring(0, 100) + "..."}</p>
                </Link>
              </Space>
            </Space>
          ))}
        </Carousel>
      </Col>
    </Row>
  </div>
);

export default News;
