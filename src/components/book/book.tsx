import { Col, Row } from "antd";
import { FC } from "react";

interface BookProps {}

const Book: FC<BookProps> = () => (
  <div data-testid="Book">
    <div className="headline">
      <p>Books Review</p>
    </div>
    <Row justify="center">
      <Col>
        <div className="triangle" />
      </Col>
    </Row>
    <Row justify="center">
      <Col span={20}>
        <div>AAA</div>
      </Col>
    </Row>
  </div>
);

export default Book;
