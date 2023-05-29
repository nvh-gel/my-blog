import { Col, Row } from "antd";
import { FC } from "react";

interface ReadProps {}

const Read: FC<ReadProps> = () => (
  <div data-testid="Read">
    <Row justify="center" id="future">
      <Col span={24}>
        <div className="headline">
          <p>Future Reads</p>
        </div>
      </Col>
    </Row>
    <Row justify="center">
      <div className="triangle" />
    </Row>
    Read Component
  </div>
);

export default Read;
