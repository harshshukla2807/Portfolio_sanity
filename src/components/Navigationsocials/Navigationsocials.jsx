import React, { useState } from 'react';
import './Navigationsocials.scss';
import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineShareAlt } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';


const Navigationsocials = () => {
    const [isSocialActive, setSocialActive] = useState(false);


    function OnClickSocialBtn() {
        setSocialActive(!isSocialActive);

    }

    return (
        <>
            <div id="circularMenu" className={` circular-menu-social ${isSocialActive ? 'active' : ''}`}>
            <button className="floating-btn" onClick={OnClickSocialBtn}>
    <i><AiOutlineShareAlt /></i>
</button>

                <menu className="items-wrapper">
                    <a href="https://github.com/harshshukla2807" target="_blank" rel="noreferrer" className="menu-item "><AiFillGithub /> </a>
                    <a href="https://www.linkedin.com/in/harsh-shukla-275119218/" target="_blank" rel="noreferrer" className="menu-item "><AiOutlineLinkedin /> </a>
                    <a href="https://www.instagram.com/harshshukla7/" target="_blank" rel="noreferrer" className="menu-item "><AiOutlineInstagram /> </a>
                    <a href="https://twitter.com/Harsh_stwt" target="_blank" rel="noreferrer" className="menu-item "><BsTwitter/> </a>
                </menu>
            </div>


        </>

    )
}

export default Navigationsocials;