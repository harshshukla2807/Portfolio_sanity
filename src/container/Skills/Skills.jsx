import React, { useEffect, useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
// import { images } from "../../constants";


const Skills = () => {
    const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]  | order(priority desc, _updatedAt desc)';

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

//   const skills = [
//     {
//        name: "React",
//        icon: images.react,
//        bgColor: "white",
//     },
//     {
//        name: "NextJs",
//        icon: images.next,
//        bgColor: "white",
//     },
//     {
//        name: "Javascript",
//        icon: images.javascript,
//        bgColor: "white",
//     },
//     {
//        name: "Typescript",
//        icon: images.typescript,
//        bgColor: "white",
//     },
//     {
//        name: "NodeJs",
//        icon: images.node,
//        bgColor: "white",
//     },
//     {
//        name: "Prisma",
//        icon: images.prisma,
//        bgColor: "white",
//     },
//     {
//        name: "Tailwind",
//        icon: images.tailwind,
//        bgColor: "white",
//     },
//     {
//        name: "Framer Motion",
//        icon: images.framermotion,
//        bgColor: "white",
//     },
//     {
//        name: "Sanity",
//        icon: images.sanity,
//        bgColor: "white",
//     },
//     {
//        name: "Docker",
//        icon: images.docker,
//        bgColor: "white",
//     },
//     {
//        name: "Redux",
//        icon: images.redux,
//        bgColor: "white",
//     },
//     {
//        name: "Sass",
//        icon: images.sass,
//        bgColor: "white",
//     },
//     {
//        name: "HTML & CSS",
//        icon: images.htmlcss,
//        bgColor: "white",
//     }
//  ];
  
  return (
    <div className="skills__maincontainer">
      <h2 className="head-text">Skills</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.icon}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Skills,'app__skills'),'skills','app__primarybg');
