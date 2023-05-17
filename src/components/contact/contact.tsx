import { FC } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Row from "react-bootstrap/esm/Row";
import "./contact.scss";

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <div id='contact'>
    <div className="headline">
      <p>Send us a message</p>
    </div>
    <Container>
      <div className="triangle" />
      <Row>
        <Col sm={8}>
          <Form className="contact-form">
            <Row>
              <Col className="input-name col-md-4">
                <Form.Control placeholder="Name" name="name" />
              </Col>
              <Col className="input-email col-md-4">
                <Form.Control type="email" placeholder="Email" name="name" />
              </Col>
              <Col className="input-subject col-md-4">
                <Form.Control placeholder="Subject" name="subject" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control
                  as="textarea"
                  rows={8}
                  name="message"
                  placeholder="Message"
                />
              </Col>
            </Row>
            <Button className="send-button" type="submit">
              SEND NOW
            </Button>
          </Form>
        </Col>
        <Col sm={4}>
          <div className="about">
            <h4>More about us!</h4>
            <p>We can be reached through email our phone number via submitting email, call or message to</p>
            <p><b>Mailing Address: </b>Lac Long Quan Street, Tan Binh District, Ho Chi Minh City, Vietnam</p>
            <p><b>Tel: </b>+84776798665</p>
            <p><b>Email: </b>nvhien2703@outlook.com</p>
            <p>Looking forward to a chance to support you.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Contact;
