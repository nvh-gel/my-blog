import { FC } from "react";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import { guideData } from "../../mock/mock-data";
import "./guideline.scss";

interface GuidelineProps {}

const Guideline: FC<GuidelineProps> = () => {
  function changeImgSrc(event: any, src: string): void {
    const target = event.target;
    target.src = src;
  }

  return (
    <div data-testid="Guildline">
      <div className="headline" id="practices">
        <p>Coding Practices</p>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="triangle" />
          </Col>
        </Row>
        <Row className="guide-content">
          {guideData.map((guide) => (
            <Col sm={4} key={guide.id}>
              <Card
                className="guide-item"
                onClick={() => alert("Under implementation.")}
              >
                <Card.Body style={{ padding: 0 }}>
                  <Image
                    src={guide.img}
                    className="guide-thumbnail"
                    onMouseEnter={(event) => changeImgSrc(event, guide.hover)}
                    onMouseLeave={(event) => changeImgSrc(event, guide.img)}
                  />
                </Card.Body>
                <Card.Footer className="guide-title">{guide.title}</Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Guideline;
