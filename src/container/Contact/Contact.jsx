import React, { useState } from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Contact.scss";
import Emailsvg from "../../assets/email.json";
import Lottie from "lottie-react";
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
// import {BsTwitter} from 'react-icons/bs'
// import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="footer__outercontainer">
      <div className="animated-email-svg">
        <Lottie animationData={Emailsvg} loop={true} />
      </div>

      <h2 className="head-text contact-heading">Get in Touch</h2>
      <div className="app__footer-container">
        <motion.div
          whileInView={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 2.4 }}
          className="app__footer-cards"
        >
          <div className="app__footer-card ">
            <IoIosMail
              style={{ color: "#727227", opacity: 0.9 }}
              className="mail-icon"
            />
            <a
              href="mailto:harshshukla2807@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-text"
            >
              harshshukla2807@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <IoLogoWhatsapp className="whatsapp-icon" />
            <a
              href="https://api.whatsapp.com/send?phone=917982826918&text=Hello, more information!"
              target="_blank"
              rel="noreferrer"
              className="p-text"
            >
              +91-7982826918
            </a>
          </div>
          <div className="app__footer-card">
            <FaGithub color="black" className="github-icon" />
            <a
              href="https://github.com/harshshukla2807"
              target="_blank"
              rel="noreferrer"
              className="p-text"
            >
              @github/harshshukla2807
            </a>
          </div>
        </motion.div>
        {!isFormSubmitted ? (
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.6}}
            className="app__footer-form app__flex"
          >
            <div className="app__flex">
              <input
                className="p-text"
                required
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <input
                className="p-text"
                type="email"
                required
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex">
              <textarea
                className="p-text"
                placeholder="Your Message"
                required
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </motion.div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Contact, "app__footer"),
  "contact",
  "app__primarybg"
);
