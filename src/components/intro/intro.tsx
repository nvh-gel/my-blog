import {
  faBookOpen,
  faCode,
  faGamepad,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./intro.scss";

interface IntroProps {}

const Intro: FC<IntroProps> = () => {
  const image = "https://source.unsplash.com/random/1920x600/?blur";

  return (
    <div
      id="intro"
      className="intro"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Container>
        <Row className="cover intro-row">
          <Col className="intro-icon">
            <FontAwesomeIcon icon={faCode} />
            <h3>Programing</h3>
          </Col>
          <Col className="intro-icon">
            <FontAwesomeIcon icon={faRoute} />
            <h3>Travel</h3>
          </Col>
          <Col className="intro-icon">
            <FontAwesomeIcon icon={faBookOpen} />
            <h3>Reading</h3>
          </Col>
          <Col className="intro-icon">
            <FontAwesomeIcon icon={faGamepad} />
            <h3>Gaming</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
