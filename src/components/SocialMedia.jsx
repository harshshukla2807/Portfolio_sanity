import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedin } from 'react-icons/fa'
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/harshshukla2807"  target="_blank"  rel="noreferrer">
            <FaGithub/>
            </a>
        </div>
        <div>
          <a href="https://twitter.com/Harsh_stwt"  target="_blank"  rel="noreferrer">
            <FaSquareXTwitter/>
            </a>
        </div>
        <div>
        <a href="https://www.linkedin.com/in/harsh-shukla-275119218/"  target="_blank"  rel="noreferrer">
            <FaLinkedin />
        </a>
        </div>
        <div>
          <a href="https://www.instagram.com/harshshukla7/"  target="_blank"  rel="noreferrer">
             <BsInstagram/>
          </a>
        </div>
    </div>
  )
}

export default SocialMedia