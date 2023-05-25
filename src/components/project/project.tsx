import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image, Row, Space } from "antd";
import { motion } from "framer-motion";
import { FC } from "react";
import { projectData } from "../../mock/mock-data";
import "./project.scss";

interface ProjectProps {}

const Project: FC<ProjectProps> = () => {
  const image = "https://source.unsplash.com/random/1920x300/?project,blur";

  return (
    <div id="project">
      <div style={{ backgroundImage: `url(${image})` }}>
        <Space
          className="cover project-cover"
          direction="vertical"
          align="center"
        >
          <h2>Projects</h2>
          <h3>What we have done</h3>
        </Space>
      </div>
      <div className="headline">
        <p>Latest work</p>
      </div>
      <Row justify="center">
        <div className="triangle" />
      </Row>
      <Row justify="center">
        <section id="cd-timeline-project" className="cd-container">
          {projectData.map((project, id) => (
            <div className="cd-timeline-block" key={project.title}>
              <motion.div
                className="cd-timeline-img"
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={faCode} />
              </motion.div>
              <motion.div
                className="cd-timeline-content projects"
                initial={{ opacity: 0, x: id % 2 === 0 ? -100 : 100 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Image src={project.img} loading="lazy"/>
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p>{project.date}</p>
                </div>
                <div className="project-desc">
                  <b>{project.role.toUpperCase()}</b>
                  <p>{project.desc[0]}</p>
                  <p>{project.desc[1]}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </section>
      </Row>
    </div>
  );
};

export default Project;
