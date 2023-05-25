import {
  faBookOpen,
  faGamepad,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "antd";
import { FC } from "react";
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
      <Row className="cover intro-row" justify="space-evenly">
        <Col className="intro-icon">
          <a href={`${process.env.PUBLIC_URL}/#/programming`}>
            <FontAwesomeIcon icon={faLaptopCode} />
            <h3>Programmings</h3>
          </a>
        </Col>
        <Col className="intro-icon">
          <a href={`${process.env.PUBLIC_URL}/#/reading`}>
            <FontAwesomeIcon icon={faBookOpen} />
            <h3>Readings</h3>
          </a>
        </Col>
        <Col className="intro-icon">
          <a href={`${process.env.PUBLIC_URL}/#/gaming`}>
            <FontAwesomeIcon icon={faGamepad} />
            <h3>Gamings</h3>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Intro;
