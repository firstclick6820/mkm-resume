import React from 'react'
import './footer.css';

// import react Icons
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsFillBadgeCcFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
    <footer>
        <ul className="footer__permalinks">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experiences</a></li>
          <li><a href="#portfolio">Portfolio</a></li> 
          <li><a href="#services">Services</a></li>
          <li><a href="#testnimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.facebook.com/mohkhalidmomand"><FaFacebookF /></a>
          <a href="https://www.instagram.com/momand.khalid/"><FiInstagram /></a>
          <a href="https://github.com/firstclick6820"><BsGithub /></a>
          <a href="https://www.credly.com/users/mohammad-khalid-momand"><BsFillBadgeCcFill /></a>
          <a href="https://www.linkedin.com/in/khalidmomand/"><BsLinkedin /></a>
        </div>


        <div className="footer__copywrite">
          <small>&copy; MOH KHALID MOMAND. All Rights Rights Reserved.</small>
        </div>
    </footer>
    </>
  )
}

export default Footer