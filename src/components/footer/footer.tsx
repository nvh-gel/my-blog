import {
  faFacebookMessenger,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Row } from "antd";
import { FC } from "react";
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
    <Row className="footer" justify="center">
      <Col className="copyright" span={6}>
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
      <Col span={7}>
        <Button className="button-top" onClick={handleBackToTop}>
          BACK TO TOP
        </Button>
      </Col>
      <Col className="social" span={6}>
        <Button
          className="social-icon"
          type="link"
          href="https://www.messenger.com/t/100002202148814"
          target="_blank"
          size="large"
        >
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </Button>
        <Button
          className="social-icon"
          type="link"
          href="https://twitter.com/HienNV11"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </Button>
        <Button
          className="social-icon"
          type="link"
          href="https://www.linkedin.com/in/hien-nguyen-van-389281b0/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </Button>
        <Button
          className="social-icon"
          type="link"
          href="https://github.com/nvh-gel"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </Button>
      </Col>
    </Row>
  );
};

export default Footer;
