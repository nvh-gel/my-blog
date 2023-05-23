import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { FC } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { serviceData } from "../../mock/mock-data";
import "./service.scss";

interface ServiceProps {}

const Service: FC<ServiceProps> = () => {
  return (
    <div id="service">
      <div className="headline">
        <p>WHAT WE CAN DO</p>
      </div>
      <div className="service">
        <Container>
          <Row>
            <Col>
              <div className="triangle"></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <section id="cd-timeline-service" className="cd-container">
                {serviceData.map((item) => (
                  <div className="cd-timeline-block" key={item.title}>
                    <motion.div
                      className="cd-timeline-img"
                      initial={{ opacity: 0 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <FontAwesomeIcon icon={item.icon} />
                    </motion.div>
                    <motion.div
                      className="cd-timeline-content service-box-content"
                      initial={{
                        x: serviceData.indexOf(item) % 2 === 0 ? -100 : 100,
                        opacity: 0,
                      }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 1 }}
                      viewport={{ once: true }}
                    >
                      <h2>{item.title}</h2>
                      {item.content.map((c: string) => (
                        <p key={item.content.indexOf(c)}>{c}</p>
                      ))}
                    </motion.div>
                  </div>
                ))}
              </section>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Service;
