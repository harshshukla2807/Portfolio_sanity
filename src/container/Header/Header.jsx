import React from "react";
import "./Header.scss";
import { easeInOut, motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap } from "../../wrapper";
import { FaCircleArrowDown } from "react-icons/fa6";
import resume from "../../assets/harshresume-dec24.pdf"

const scaleVarients = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <motion.div
              whileInView={{ x: [-100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.8 }}
            >
              <p className="header__badge-p">
                Hello <span>👋</span>
              </p>
              <h1 className="header__badge-h1">I'm Harsh Shukla</h1>
            </motion.div>
          </div>

          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5 }}
            className="tag-cmp app__flex"
          >
            <p className="p-text">Web Developer&nbsp;|&nbsp;</p>
            <p className="p-text">Freelancer</p>
          </motion.div>

          <motion.div className="btn-row"
          whileInView={{opacity: [0, 1] }}
          transition={{ duration: 3 }}
          >
            <a href={resume} target="_blank" rel="noreferrer">
              <p>Resume</p>
              <button className="explore-button">
                <div className="arrow-icon">
                  <FaCircleArrowDown/>
                </div>
              </button>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app_header-img"
      >
        <img src={images.harsh5} alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: easeInOut }}
          src={images.circle}
          alt="profile__circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVarients}
        whileInView={scaleVarients.whileInView}
        className="app__header-circles"
      >
        {[images.tailwind, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp, app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
