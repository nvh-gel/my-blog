import { Carousel, Col, Image, Row, Space } from "antd";
import { FC } from "react";
import "./book.scss";

interface BookProps {}

const Book: FC<BookProps> = () => (
  <div data-testid="Book">
    <div className="headline">
      <p>Reviews</p>
    </div>
    <Row justify="center">
      <Col>
        <div className="triangle" />
      </Col>
    </Row>
    <Row justify="center">
      <Col span={20}>
        <Carousel className="reviews">
          <Space className="review-item">
            <Row justify="space-between">
              <Col span={8} className="book-image">
                <Image
                  src="https://static01.nyt.com/images/2023/02/07/books/07salman-rushdie-cover/07salman-rushdie-cover-jumbo.jpg"
                  preview={false}
                />
              </Col>
              <Col span={8} />
              <Col span={16}>
                <Row className="decorator" align="middle" justify="center">
                  {/* <Col span={24} offset={2}> */}
                    <h2>&nbsp;</h2>
                  {/* </Col> */}
                </Row>
                <Row className="review-detail">
                  <Col span={24}>
                    <h2>VICTORY CITY</h2>
                  </Col>
                  <br />
                  <h4>Author: Salman Rushdie</h4>
                  <p>
                    Rushdie's new novel recounts the long life of Pampa Kampana,
                    who creates an empire from magic seeds in 14th-century
                    India. Her world is one of peace, where men and women are
                    equal and all faiths welcome, but the story Rushdie tells is
                    of a state that forever fails to live up to its ideals.
                  </p>
                  <Row style={{ width: "100%" }}>
                    <Col span={12}>
                      <h4>Published: 2018</h4>
                    </Col>
                    <Col span={12}>
                      <h4>Completed on: 2023-01-23</h4>
                    </Col>
                  </Row>
                  <h4>Personal Thoughts</h4>
                  <p>
                    Essentially political concerns have always been embedded —
                    embodied — in the play of Rushdie's own style, in the
                    irreverent exhilaration of a prose that works by piling one
                    thing upon another, a digressive grammatical plenitude in
                    which there is room for all.
                  </p>
                  <Row justify="space-evenly">
                    <Col span={7} className="other-review">
                      <p>
                        <i>
                          &ldquo;A grand entertainment, in a tale with many
                          strands, by an ascended master of modern
                          legends.&rdquo;
                        </i>
                      </p>
                      <p className="reviewer">- Kirkus Review</p>
                    </Col>
                    <Col span={7} className="other-review">
                      <p>
                        In his first novel since last summer's brutal on-stage
                        attack, Salman Rushdie's exuberant writing remains a
                        source of pleasure
                      </p>
                      <p className="reviewer">- The Independent</p>
                    </Col>
                    <Col span={7} className="other-review">
                      <p>
                        With Victory City, Salman Rushdie delivers not so much a
                        masterpiece as a plea for humanity
                      </p>
                      <p className="reviewer">- The Globe and Mail</p>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
          </Space>
        </Carousel>
      </Col>
    </Row>
  </div>
);

export default Book;
