import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Image, Row } from "antd";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import { FC, useState } from "react";
import WorkData from "../../interface/work";
import "./work.scss";

interface WorkProps {
  works: WorkData[];
}

const Work: FC<WorkProps> = (props) => {
  const [expandedList, setExpandedList] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const bookmarkVariants = {
    closed: { backgroundColor: "#eee", top: "-10px" },
    expanded: {
      rotate: [0, 0, 90],
      top: ["0px", "-30px", "-60px"],
      left: ["-20px", "-20px", "0px"],
      backgroundColor: "#98d361",
    },
  };
  const fullContentVariants = {
    closed: { height: "0px", display: "none" },
    expanded: {},
  };

  function handleExpand(idx: number): void {
    let newList = expandedList.slice();
    newList[idx] = !newList[idx];
    setExpandedList(newList);
  }

  return (
    <div data-testid="Work">
      <div className="headline" id="works">
        <p>Recent Works</p>
      </div>
      <Row justify="center">
        <Col>
          <div className="triangle" />
        </Col>
      </Row>
      {props.works.map((work: WorkData, idx: number) => (
        <Row key={work.id} className="work-list" justify="center">
          <Col span={20}>
            <Row className="work-overview">
              <Col sm={2}>
                <motion.div
                  className="work-bookmark"
                  animate={expandedList[idx] ? "expanded" : "closed"}
                  variants={bookmarkVariants}
                  onClick={() => handleExpand(idx)}
                >
                  <FontAwesomeIcon icon={work.icon} />
                </motion.div>
              </Col>
              <Col sm={5}>
                <div className="work-content">
                  <div className="tag">{work.cat}</div>
                  <h3>{work.title}</h3>
                </div>
              </Col>
              <Col sm={3}>
                <div className="work-content">
                  <h3>Date</h3>
                  <p>{work.date.toDateString()}</p>
                </div>
              </Col>
              <Col sm={8}>
                <div className="work-content">
                  <p>
                    {expandedList[idx]
                      ? ""
                      : parse(work.content.substring(0, 100) + "...")}
                  </p>
                </div>
              </Col>
              <Col sm={6}>
                <div className="work-thumbnail">
                  <Image src={work.img} loading="lazy" preview={false} />
                </div>
              </Col>
            </Row>
            <motion.div
              animate={expandedList[idx] ? "expanded" : "closed"}
              variants={fullContentVariants}
            >
              <Row className="work-full">
                <Col span={24}>
                  {parse(work.content)}
                </Col>
              </Row>
            </motion.div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Work;
