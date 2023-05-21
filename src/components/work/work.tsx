import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import WorkData from "../../interface/work";
import Card from "react-bootstrap/esm/Card";

interface WorkProps {
  works: WorkData[];
}

const Work: FC<WorkProps> = (props) => {
  return (
    <div data-testid="Work">
      <div className="headline">
        <p>Recent Works</p>
      </div>
      <Row>
        <Col>
          <div className="triangle" />
        </Col>
      </Row>
      {props.works.map((work: WorkData) => (
        <Row key={work.id}>
          <Col sm={2}>
            <FontAwesomeIcon icon={work.icon} />
          </Col>
          <Col sm={9}>
            <Card>
              <h3>{work.title}</h3>
              <Image src={work.img} />
              <p>{work.desc}</p>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Work;
