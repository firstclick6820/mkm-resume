import React from 'react'
import './navbar.css';

// Import React Components
import {useState} from 'react';


// Import Icons
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {TbCertificate} from 'react-icons/tb';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#home")
  return (
    <nav>

      {/* Home Page Link */}
        <a 
          href="#home" 
          onClick={()=> setActiveNav('#home')}
          className={activeNav === "#home" ? 'active ' : ''}>
            <AiOutlineHome /></a>



      {/* About Page Link */}
        <a 
          href="#about" 
          onClick={ () => setActiveNav('#about')}
          className={activeNav === "#about" ? 'active' : ' '}>
            <BiUserCircle /></a>

  
      {/* Services Page Link */}
      <a 
            href="#services"
            onClick={()=> setActiveNav('#services')}
            className={activeNav === "#services" ? 'active' : ''}>
              <RiServiceLine /></a>


      {/* Portfolio Page Link */}

        <a 
        href="#portfolio"
        onClick={()=> setActiveNav('#portfolio')}
        className={activeNav === "#portfolio" ? 'active' : ''}>
          <BiBook /></a>


        {/* Certificate Section Link */}
        <a 
        href="#certificate"
        onClick={()=> setActiveNav('#certificate')}
        className={activeNav === "#certificate" ? 'active' : ''}>
          <TbCertificate /></a>



          {/* Conatact Page Link */}
        <a 
        href="#contact"
        onClick={()=> setActiveNav('#contact')}
        className={activeNav === "#contact" ? 'active': ''}>
          <BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navbar