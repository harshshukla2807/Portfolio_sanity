import React, { useEffect, useState } from "react";
import "./Experience.scss";
import { AppWrap, MotionWrap } from "../../wrapper";
import { motion } from "framer-motion";
import { client } from "../../client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type=="experiences"]';

    client.fetch(query).then((data) => {
      setExperience(data);
    });
  }, []);

  return (
    <div className="experience__container">
      <h2 className="head-text">
        <span>Experience</span>
      </h2>

      <motion.div className="app__skills-exp">
      {experience?.reduce((acc, exp, index, array) => {
  if (index % 2 === 0) {
    // Check if there are works at the current index and the next index
    const hasWorks = exp.works?.[0] && array[index + 1]?.works?.[0];

    if (hasWorks) {
      acc.push(
        <motion.div className="app__skills-exp-item" key={exp.year}>
          <motion.div>
            <VerticalTimeline className="vertical-timeline">
              {/* Render the first VerticalTimelineElement */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work first-child"
                contentArrowStyle={{ borderRight: "16px solid rgb(49 59 172)" }}
                iconStyle={{ background: "#343434", color: "#fff" }}
              >
                <h2 className="vertical-timeline-element-title">
                  {exp.works[0].name}
                </h2>
                <h5 className="vertical-timeline-element-title">
                  {exp.works[0].company}
                </h5>
                <p>{exp.works[0].desc}</p>
              </VerticalTimelineElement>

              {/* Render the second VerticalTimelineElement */}
              <VerticalTimelineElement
                className="vertical-timeline-element--work second-child"
                contentArrowStyle={{ borderRight: "16px solid rgb(49 59 172)" }}
                iconStyle={{ background: "#343434", color: "#fff" }}
              >
               <h2 className="vertical-timeline-element-title">
                  {array[index + 1].works[0].name}
                </h2>
                <p>{array[index + 1].works[0].desc}</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </motion.div>
        </motion.div>
      );
    }
  }
  return acc;
}, [])}

      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Experience, "app__experience"),
  "experience",
  "app__primarybg"
);
