import React from 'react'


// Import React Icons
import {BsLinkedin} from 'react-icons/bs'
import {CiFacebook} from 'react-icons/ci'
import {BsDribbble} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="#contact"><BsLinkedin /></a>
        <a href="#contact"><CiFacebook /></a>
        <a href="#contact"><BsDribbble /></a>
       
    </div>
  )
}

export default HeaderSocial;