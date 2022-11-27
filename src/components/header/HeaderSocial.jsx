import React from 'react'


// Import React Icons
import {BsLinkedin} from 'react-icons/bs'
import {SiFacebook} from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/khalidmomand/" className="glow-on-hover"><BsLinkedin /></a>
        <a href="https://github.com/firstclick6820" className="glow-on-hover"><BsGithub /></a>
        <a href="https://www.facebook.com/mohkhalidmomand" className="glow-on-hover"><SiFacebook /></a>
       
    </div>
  )
}

export default HeaderSocial;