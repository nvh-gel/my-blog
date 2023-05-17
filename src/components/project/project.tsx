import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { FC } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/esm/Image";
import "./project.scss";

interface ProjectProps {}

const Project: FC<ProjectProps> = () => {
  const image = "https://source.unsplash.com/random/1920x300/?project,blur";
  const projects = [
    {
      title: "TWINT",
      date: "Aug 2021 - June 2022",
      img: "https://source.unsplash.com/random/600x400/?payment",
      role: "Senior Developer",
      desc: [
        "Provide maintenance for backend core of Twint, an e-wallet application that operate in Swiss market",
        "Technology: Java, EJB, ReactJS, Hibernate, Oracle",
      ],
    },
    {
      title: "KEY CONDO",
      date: "Feb 2021 - July 2021",
      img: "https://source.unsplash.com/random/600x400/?penthouse",
      role: "Team Lead",
      desc: [
        "Implement new website for introduce, promote condo apartment for Propzy",
        "Technology: Spring Boot, Kubernetes, AWS, React Typescript, NextJS, Postgresql",
      ],
    },
    {
      title: "DASHBOARD",
      date: "Aug 2020 - Jan 2021",
      img: "https://source.unsplash.com/random/600x400/?workplace",
      role: "Senior Java Developer",
      desc: [
        "Implement features for the core backend of Propzy's system to manage propeties and services",
        "Technology: Spring MVC, Docker, MySQL, MongoDB, PHP, Laravel, ReactJS",
      ],
    },
    {
      title: "GBST",
      date: "Oct 2018 - July 2020",
      img: "https://source.unsplash.com/random/600x400/?investment",
      role: "Developer",
      desc: [
        "Provide maintenance to GBST core backend system",
        "Technology: Spring MVC, SQL Server, BackboneJS, MarionetteJS",
      ],
    },
    {
      title: "Business Monitoring",
      date: "Apr 2016 - Mar 2018",
      img: "https://source.unsplash.com/random/600x400/?dashboard",
      role: "Developer",
      desc: [
        "Implement and managing monitoring system to provide metrics and alerts for Lazada's systems",
        "Technology: Python, Flask, Java, Spring, PHP, Zend, Prometheus, Grafana",
      ],
    },
  ];

  return (
    <div id="project">
      <div style={{ backgroundImage: `url(${image})` }}>
        <Container className="cover project-cover">
          <h2>Projects</h2>
          <h3>What we have done</h3>
        </Container>
      </div>
      <div className="headline">
        <p>Latest work</p>
      </div>
      <Container>
        <div className="triangle" />
        <section id="cd-timeline-project" className="cd-container">
          {projects.map((project, id) => (
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
                <Image src={project.img} />
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
      </Container>
    </div>
  );
};

export default Project;
