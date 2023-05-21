import { faHtml5, faJava } from "@fortawesome/free-brands-svg-icons";
import { faGears, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { FC } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./service.scss";

interface ServiceProps {}

const Service: FC<ServiceProps> = () => {
  const items = [
    {
      title: "Backend",
      content: [
        "Experienced in Java, SpringMVC, Spring Boot, Hibernate ORM.",
        "Experienced in Python and Python framework: Django, Flask.",
        "Experienced in managing, improving and optimizing SQL databases and queries.",
        "Experienced in bug tracking and tracing in Logstash and Kibana.",
      ],
      icon: faJava,
    },
    {
      title: "Frontend",
      content: [
        "Familiar with front end development by HTML and CSS.",
        "Has experience developing frontend site using ReactJS and React Typescript",
        "Familiar with developing frontend site using Angular framework.",
      ],
      icon: faHtml5,
    },
    {
      title: "Software engineer",
      content: [
        "Familiar with software development methodology, i.e Agile, Scrum.",
        "Participated in previous development teams as Scrum Master, Team Leader",
      ],
      icon: faPeopleGroup,
    },
    {
      title: "Devops",
      content: [
        "Familiar with Docker and Kubernetes",
        "Familiar with CD/CI tools for development: Git, Subversion, Jenkins, SonarQube",
        "Familiar with bug tracking configuration and report using JIRA",
      ],
      icon: faGears,
    },
  ];

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
                {items.map((item) => (
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
                        x: items.indexOf(item) % 2 === 0 ? -100 : 100,
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
