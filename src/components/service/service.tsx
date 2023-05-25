import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import { FC } from "react";
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
        <Row justify="center">
          <Col>
            <div className="triangle" />
          </Col>
        </Row>
        <Row justify="center">
          <Col sm={24}>
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
      </div>
    </div>
  );
};
export default Service;
