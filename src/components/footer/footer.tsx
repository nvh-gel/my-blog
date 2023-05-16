import {
   faFacebookF,
   faGithub,
   faLinkedinIn,
   faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./footer.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="copyright">Copyright © 2023. Developed by Eden</Col>
          <Col>
            <Button className="button-top">BACK TO TOP</Button>
          </Col>
          <Col className="social">
            <Button className="social-icon" variant="link">
              <FontAwesomeIcon icon={faFacebookF} />
            </Button>
            <Button className="social-icon" variant="link">
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button className="social-icon" variant="link">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Button>
            <Button className="social-icon" variant="link">
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
