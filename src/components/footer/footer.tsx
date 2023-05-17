import {
  faFacebookMessenger,
  faGithub,
  faLinkedinIn,
  faTwitter,
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
  function handleBackToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="copyright">
            Copyright © 2023. Designed by{" "}
            <a
              href="https://templatemo.com/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              templatemo
            </a>
            , implemented by Eden.
          </Col>
          <Col>
            <Button className="button-top" onClick={handleBackToTop}>
              BACK TO TOP
            </Button>
          </Col>
          <Col className="social">
            <Button
              className="social-icon"
              variant="link"
              href="https://www.messenger.com/t/100002202148814"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookMessenger} />
            </Button>
            <Button
              className="social-icon"
              variant="link"
              href="https://twitter.com/HienNV11"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button
              className="social-icon"
              variant="link"
              href="https://www.linkedin.com/in/hien-nguyen-van-389281b0/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Button>
            <Button
              className="social-icon"
              variant="link"
              href="https://github.com/nvh-gel"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
