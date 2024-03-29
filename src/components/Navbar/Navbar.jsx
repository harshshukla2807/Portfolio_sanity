import React, { useState } from "react";
// import { images } from "../../constants";
import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
      </div>

      <ul className="app__navbar-links">
        {["home", "about", "skills", "projects", "contact"].map((item) => {
          return (
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <>
            <motion.div
              whileInView={{ x: [100, 20] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              // className="menu-container"
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => {
                    return (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                          {item}
                        </a>
                      </li>
                    );
                  }
                )}
              </ul>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
