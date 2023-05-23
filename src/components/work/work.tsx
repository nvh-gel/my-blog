import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import WorkData from "../../interface/work";
import "./work.scss";

interface WorkProps {
  works: WorkData[];
}

const Work: FC<WorkProps> = (props) => {
  return (
    <div data-testid="Work">
      <div className="headline" id="works">
        <p>Recent Works</p>
      </div>
      <Container>
        <Row>
          <Col>
            <div className="triangle" />
          </Col>
        </Row>
        {props.works.map((work: WorkData) => (
          <Row key={work.id} className="work-list">
            <Container>
              <Row className="work-overview">
                <Col sm={1}>
                  <div className="work-bookmark">
                    <FontAwesomeIcon icon={work.icon} />
                  </div>
                </Col>
                <Col sm={2}>
                  <div className="work-content">
                    <div className="tag">{work.cat}</div>
                    <h3>{work.title}</h3>
                  </div>
                </Col>
                <Col sm={2}>
                  <div className="work-content">
                    <h3>Date</h3>
                    <p>{work.date.toDateString()}</p>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="work-content">
                    <p>{work.content.substring(0, 100)}...</p>
                  </div>
                </Col>
                <Col sm={3}>
                  <div className="work-thumbnail">
                    <Image src={work.img} />
                  </div>
                </Col>
              </Row>
              <Row className="work-full">
                <Col sm={12}>
                  <p>{work.content}</p>
                </Col>
              </Row>
            </Container>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Work;
