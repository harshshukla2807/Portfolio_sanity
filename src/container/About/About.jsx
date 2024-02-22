import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
// import { images } from '../../constants'
import client from "../../client";
import { urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import devani from '../../assets/Development.json'
import Lottie from "lottie-react";

// const abouts=[
//   {title:'Frontend Web developer', description:'I am a webdeveloper', imgUrl: images.about01},
//   {title:'Content Creator', description:'I am a webdeveloper', imgUrl: images.about02},
//   {title:'Blogger', description:'I am a webdeveloper', imgUrl: images.about04}
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    async function getPosts() {
      const posts = await client.fetch(query);
      setAbouts(posts);
    }
    getPosts();
  }, []);
  return (
    <>
    <div className="animated-svg">
        <Lottie animationData={devani} loop={true} />
    </div>

    <div className="about-container">
      <h2 className="head-text about-head-text">
        About <span>Me</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween"}}
            className="about__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 1 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about")
  , "about",'app__whitebg');
