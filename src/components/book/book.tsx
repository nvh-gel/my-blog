import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel, Col, Image, Row } from "antd";
import { FC } from "react";
import { bookReviewData } from "../../mock/mock-data";
import "./book.scss";

interface BookProps {}

const Book: FC<BookProps> = () => (
  <div data-testid="Book">
    <div className="headline" id="reviews">
      <p>Reviews</p>
    </div>
    <Row justify="center">
      <Col>
        <div className="triangle" />
      </Col>
    </Row>
    {bookReviewData.map((review, index) => (
      <Row
        key={review.id}
        justify="center"
        className="review"
        style={{
          backgroundImage: `url(${"img/strip-bg-0" + (index + 1) + ".jpg"})`,
        }}
      >
        {index % 2 === 0 ? (
          <Col span={10} className="thumbnail">
            <Row className="thumb-row" align="middle">
              <Col span={6} className="thumb-span" />
              <Col span={18}>
                <Image src={review.img} preview={false} />
              </Col>
            </Row>
          </Col>
        ) : (
          ""
        )}
        <Col span={14}>
          <Row className="content">
            {index % 2 === 1 ? <Col span={4} /> : ""}
            <Col span={20}>
              <h2>{review.title}</h2>
              <p className="description">{review.description}</p>
              <Row>
                <Col span={12}>
                  <p>
                    <b>Published date: </b>
                    {review.publishedDate.toLocaleDateString()}
                  </p>
                </Col>
                <Col span={12}>
                  <p>
                    <b>Completed on: </b>
                    {review.completedDate.toLocaleDateString()}
                  </p>
                </Col>
              </Row>
              <p>
                <b>Personal thoughts:</b>
              </p>
              <p>{review.review}</p>
              {/* <Row justify="space-evenly">

              </Row> */}
              <Carousel
                slidesToShow={3}
                autoplay
                dots={false}
                className="public-reviews"
              >
                {review.others.map((r) => (
                  <div key={r.id} className="other-review">
                    <FontAwesomeIcon icon={faQuoteRight} />
                    <p>
                      <i>&ldquo;{r.review}&rdquo;</i>
                    </p>
                    <p className="author">- {r.author}</p>
                  </div>
                ))}
              </Carousel>
            </Col>
            {index % 2 === 0 ? <Col span={4} /> : ""}
          </Row>
        </Col>
        {index % 2 === 1 ? (
          <Col span={10} className="thumbnail">
            <Row className="thumb-row" align="middle">
              <Col span={18}>
                <Image src={review.img} preview={false} />
              </Col>
              <Col span={6} className="thumb-span" />
            </Row>
          </Col>
        ) : (
          ""
        )}
      </Row>
    ))}
  </div>
);

export default Book;
