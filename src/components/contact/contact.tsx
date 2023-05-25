import { Button, Col, Form, Input, Row } from "antd";
import { FC } from "react";
import "./contact.scss";
import TextArea from "antd/es/input/TextArea";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  function handleSend(e: any): void {
    e.preventDefault();
    alert("Function is not yet implemented, please return to it later.");
  }

  return (
    <div id="contact">
      <div className="headline">
        <p>Send us a message</p>
      </div>
      <Row justify="center">
        <div className="triangle" />
      </Row>
      <Row justify="center">
        <Col sm={14}>
          <Form className="contact-form">
            <Row justify="space-between">
              <Col span={7}>
                <Input placeholder="Name" name="name" />
              </Col>
              <Col span={7}>
                <Input type="email" placeholder="Email" name="name" />
              </Col>
              <Col span={7}>
                <Input placeholder="Subject" name="subject" />
              </Col>
            </Row>
            <Row>
              <TextArea placeholder="Message" rows={7}/>
            </Row>
            <Button
              className="send-button"
              htmlType="submit"
              onClick={handleSend}
              size="large"
            >
              SEND NOW
            </Button>
          </Form>
        </Col>
        <Col sm={6}>
          <div className="about">
            <h3>More about us!</h3>
            <p>
              We can be reached through email our phone number via submitting
              email, call or message to
            </p>
            <p>
              <b>Mailing Address: </b>
              <i>
                Lac Long Quan Street, Tan Binh District, Ho Chi Minh City,
                Vietnam
              </i>
            </p>
            <p>
              <b>Tel: </b>
              <i>+84776798665</i>
            </p>
            <p>
              <b>Email: </b>
              <i>nvhien2703@outlook.com</i>
            </p>
            <p>Looking forward to a chance to work with you.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
