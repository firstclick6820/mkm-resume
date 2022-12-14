import React from 'react'
import './header.css';


// Import Images
import PROFILE3 from '../../assets/images/PROFILE3.png';


// Import custom components
import CTA from '../general/CTA';
import HeaderSocial from './HeaderSocial';
import ANIMATION from '../general/ANIMATION';



const Header = () => {
  return (
    <header id="home">
      <ANIMATION />
      <ANIMATION />

  
      <div className="container header__container ">

        
          

        <h5 className="animate-charcter">Hello, I am </h5>


          

        <div className="animationClass">
          <h1>MOH <span className="target__text">KHALID</span> MOMAND</h1>
        </div>
            {/* Animation */}
           
     
            <div id="animation_container">
            
                <div id="flip">
                  <div><div><h5 className="text-light">Full Stack Developer</h5></div></div>
                  <div><div><h5 className="text-light">Software Engineer</h5></div></div>
                  <div><div><h5 className="text-light">UI/UX Designer</h5></div></div>
                </div>
              </div>



            {/* End of Anitmation */}



            
        
          <CTA />
          <HeaderSocial />

          <div className="me">
            <img src={PROFILE3} alt="MKM Personal " className="me__image"/>
        
          </div>




          <div className='scroll_down__wrapper'>
            <a href="#contact" className="scroll__down  glow-on-hover">Scroll Down</a> 
          </div>


        

        </div>
    </header>
  )
}

export default Header