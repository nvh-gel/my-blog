import React from "react";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import Modal from "react-bootstrap/esm/Modal";
import Row from "react-bootstrap/esm/Row";
import GuideData from "../../interface/guide";
import { guideData } from "../../mock/mock-data";
import "./guideline.scss";

interface GuidelineProps {}

interface GuidelineState {
  showCurrentWatch: boolean;
  currentWatch: GuideData | undefined;
}

class Guideline extends React.Component<GuidelineProps, GuidelineState> {
  constructor(props: GuidelineProps) {
    super(props);
    this.state = {
      showCurrentWatch: false,
      currentWatch: undefined,
    };

    this.handleWatch = this.handleWatch.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  changeImgSrc(event: any, src: string): void {
    const target = event.target;
    target.src = src;
  }

  handleWatch(guide: GuideData): void {
    this.setState({
      showCurrentWatch: true,
      currentWatch: guide,
    });
  }

  handleClose(e: any) {
    this.setState({
      showCurrentWatch: false,
      currentWatch: undefined,
    });
  }

  render(): React.ReactNode {
    return (
      <div data-testid="Guildline">
        <div className="headline" id="practices">
          <p>Coding Practices</p>
        </div>
        <Container>
          <Modal show={this.state.showCurrentWatch} size="xl">
            <Modal.Header closeButton onClick={this.handleClose}>
              <Modal.Title>{this.state.currentWatch?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                <iframe
                  className="video-player"
                  src={this.state.currentWatch?.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </Container>
            </Modal.Body>
          </Modal>
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
                  onClick={() => this.handleWatch(guide)}
                >
                  <Card.Body style={{ padding: 0 }}>
                    <Image
                      src={guide.img}
                      className="guide-thumbnail"
                      onMouseEnter={(event) =>
                        this.changeImgSrc(event, guide.hover)
                      }
                      onMouseLeave={(event) =>
                        this.changeImgSrc(event, guide.img)
                      }
                    />
                  </Card.Body>
                  <Card.Footer className="guide-title">
                    {guide.title}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Guideline;
